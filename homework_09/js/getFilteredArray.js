function getFilteredArray (numList, callback) {
    const array = [];
    forEach( numList, function(el) {
        if (callback(el)) {
            array.push(el);
		}
	});
	return array;
}