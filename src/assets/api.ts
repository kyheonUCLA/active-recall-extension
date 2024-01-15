import OpenAI from "openai";

const getCompletion = async (prompt: string) => {
  const API_URL = "http://localhost:5050/api/openai";
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data.choices[0].message.content);
    return data; // You can return the data if needed
  } catch (error) {
    console.error('There was an error:', error);
    throw error; // Rethrow the error if needed
  }
};


export { getCompletion }