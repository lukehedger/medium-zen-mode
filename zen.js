chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Zen-ing ' + tab.url);
  chrome.tabs.insertCSS(null, {file: "zen.css"});
});
