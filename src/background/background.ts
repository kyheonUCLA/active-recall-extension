
import { saveInput } from "../assets/api";
import type { ResponseMessageType, RequestMessageType } from "../assets/types";


chrome.runtime.onInstalled.addListener(() => {
  console.log("I just got installed");
})

// every message has 'type' field
chrome.runtime.onMessage.addListener((message: RequestMessageType, sender, sendResponse) => {
  switch (message.type) {
    case 'SEND_TAB_DATA_REQUEST': 
      handleTabData(message).then( (serverRes) => { 
        sendResponse({ 
          type: 'SEND_TAB_DATA_RESPONSE',
          success: true, //maybe later on will set to
          data: serverRes,
        } as ResponseMessageType)
      })
    break;
    case 'SEND_LOGIN_DATA_REQUEST':
      handleLogin(message).then( (serverRes) => {
        sendResponse({ 
          type: 'SEND_LOGIN_DATA_RESPONSE',
          success: false, 
          data: serverRes,
        } as ResponseMessageType)
      })
    break;
    case 'SEND_REGISTRATION_DATA_REQUEST':
      handleRegistration(message)
    break;
    case "CREATE_QUIZ_REQUEST":
      handleCreateQuiz(message).then( (serverRes) => {
        sendResponse({ 
          type: 'CREATE_QUIZ_RESPONSE',
          success: serverRes.status, //later on will set to serverRes.status 
          data: serverRes,
        } as ResponseMessageType)
      })
    break;
    default:
      console.log(`${message.type} is an invalid message type`)
    break;
  }

  return true //allows for async message passing
});



// later on move these functions to api file?

const handleTabData = async (message: RequestMessageType) => {
  // send to correct API endpoint on server
  const API_URL = 'http://localhost:5050/api/openai'
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    if (!response.ok) {
      throw new Error('Some error');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

const handleCreateQuiz = async (message: RequestMessageType) => {
  // send to correct API endpoint on server
  const API_URL = 'http://localhost:5050/api/openai';
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    if (!response.ok) {
      throw new Error('Some error');
    }
    const result = await response.json();
    console.log(result)
    return result;
  } catch (error) {
    console.error(error);
  }
}

const handleLogin = async (message: RequestMessageType) => {
  const API_URL = 'http://localhost:5050/api/';
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    if (!response.ok) {
      throw new Error('Some error');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

const handleRegistration = async (message: RequestMessageType) => {
  const API_URL = 'http://localhost:5050/api/';
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })
    if (!response.ok) {
      throw new Error('Some error');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}



