/**
 * Your debounce function goes here
 * function(){}
 */
// Example
var alpha;
function debounce(f, ms){
  return function() {
    var savedThis = this;
    var savedArgs = arguments;
    clearTimeout(alpha);
    alpha = setTimeout(function() {
      f.apply(savedThis, savedArgs);
    }, ms);
  };
}
let iterator = 1;
function increaseIteratorBy1() {
  iterator++;
  printIteratorValue();
}
function printIteratorValue() {
  console.log('Iterator value ', iterator);
}
var increaseIterator = debounce(increaseIteratorBy1, 100);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'