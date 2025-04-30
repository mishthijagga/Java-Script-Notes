               
                                  //CALLBACKS
                                 
// function doSomething(callback){
//     callback();
// }              
// function sayHi(){
//     console.log("Hi");
// }    
// doSomething(sayHi);               


// function judge(grade){
//     switch(true){
//         case grade =="A":
//         console.log("You got an",grade,":amazing!");
//         break;

//         case grade=="B":
//             console.log("you got a",grade,"well done!");
//             break;


//             case grade=="C":
//             console.log("you got a",grade,"alright");
//             break;

//             case grade=="D":
//             console.log("you got a",grade,"hmm......!");
//             break;

//             default:
//                 console.log("An",grade,"What?");

//     }
    
// }

// function getGrade(score, callback){
//     let grade;
//     switch(true){
//         case score >=90:
//         grade = "A";
//         break;
//         case score >=80:
//         grade = "B";
//         break; 
//         case score >=70:
//         grade = "C";
//         break; 
//         case score >=60:
//         grade = "D";
//         break;
//         default:
//             grade ="F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);


                                         // PROMISE

// This func needs the two parameters and these parameters are callbacks.We have called them resolve and PromiseRejectionEvent.             

// when  resolve() is called , the promise is presumed to be successful and whatever is bw the arrows is returned and used as input for then method on the promise object .if reject () is called , the promise faoled and the catch() method on the promise object (if present) is executes with the argument 

// let promise=new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("success:",value);
//     },
//     function(error){
//         console.log("error:",error);
//     }
//     );

const promise = new Promise((resolve, reject) => {
    resolve("Success!");
}
).then((value) => {
    console.log(value);
    return "we";
}
).then((value) => {
    console.log(value);
    return "can";
}
).then((value) => {
    console.log(value);
    return "chain";
}
).then((value) => {
    console.log(value);
    return "promises";
}
).then((value) => {
    console.log(value);
    return "together";
}).then((value) => {
    console.log(value);
});

                                       //ASYNC AND AWAIT