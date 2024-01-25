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
    return data; // You can return the data if needed
  } catch (error) {
    console.error('There was an error:', error);
    throw error; // Rethrow the error if needed
  }
};

const sendSMS = async (phone: string, message: string) => {
  const API_URL = 'http://localhost:5050/api/twilio';
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, message }),
    });
    if (!response.ok) {
      throw new Error('Error with sendSMS request');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const saveInput = async (input: string) => {
  try{
    const API_URL = "http://localhost:5050/api/openai";
    const prompt = "Create a multiple choice question based on the following info: " + input
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

  } catch(error){
    console.error('There was an error:', error);
    throw error; // Rethrow the error if needed
  }

}



export { getCompletion, sendSMS, saveInput }