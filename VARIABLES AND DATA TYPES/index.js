//Activity - 1
//TASK:1,2
var a = "hey"
console.log(a); //hey

let b = "hello"
console.log(b);  //hello

//Activity -2 
//TASK:3

const c = 2>3;
console.log(c);   //false

//Activity -3 
//TASK-4
const num = 12
console.log(typeof num);  //NUMBER

const str = "abc"
console.log(typeof str);  //STRING

const boo = true
console.log(typeof boo );   //BOOLEAN

const arr = [1,2,3]
console.log(typeof arr);  //OBJECT

const obj = {
    name : "Siddharth"
}
console.log(typeof obj);    //OBJECT

//ACTIVITY-4
//TASK-5

let assign = "lets assign"

let otherValue = assign

otherValue = "value changed"

console.log(assign);   //lets assign         because they are primitve value that follows stack(deep copy).it gets the copy of value

console.log(otherValue);    //value changed

//ACTIVITY -5
//TASK-6

const observe = "value gets changed or not"

observe = "chnaged value"

console.log(observe);  //Error const value cant be changed

/*
Difference between const and let - 
1.let can be changed,const cant be changed in global.
2.In block scope let and const value can access but not outside block scope.
*/