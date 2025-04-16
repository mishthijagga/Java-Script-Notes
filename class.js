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


class Person{

    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

greet(){
    console.log("hi there i'm", this.firstname);
}
}
// compliment(name,object){

//     return "That's a wonderful"+object+"," + name;
// }
// }
// let compliment=package.compliment("harry","hat");
// console.log(compliment);