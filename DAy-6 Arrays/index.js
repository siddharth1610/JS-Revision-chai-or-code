//Activity-1  Array Creation and Access
//Task-1

let myArr=[1,2,3,5,8,9]
// console.log(myArr);

//Task-2

// console.log(myArr[0]);
// console.log(myArr.length);
// console.log(myArr[5]);

//Activity-2
//Task-3

let myArr1=[1,2,3,4,5,6]

//  myArr1.push(4)
// console.log(myArr1);

//Task-4

// myArr1.pop()
// console.log(myArr1)

//Task-5

// myArr1.shift()
// console.log(myArr1);

//Task-6

// let myArr2 = [3,2,1,5,76]

// myArr2.unshift(5); 
// console.log(myArr2)

//Activity-3
//Task-7

let array = [2,3,4,5,1,89]

// let arrMap= array.map(item=>{
//     return item*2
// })

// console.log(arrMap);

//task-8

// let useFilter = array.filter(item=>{
//     return item>5
// })
// console.log(useFilter);

//task-9
const newShoppingCart = [
    {
        itemName: "react course",
        price: 3499
    },
    {
        itemName: "node.js course",
        price: 1999
    },
    {
        itemName: "angular course",
        price: 4599
    },
    {
        itemName: "vue.js course",
        price: 2999
    }
];

let price = newShoppingCart.reduce((acc,value)=>{
    return acc + value.price},0)
console.log(price);



//Activity-4 
//Task-10

let useFor = [3,56,87,8,7856,7]

// let value=[]
// for(let i=0;i<useFor.length;i++){
//     value.push(useFor[i])

// }
// console.log(value);

//Task-11

// useFor.forEach(item=>{
//     return console.log(item);
// })

//Activity-5

let myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

//   console.log(myArray);

  //TAsk-13

//   console.log(myArray[1][1]);