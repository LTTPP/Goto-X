// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
	createMenu();
});