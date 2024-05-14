import { Request, Response } from 'express';
import pdfParse from 'pdf-parse';
import fs from 'fs/promises';
import { getTermsAndDefinitions, getDescription} from './utils/openaiUtils';
import initializeDatabase from './utils/database';

export async function pdfUpload(req: Request, res: Response, title : string) {
  if (!req.file) {
    return res.status(400).send('No PDF uploaded.');
  }

  if (!title) {
    return res.status(400).send('No title provided.');
  }

  try {
    const fileBuffer = await fs.readFile(req.file.path);
    const data = await pdfParse(fileBuffer);
    const text = data.text;

    // Split the text into manageable chunks
    const aggregatedFlashcards: Record<string, string> = {};

    const termsDefinitionsText = await getTermsAndDefinitions(text);
    const flashcards = JSON.parse(termsDefinitionsText) as Record<string, string>;

    const flashcard_description = await getDescription(text);

    const db = await initializeDatabase();
    await db.run('INSERT INTO subjects (title, description, flashcards, question, option, correct) VALUES (?, ?, ?, ?, ?, ?)', [title, flashcard_description, JSON.stringify(flashcards)]);

    await fs.unlink(req.file.path);

    res.json({ success: true, message: 'Flashcards stored successfully.', flashcards: aggregatedFlashcards });
  } catch (error) {
    console.error('Error processing PDF:', error);
    res.status(500).send('Error processing PDF.');
  }
}
