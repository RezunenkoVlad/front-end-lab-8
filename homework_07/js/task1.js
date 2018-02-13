window.onload = function() {
    var a = prompt('enter natural number from 0 to 20');
    var num1 = parseInt(a); 
    if((num1<=0) || (num1>20)) {
        console.log('Incorrect')
    } 
function createPyramid(num1) {
    for (var i = 1; i <= num1; i++) {
         row = '';
    for (var j = 1; j <= (num1 - i); j++) {
         row += '   ';
        }
    for (var k = 1; k < (i*2); k++) {
         row += '[~]';
        }
    console.log(row);
      }
    }
    createPyramid(num1);
}
