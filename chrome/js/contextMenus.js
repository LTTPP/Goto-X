function createMenu() {
	console.log("creating menu 'Go to X'");
	chrome.contextMenus.create({
		title : "Go to " + "%s",
		id : "gotoX",
		contexts : [ 'selection' ]
	});
	chrome.contextMenus.onClicked.addListener(function(info, tab) {
		chrome.tabs.create({
			url : selectionToUrl(info.selectionText)
		});
	});
};