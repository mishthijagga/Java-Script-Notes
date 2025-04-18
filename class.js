// classes and objects

// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");

// this keyword refers to the object it belongs ResizeObserver, so it is the first property of the instance of the ClassName.

// class Dog{
//     constructor(dogName, weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog=new Dog("JavaScript", 2.4, "brown", "chihuahua");


// class Person{

//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }


// }

// let p=new Person("maaike", "van putten");
// console.log("Hi",p.firstname);

// METHODS

// class Person{

//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
//         }
    
//     greet(){
//         console.log("hi there i'm", this.firstname);
//     }
// }


// class Person{

//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }

// greet(){
//     console.log("hi there i'm", this.firstname);
// }
// }

// let p=new personalbar("Maaike", "van putten");
// p.greet();
// compliment(name,object){

//     return "That's a wonderful"+object+"," + name;
// }
// }
// let compliment=package.compliment("harry","hat");
// console.log(compliment);


// to initiate onject attributed values- use of constructor


// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;


//     constructor(firstname,lastname){
//         if(firstname.startsWith("M")){
//             this.#firstname=firstname;
//         }
//         else{
//             this.#firstname="M"+firstname;
//         }
//         this.#lastname=lastname;
//     }
//     }

// let p=new personalbar("maria","saga");
// console.log(p);

// constructor(firstname,lastname){
//     if(firstname.startsWith("M")){
//         this.#firstname=firstname;
//     }
//     else{
//         this.#firstname="M"+firstname;
//     }
//     this.#lastname=lastname;
// }



// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname=firstname;
//         this.#lastname=lastname;
// }

// get firstname(){
//     return this.#firstname;
// }
// set firstname(firstname){
//     this.#firstname=firstname;
// }
// get lastname(){
//     this.#lastname=lastname;
// }
// set lastname(lastname){
//     this.#lastname=lastname;
// }
// }
// let p=new Person("mishthi","jagga");
// console.log(p.firstname);

// INHERITANCE

// class Vehicle{
//     constructor(color,currentspeed,maxspeed){
//         this.color=color;
//         this.currentspeed=currentspeed;
//         this.maxspeed=maxspeed;
//     }
//     move(){
//         console.log("moving at", this.currentspeed);
//     }
//     accelerate(amount){
//         this.currentspeed=this.currentspeed+amount;
//     }
// }

// class Motorcycle extends Vehicle{
//     constructor(color,currentspeed,maxspeed,fuel){
//         super(color,currentspeed,maxspeed);
//         this.fuel=fuel;

//     }
//     doWheelie(){
//         console.log("Driving on one wheel");
//     }
// }
// let motor =new Motorcycle("black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// motor.move();

// WE CANNOT ACCESS ANY MOTORCYCLE PROPERTY OR METHODS IN OUR VEHICLE CLASS

// PROTOTYPES

class Person{
       
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
    }
    greet(){
        console.log("Hi there!!");
    }
}
    Person.prototype.introduce=function(){
        console.log("hi,im ", this.firstname);
    
}
Person.prototype.favoriteColor="green";
let p=new Person("Maria","Saga");
console.log(p.favoriteColor);
p.introduce();
