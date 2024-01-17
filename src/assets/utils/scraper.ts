
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

const getCurrentTab = () : chrome.tabs.Tab | null => { 
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs && tabs.length > 0) {
      const currentTab = tabs[0];
      return currentTab;
    }
  })
  return null;
}



export { getSelectedText, getSelectedContext, getCurrentTab }