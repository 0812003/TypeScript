// UNION,LITERAL,TYPE ALIAS

// UNION - |
// function combine(num1 : number|string,num2:number|string){
//     let result : number|string;
//     if(typeof num1==="number"&&typeof num2==="number"){
//         result=num1+num2;
//     }else{
//         result=num1.toString()+num2.toString();
//     }
//     return result;
// }

// console.log(combine(10,20));
// console.log(combine("Soham","Sangare"));


// LITERAL

// function combine(num1 : number|string,num2:number|string,conversionType:"as-number"|"as-string"){
//     let result : number|string;
//     if(typeof num1==="number"&&typeof num2==="number" || conversionType==="as-number"){
//         result=+num1 + +num2;
//     }else{
//         result=num1.toString()+num2.toString();
//     }
//     return result;
// }

// console.log(combine(10,20,"as-number"));
// console.log(combine("Soham","Sangare","as-string"));


// TYPE-ALIAS
type combimable=number|string;
function combine(num1 : combimable,num2:combimable,conversionType:"as-number"|"as-string"){
    let result : combimable;
    if(typeof num1==="number"&&typeof num2==="number" || conversionType==="as-number"){
        result=+num1 + +num2;
    }else{
        result=num1.toString()+num2.toString();
    }
    return result;
}

console.log(combine(10,20,"as-number"));
console.log(combine("Soham","Sangare","as-string"));

type User = {
    name:string;
    age:number;
}

const user:User={
    name:"Soham",
    age:22
}

function greet(user:User){
    console.log(`Hello ${user.name}`);
}

greet(user);