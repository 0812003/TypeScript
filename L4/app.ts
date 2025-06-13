// function return type

function add(num1:number,num2:number):number{
    return num1+num2;
}

console.log(add(10,20));

function greet(name:string):void{
    console.log(`Hello ${name}`);
}

// function type & callback()

function addHandle(num1:number,num2:number,cb:(n:number)=>void){
    const result = num1+num2;
    cb(result);
}

addHandle(10,20,(result:number)=>{
    console.log(result);
})