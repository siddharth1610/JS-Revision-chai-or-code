//ACTIVITY-1
//TASK-1
function add(a,b){
    return a+b;
}
const sum = add(9,0)
console.log(`sum : ${sum}`);       //9

//TASK-2
function sub(a,b){
    return a-b;
}
const result = sub(9,0)
console.log(`sub ${result}`); 

//TASK-3
function mul(a,b){
    return a*b;
}
const result1 = mul(9,0)
console.log(`mul : ${result1}`);

//TASK-4
function div(a,b){
    return a/b;
}
const result2 = div(9,3)
console.log(`div :  ${result2}`);

//TASK-5
function rem(a,b){
    return a%b;
}
const result3 = rem(9,2)
console.log(`remainder :  ${result3}` );

//ACTIVITY-2 
//TASK-6
let a = 100
let  b = 50

b += a
console.log("b :" + b);
//TASK-7

let a1 = 100
let  b1 = 50

b -= a
console.log("b :" + b);

//Acitivity-3
//TASK-8
function compare(a,s,d){
    let q = a>s || a<s
    let w= q>d ||q<d
     
    return w
}

let y= compare(5,7,9);
console.log(y);

//TASK-9


//TASK-10