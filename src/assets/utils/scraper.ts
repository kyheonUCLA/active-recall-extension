
const getSelectedText = () : string => {
  const selection = window.getSelection();
  const text = selection?.toString().trim();
  return text && text.length > 0 ? text : "";
}

const getSelectedContext = () : string => {
  const selection = window.getSelection();
  const context = selection?.anchorNode?.parentNode.textContent.trim();
  return context && context.length > 0 ? context : "";
}

const getCurrentURL = () : string => { 
  return document.URL
}

export default { getSelectedText, getSelectedContext, getCurrentURL }