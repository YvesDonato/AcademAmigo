import express from 'express';
import initializeDatabase from './utils/database';
import multer from 'multer';
import { pdfUpload } from './pdfHandler';
import cors from 'cors';

const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' });

const corsOptions = {
    origin: '*',
    methods: 'GET,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.post('/api/upload', upload.single('pdf'), async (req, res) => {
    const title = req.body.title;
    if (!title) {
        return res.status(400).send('No title provided.');
    }

    try {
        const db = await initializeDatabase();
        const query = 'SELECT * FROM subjects WHERE title = ?';
        const row = await db.get(query, [title]);

        if (row) {
            return res.status(409).send('Title already exists in the database.');
        }

        pdfUpload(req, res, title);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Failed to upload PDF.');
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/api/subjects', async (req, res) => {
    try {
        const db = await initializeDatabase();
        const subjects = await db.all('SELECT id, subject, title, description FROM subjects');
        res.json(subjects);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Failed to fetch subjects.');
    }
});

app.get('/api/flashcards/:title', async (req, res) => {
    let { title } = req.params;
    title = title.replace(/-/g, ' ');
    try {
        const db = await initializeDatabase();
        const query = 'SELECT * FROM subjects WHERE title = ?';
        const row = await db.get(query, [title]);

        if (!row) {
            return res.status(404).send('Flashcard set not found.');
        }

        // Since flashcards is stored as JSON string, parse it into a JSON object
        row.flashcards = JSON.parse(row.flashcards);

        res.json(row);  // Return the entire row including parsed flashcards
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Failed to load flashcard set.');
    }
});

app.delete('/api/flashcards/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const db = await initializeDatabase();
        const query = 'DELETE FROM subjects WHERE id = ?';
        const result = await db.run(query, [id]);

        if (result.changes === 0) {
            return res.status(404).send('Flashcard set not found.');
        }

        res.send({ success: true, message: 'Flashcard set deleted successfully.' });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).send('Failed to delete flashcard set.');
    }
});
