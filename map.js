//create a map

// const fruits=new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200]
// ]);
// console.log(fruits);

// const fruits=new Map();

// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);

// console.log(fruits);

// const fruits=new Map();
// fruits.set("apples",500);
// fruits.set("banana",300);
// fruits.set("oranges",200);

// console.log(fruits.get("apples"));
// console.log(fruits.size);
// console.log(fruits.delete("apples"));
// console.log(fruits.clear());
// console.log(fruits.has("banana"));


// let text="";
// fruits.forEach(fruits(apples,500)){
//     text+=key+'='+value;
// })

// let text="";
// for(const x of fruits.entries()){
//     text+=x;
//     console.log(text);
// }


// const apples={name:'Apples'};
// const bananas={name:'Bananas'};
// const oranges={name:'Oranes'};

// const fruits=new Map();
// fruits.set(apples,500);
// fruits.set(bananas,300);
// fruits.set(oranges,200);

// fruits.get("apples");


// const fruits=[
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150}

// ];

// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }
// const result = Map.groupBy(fruits,myCallback);
// console.log(result);


// const person={
//     firstName:"John",
//     lastName:"doe",
//     age:50
// };
// let {firstName,lastName}=person;
// console.log(person);

                         // DESTRUCTURING IS NOT DESTRUCTIVE

                                  // ALIAS
// let{lastName:name}=person;
// console.log(name);

                              // STRING DESTRUCTURING

// let name ="GurukulTheSchools";
// let[a1,a2,a3,a4,a5]=name;
// console.log(name);

// const fruits=["Bananas","oranges","apples","mangoes"];
// let[fruit1,fruit2]=fruits;
// console.log(fruits);

                                // DESTRUCTURING

// let[fruit1,,,fruit2]=fruits;
// console.log(fruits);

// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruits);

// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers
// console.log(numbers);


                                    //  EXPONENTIAL
// let x=5;
// let z=x**2;
// console.log(z);

                        // JAVASCRIPT ARRAY INCLUDES

// const fruits=["banana","orange","apple","mango"];
// fruits.includes("mango");   
// const fruits=["banana","orange","apple","mango"];
// fruits.includes("banana",3);

// console.log(banana);


                            //  TRAILING COMMA

// const arr=[
//     "one",
//     "two",
//     "three",
// ];
// console.log(arr);


// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr);

// const sparseArray=[1,,,4,5,,];
// console.log(sparseArray);

// 
// const person={
//     firstName:"John",
//     lastName:"Davis",
//     age:30,

// }
// console.log(person);


const person={
    firstName:"John",
    lastName:"Davis",
    ,
    age:30,

}
console.log(person);

