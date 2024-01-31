
const responseMessageTypes = [
  "SEND_TAB_DATA_RESPONSE",
  "SEND_LOGIN_DATA_RESPONSE",
  "SEND_REGISTRATION_DATA_RESPONSE",
  "SEND_POPUP_DATA_RESPONSE",
] as const

const requestMessageTypes = [
  "SEND_TAB_DATA_REQUEST",
  "SEND_LOGIN_DATA_REQUEST",
  "SEND_REGISTRATION_DATA_REQUEST",
  "SEND_POPUP_DATA_REQUEST",
] as const

type RequestMessageType = {
  type: typeof requestMessageTypes[number],
  body: any,
}

type ResponseMessageType = {
  type: typeof responseMessageTypes[number],
  success: boolean,
  data?: any, //maybe data is required depends on what data the server sends back
}

type TabDataType = {
  text: string,
  context: string,
  url: string,
}

export { RequestMessageType, ResponseMessageType }
export { TabDataType }

