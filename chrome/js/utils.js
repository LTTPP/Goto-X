if (typeof String.prototype.isEmpty !== "function") {
	String.prototype.isEmpty = function() {
		return this === undefined || this === null || this === "";
	};
};

if (typeof String.prototype.isBlank !== "function") {
	String.prototype.isBlank = function() {
		return this.isEmpty() || this.trim() === "";
	};
};

function isValidDomain(domain) {
	return domain.endsWith(".com") || domain.endsWith(".io") || domain.endsWith(".net");
};