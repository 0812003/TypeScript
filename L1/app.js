function add(num1, num2, printResult, text) {
    if (printResult) {
        console.log("".concat(text, " ").concat(num1 + num2));
    }
    return num1 + num2;
}
var n1 = 10;
var n2 = 20;
var printResult = true;
var text = "Sum of two numbers :- ";
var ans = add(n1, n2, printResult, text);
console.log(ans);
