var predefDomainName = "";

// Diagnose domain name to a valid and available domain
function selectionToUrl(selection) {
	var domain = predefDomainName;
	predefDomainName = "";
	if (domain.isBlank()) {
		console.log("no pre-defined domain");
		domain = selectionToDomainName(selection);
	}
	var url = "http://" + domain;
	console.log("final url: " + url);
	return url;
}

// Diagnose domain name to a valid title of menu item.
// Note: HIGH Performance needed
function selectionToDomainName(selection) {
	selection = pretreat(selection);
	var valid = isValidDomain(selection);
	console.log("'" + selection + "'" + " is " + (valid ? "valid" : "invalid"));
	return predefDomainName = valid ? selection : selection + ".com";
}

function pretreat(selection) {
	return selection.trim().replaceAll(" ", "");
}

// TODO need to enhance performance
function isValidDomain(domain) {
	if (domain.includes(".")) {
		var domains = getDomains();
		for ( var i = 0; i < domains.length; i++) {
			if (domain.endsWith(domains[i])) {
				console.log("found: compared " + (i + 1) + " times");
				return true;
			}
		}
		console.log("not found: compared " + i + " times");
	}
	return false;
}