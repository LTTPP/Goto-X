// This event listener will determine if the context menu should be
// updated based on if the right-button was clicked and if there is
// an invalid(not unavailable) none-linked URL selection.
document.addEventListener("mousedown", function(event) {
	if (event.button !== 2) {
		return false;
	}
	console.log("right-button was clicked");
	var selection = window.getSelection().toString();
	console.log("selected text is '" + selection + "'");

	if (selection && selection.trim() !== "") {
		// get selected text and send request to bkgd page to update menu
		console.log("send request to bkgd page to update context menu");
		chrome.runtime.sendMessage({
			'request' : 'updateContextMenu',
			"selection" : selection
		}, function(response) {
			console.log("updating context menu: " + response.result);
		});
	}
}, false);