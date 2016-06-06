var a = parseInt(prompt("Enter a first Number", ""));
var b = parseInt(prompt("Enter a second Number", ""));
var c = prompt("Enter a Operator", "+,-,*,/");
function calc(num1, num2, operator) {
    var num1;
    var num2;
    var operator;
    if (operator == "+") {
        var result = num1 + num2;
    }
    else if (operator == "-") {
        var result = num1 - num2;
    }
    else if (operator == "*") {
        var result = num1 * num2;
    }
    else if (operator == "/") {
        var result = num1 / num2;
    }
    else {
        alert("invalid input");
    }
    return result;
}
alert(a + " " + c + " " + b + " is " + calc(a, b, c));
