
const messageTypes = [
  "CONTENT_DATA_RESPONSE",
  "CONTENT_DATA_REQUEST",
] as const

type MessageHeader = {
  type: typeof messageTypes[number],
} 

// Later I will replace any with expected datatypes, like TabInfoType, ChatGPTType, etc
type MessageBody = {
  body?: any,
}

type MessageType = MessageHeader & MessageBody;

type DataType = {
  text: string,
  context: string,
  url: string,
}

export { DataType, MessageType }

