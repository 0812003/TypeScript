function add(num1:number,num2:number, printResult:boolean, text:string){
    if(printResult){
        console.log(`${text} ${num1+num2}`)
    }
    return num1+num2;
}

const n1=10;
const n2=20;

const printResult=true;
const text="Sum of two numbers :- ";

const ans= add(n1,n2,printResult,text);

console.log(ans)