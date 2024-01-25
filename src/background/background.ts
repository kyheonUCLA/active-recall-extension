import { getCompletion } from "../assets/api";
import type { MessageType } from "../assets/types";

chrome.runtime.onInstalled.addListener(() => {
  console.log("I just got installed");
})

// every message has 'type' field
chrome.runtime.onMessage.addListener((message: MessageType, sender, sendResponse) => {
  switch (message.type) {
    case 'CONTENT_DATA_RESPONSE': 
      getCompletion("name an animal").then( (response) => {
        sendResponse(response)
      })
      break;
    default:
      console.log('message type not yet detected')
      break;
  }
  return true;
});



