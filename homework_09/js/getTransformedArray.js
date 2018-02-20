function getTransformedArray(list, func) {
    let numlist = [];
    forEach(list, function(el) {
        numlist.push(func (el))
		});
		return numlist;
}