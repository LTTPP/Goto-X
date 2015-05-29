if (typeof String.prototype.endsWith !== 'function') {
	String.prototype.endsWith = function(suffix) {
		return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};
}

var isValidDomain = function(domain) {
	return domain.endsWith(".com") || domain.endsWith(".io") || domain.endsWith(".net");
};