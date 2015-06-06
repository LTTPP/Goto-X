GotoX.domains = [];

function parseDomains() {
	console.log("start parsing tlds.json");
	$.getJSON("../data/tlds.json", function(data) {
        GotoX.domains = data;
		console.log("finish parsing tlds.json");
	});
}

function getDomains() {
	return GotoX.domains;
}