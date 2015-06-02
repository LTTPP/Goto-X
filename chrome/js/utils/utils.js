if (typeof String.prototype.isEmpty !== "function") {
	String.prototype.isEmpty = function() {
		return this === null || this === "";
	};
}

if (typeof String.prototype.isBlank !== "function") {
	String.prototype.isBlank = function() {
		return this.isEmpty() || this.trim() === "";
	};
}

function escapeRegExp(string) {
	return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

if (typeof String.prototype.replaceAll !== "function") {
	String.prototype.replaceAll = function(regexp, replaceValue) {
		return this.replace(new RegExp(escapeRegExp(regexp), "g"), replaceValue);
	};
}