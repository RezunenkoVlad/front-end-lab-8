function decypherPhase(obj, srt) {
	var newO = new Object();
	for (var prop in obj) {
		newO[obj[prop]] = prop;
	}
	return cypherPhrase(newO, str);
}