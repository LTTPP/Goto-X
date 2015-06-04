var domains = [];

function parseDomains() {
	console.log("start parsing tlds.json");
	$.getJSON("../data/tlds.json", function(data) {
		domains = data;
		console.log("finish parsing tlds.json");
	});
}

function getDomains() {
	return domains;
}