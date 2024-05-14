import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

sqlite3.verbose();

async function initializeDatabase() {
  const db = await open({
    filename: './database.sqlite',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS subjects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      subject TEXT,
      title TEXT,
      description TEXT,
      flashcards TEXT,
      question TEXT,
      option TEXT,
      correct TEXT
    )
  `);

  return db;
}

export default initializeDatabase;
