function createMenu() {
	chrome.contextMenus.create({
		title : "Go to " + "%s",
		id : "gotoX",
		contexts : [ 'selection' ]
	}, function() {
		console.log("created menu 'Go to X'");
	});
	chrome.contextMenus.onClicked.addListener(function(info, tab) {
		console.log("'Go to X' menu was clicked");
		chrome.tabs.create({
			url : selectionToUrl(info.selectionText)
		});
	});
};

function updateMenu(title) {
	chrome.contextMenus.update("gotoX", {
		title : "Go to " + title
	}, function() {
		console.log("updated X of menu 'Go to X' to '" + title + "'");
	});
};