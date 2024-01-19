import { MessageType } from "../assets/types";

chrome.runtime.onInstalled.addListener(() => {
  console.log("I just got installed");
})

// every message garunteed to have 'type' field
chrome.runtime.onMessage.addListener((message: MessageType) => {
  console.log("recieved a message");
  console.log(message);
  
  // based on the type route the message to the correct place
  switch (message.type) {
    case 'CONTENT_DATA_RESPONSE': 
      chrome.runtime.sendMessage(message);
      break;
    default:
      console.log('message type not yet detected')
      break;
  }
});


