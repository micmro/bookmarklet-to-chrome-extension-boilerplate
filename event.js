chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.executeScript(null, {
        file: "bookmarklet-code.js"
    });
});