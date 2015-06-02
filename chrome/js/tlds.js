var domains = [];

function parseDomains() {
	console.log("start parsing domain.json");
	$.ajax({
		url : "../data/tlds.json",
		success : function(data) {
			domains = JSON.parse(data);
			console.log("got data from domain.json: " + domains[10]);
		}
	});

	console.log("---------------------------");

	$.ajax({
		url : "../data/tlds.json",
		success : function(data) {
			domains = $.parseJSON(data);
			console.log("got data from domain.json: " + domains[10]);
		}
	});

	console.log("+++++++++++++++++++++++++++");

	$.getJSON("../data/tlds.json", function(data) {
		domains = data;
		console.log("got data from domain.json: " + data[10]);
	});

	console.log("end parsing domain.json");
}

function getDomains() {
	return domains;
}