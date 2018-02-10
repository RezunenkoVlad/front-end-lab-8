window.onload = function() {
    var a = prompt('enter value side a');
    var b = prompt('enter value side b');
    var c = prompt('enter value side c');
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var num3 = parseInt(c);
    var p = (num1+num2+num3)/2;
    var area = Math.sqrt(p*((p-num1)*(p-num2)*(p-num3)));
    if((a<=0) || (b<=0) || (c<=0)) {
        console.log('Incorrect data');
    }
    if((num3*num3==num1*num1+num2*num2) || (num1*num1==num3*num3+num2*num2) || (num2*num2==num1*num1+num3*num3)) {
        console.log('Type of triangle is Right triangle and square is ' + area.toFixed(2));
    }
    else if((a==b) && (b==c)) {
        console.log('Type of triangle is Equilateral and square is ' + area.toFixed(2)); 
    }
    else if((a==b) && (b!=c)) {
        console.log('Type of triangle is Isosceles and square is ' + area.toFixed(2));   
    } 
    else if((a!=b) && (b!=c) && (a!=c)) {
        console.log('Type of triangle is Scalene and square is ' + area.toFixed(2));  
    } 
}
