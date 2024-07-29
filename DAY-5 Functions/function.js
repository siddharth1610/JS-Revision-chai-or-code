//Activity -1
//Task-1

function ev(nm1) {
  if (nm1 % 2 == 0) {
    console.log("nm1 Is Even");
  } else {
    console.log("nm1 is odd");
  }
  return;
}

ev(2);

//Task-2

function square(a) {
  return a * a;
}

console.log(square(4));

//Activity-2
//Task-3

let maximum = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(maximum(4, 9));

// const max= function(a,b){
//     return a>b ? a:b
// }
// console.log(max(8,24));

//TAsk-4 #try with concat

let concat = function (str1, str2) {
  let str3 = str1 + str2;
  return str3;
};

console.log(concat("siddharth", "Singh"));

//Activity-3
//task-5

const arrowAdd = (a, b) => {
  let result = a + b;
  return result;
};

console.log(arrowAdd(5, 6));

//task-6
let speacial = (str, cha) => {
  return str.includes(cha);
};

console.log(speacial("Siddhartg", "z"));

//Activity -4
//task-7

function pro(a, b = 4) {
  return a * b;
}
console.log(pro(4));

//task-8

function user(name, age = 77) {
  return `Welcome ${name} ${age}`;
}
console.log(user("rahul"));

//Activity -5
//task-9

function high(str, n) {
  for (let i = 1; i <= n; i++) {
    str();
  }
}
function sayhi() {
  console.log("good morning");
}

high(sayhi, 4);


//task-10
function pr(sum,prdt,value){
    let one = sum(value)
    let two = prdt(one)
    return two
}
function sum(a,b=3){
return a +b
}
function prdt(b){
    return b*4
}
let result = pr(sum,prdt,1)
console.log(result);


// function applyFunction(first,second,value){
//     let one=first(value);
//     let two=second(one);
//     return two;
// }

// function add5(num){
//     return num+5;
// }

// function multiplyBy2(num){
//     return num*2;
// }
// let value=4;
// let result=applyFunction(add5,multiplyBy2,value)
// console.log(result); 