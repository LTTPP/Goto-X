// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
	createMenu();
});

// Update context menu when received message from content script.
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log("received message from coontent script");
	if (message.request === "updateContextMenu") {
		var newTitle = selectionToDomainName(message.selection);
		updateMenu(newTitle);
		sendResponse({
			result : "success"
		});
	}
});