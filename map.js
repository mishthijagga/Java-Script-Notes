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

const fruits=new Map();
fruits.set("apples",500);
fruits.set("banana",300);
fruits.set("oranges",200);

// console.log(fruits.get("apples"));
// console.log(fruits.size);
// console.log(fruits.delete("apples"));
// console.log(fruits.clear());
// console.log(fruits.has("banana"));


// let text="";
// fruits.forEach(fruits(apples,500)){
//     text+=key+'='+value;
// })

let text="";
for(const x of fruits.entries()){
    text+=x;
    console.log(text);
}
