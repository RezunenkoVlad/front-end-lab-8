function cypherPhrase(obj, str) {
	var array = getTransformedArray(str, function(i) {
		return obj[i] || i;
	});
	return array.join("");
}