import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: "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",
});

export async function getDescription(text: string): Promise<String> {
  const response = await openai.chat.completions.create({
    messages: [{"role": "system",
       "content": "Generate a description of the provided text notes. Make sure that all responses are very short and concise. One sentence ONLY and Only and at most 6 words. The text is the following:"
      },
      {
        role: "user",
        content: text
      }
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.1,
    max_tokens: 2048,
    n: 1,
    stop: null,
  });

  console.log("Response from OpenAI API (Description):", response);

  if (response.choices[0].message.content) {
    return response.choices[0].message.content;
  } else {
    throw new Error('No content received from OpenAI API.');
  }
}

export async function getTermsAndDefinitions(text: string): Promise<string> {

  const response = await openai.chat.completions.create({
    messages: [{"role": "system",
      "content": `Please meticulously review the entire content of the provided text notes. Identify and list every key term, concept, methodology, definition, principle, formula, and significant point discussed. For each item, create a flashcard, using the term or concept as the 'question' and providing its definition, explanation, or detailed description as the 'answer'. Your list should be exhaustive, covering:

      Every fundamental terminology specific to the subject matter detailed in the notes.
      Complete descriptions of all mentioned methodologies or frameworks, emphasizing their significance and applications.
      In-depth explanations of all introduced processes, models, or theories, including their components, functions, and importance.
      All critical distinctions, comparisons, classifications made to elucidate the subject matter.
      Any given examples or applications that help clarify complex concepts or processes.
      Ensure that all responses are short and concise. The output should be formatted as a single JSON object with each key representing a term and its associated value being the definition. Capitalize the first letter of all terms. The compilation should be comprehensive, accurate, and reflective of the content's depth and breadth without unnecessary repetition.
      
      Example JSON format for clarity:
      
      json
      {
        "Term": "Definition",
        "Another Term": "Its Definition",
        ...
      }
      Please provide the text notes from which to create this structured data.

      The text is the following:`},
      {
        role: "user",
        content: text
      }
    ],
    model: 'gpt-4-turbo',
    temperature: 0.1,
    max_tokens: 4000,
    n: 1,
    stop: null,
  });

  console.log("Response from OpenAI API (Terms):", response.choices[0]?.message?.content);

  const flashcards = response.choices[0]?.message?.content;

  if (flashcards) {
    const regex = /\{[^\}]*\}/g; 
    const filteredText = flashcards.match(regex);
    
    return filteredText ? filteredText[0] : '';
  } else {
    console.error("No content to process for flashcards.");
    return '';
  }
}
