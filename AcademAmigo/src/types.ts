export interface Flashcards {
    [key: string]: string;
}

export interface Subject {
    id: number;
    subject: string;
    title: string;
    description: string;
    flashcards: Flashcards; // This will be parsed from a JSON string
}

export interface Quiz {
    subject: string;
    questions: Question[];
}

export interface Question {
    question: string;
    options: Option[];
}

export interface Option {
    option: string;
    correct: boolean;
}
