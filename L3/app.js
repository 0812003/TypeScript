// UNION,LITERAL,TYPE ALIAS
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
console.log(combine(10, 20, "as-number"));
console.log(combine("Soham", "Sangare", "as-string"));
var user = {
    name: "Soham",
    age: 22
};
function greet(user) {
    console.log("Hello ".concat(user.name));
}
greet(user);
