var a:number = parseInt(prompt("Enter a first Number",""));
var b:number = parseInt(prompt("Enter a second Number",""));
var c:string = prompt("Enter a Operator", "+,-,*,/");
function calc(num1:number,num2:number,operator:string) {
    var num1:number;
    var num2:number;
    var operator:string;
    if (operator == "+") {
        var result = num1 + num2;
    }
    else if(operator == "-"){
        var result = num1 - num2;
    }
    else if(operator == "*"){
        var result = num1 * num2;
    }
    else if(operator == "/"){
        var result = num1 / num2;
    }
    else{
        alert("invalid input");
    }
    return result;
}
alert( a + " " + c + " " + b + " is " + calc(a, b, c));