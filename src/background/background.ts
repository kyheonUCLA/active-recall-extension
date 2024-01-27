import { getCompletion } from "../assets/api";
import type { ResponseMessageType, RequestMessageType } from "../assets/types";

chrome.runtime.onInstalled.addListener(() => {
  console.log("I just got installed");
})

// every message has 'type' field
chrome.runtime.onMessage.addListener((message: RequestMessageType, sender, sendResponse) => {
  switch (message.type) {
    case 'SEND_TAB_DATA_REQUEST': 
      handleTabData().then( (serverRes) => {
        sendResponse({ 
          type: 'SEND_TAB_DATA_RESPONSE',
          success: true, //maybe later on will set to
          data: serverRes,
        } as ResponseMessageType)
      })
    break;
    case 'SEND_POPUP_DATA_REQUEST':
      handlePopupData().then( (serverRes) => {
        sendResponse({ 
          type: 'SEND_POPUP_DATA_RESPONSE',
          success: true, // maybe later on will set to httpResponse.ok
        } as ResponseMessageType)
      })
    break;
    default:
      console.log('invalid message type')
    break;
  }

  return true;
});

const handleTabData = async () => {
  // send to correct API endpoint on server
  // return response from server

  return await getCompletion('name an animal')

}

const handlePopupData = async () => {
  // send to correct API endpoint on server
  // return response from server
}




