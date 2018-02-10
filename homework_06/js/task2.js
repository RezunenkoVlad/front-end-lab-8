window.onload = function() {
    var a = prompt('EURO');
    var b = prompt('USD');
    var num1 = parseInt(a);
    var num2 = parseInt(b);
    var euro = Math.round(num1*33.2324);
    var usd = Math.round(num2*27.1240);
    var etu = 33.2324/27.1240;
    console.log(num1 + ' euros are equal ' + euro + ' UAH, ' + num2 + ' dollars are equal ' + usd + ' UAH, one euro is equal ' + etu.toFixed(3) + ' dollars.');
}

