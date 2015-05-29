// diagnose domain name to a valid and available domain
function selectionToUrl(selection) {
	var valid = isValidDomain(selection);
	console.log(selection + " is " + (valid ? "valid" : "invalid"));
	var domain = valid ? selection : selection + ".com";
	var url = "http://" + domain;
	return url;
};