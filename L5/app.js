var value = "data";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
var randomValue = "Hello";
randomValue = 42;
randomValue = true;
function generateError(msg, code) {
    throw { msg: msg, code: code };
}
var res = generateError("Server Error", 500);
console.log(res);
