import { Quiz } from '../types';

export const quizzes: Quiz[] = [
    {
        subject: "History",
        questions: [
            { question: "Who was the first President of the United States?", options: [
                { option: "Thomas Jefferson", correct: false },
                { option: "George Washington", correct: true },
                { option: "Abraham Lincoln", correct: false },
                { option: "John Adams", correct: false },
                { option: "Alexander Hamilton", correct: false },
            ]},
            { question: "In which year did Christopher Columbus reach the Americas?", options: [
                { option: "1492", correct: true },
                { option: "1520", correct: false },
                { option: "1607", correct: false },
                { option: "1776", correct: false },
                { option: "1812", correct: false },
            ]},
            { question: "Who was the leader of the Soviet Union during World War II?", options: [
                { option: "Joseph Stalin", correct: true },
                { option: "Vladimir Lenin", correct: false },
                { option: "Mikhail Gorbachev", correct: false },
                { option: "Nikita Khrushchev", correct: false },
                { option: "Leon Trotsky", correct: false },
            ]},
            { question: "Which ancient civilization built the pyramids of Giza?", options: [
                { option: "Mesopotamia", correct: false },
                { option: "Greece", correct: false },
                { option: "Rome", correct: false },
                { option: "Egypt", correct: true },
                { option: "China", correct: false },
            ]}
        ]
    },
    {
        subject: "Science",
        questions: [
            { question: "What is the chemical symbol for water?", options: [
                { option: "H2O", correct: true },
                { option: "CO2", correct: false },
                { option: "O2", correct: false },
                { option: "N2", correct: false },
                { option: "CH4", correct: false },
            ]},
            { question: "Who developed the theory of relativity?", options: [
                { option: "Isaac Newton", correct: false },
                { option: "Albert Einstein", correct: true },
                { option: "Niels Bohr", correct: false },
                { option: "Galileo Galilei", correct: false },
                { option: "Stephen Hawking", correct: false },
            ]}
        ]
    },
    {
        subject: "Geography",
        questions: [
            { question: "Which is the longest river in the world?", options: [
                { option: "Amazon", correct: true },
                { option: "Nile", correct: false },
                { option: "Yangtze", correct: false },
                { option: "Mississippi-Missouri", correct: false },
                { option: "Yenisei", correct: false },
            ]},
            { question: "What is the capital of Australia?", options: [
                { option: "Sydney", correct: false },
                { option: "Melbourne", correct: false },
                { option: "Canberra", correct: true },
                { option: "Brisbane", correct: false },
                { option: "Perth", correct: false },
            ]}
        ]
    },
    {
        subject: "General Knowledge",
        questions: [
            { question: "What is the currency of Japan?", options: [
                { option: "Yuan", correct: false },
                { option: "Won", correct: false },
                { option: "Yen", correct: true },
                { option: "Ringgit", correct: false },
                { option: "Baht", correct: false },
            ]},
            { question: "Which planet is known as the Red Planet?", options: [
                { option: "Earth", correct: false },
                { option: "Mars", correct: true },
                { option: "Venus", correct: false },
                { option: "Jupiter", correct: false },
                { option: "Saturn", correct: false },
            ]}
        ]
    }
];

