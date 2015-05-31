// Diagnose domain name to a valid and available domain
function selectionToUrl(selection) {
	var valid = isValidDomain(selection);
	console.log("'" + selection + "'" + " is " + (valid ? "valid" : "invalid"));
	var domain = valid ? selection : selection + ".com";
	var url = "http://" + domain;
	return url;
};

// Diagnose domain name to a valid title of menu item.
function selectionToTitle(selection) {
	selection = selection.trim();
	var valid = isValidDomain(selection);
	console.log("'" + selection + "'" + " is " + (valid ? "valid" : "invalid"));
	return valid ? selection : selection + ".com";
};