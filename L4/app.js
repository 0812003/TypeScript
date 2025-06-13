// function return type
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
function greet(name) {
    console.log("Hello ".concat(name));
}
// function type & callback()
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
