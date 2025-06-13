let value: unknown = "data";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;

function generateError(msg:string,code:number):never{
    throw {msg:msg,code:code};
}
const res=generateError("Server Error",500);
console.log(res);