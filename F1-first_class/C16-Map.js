
// Map 

// var ary=[12,3,17,10];

// var b = ary.map(test);

// document.write(b);

// function test(x){
//     return x * 20;
// }


// var ary = [
//     { id: 12, name: "Ali" },
//     { id: 24, name: "Hassan" },
//     { id: 36, name: "Shahan" },
//     { id: 48, name: "Saeed" }
// ];

// var b = ary.map(test);

// document.write(b)

// function test(x) {   
//     return `${x.id} and name is : ${x.name}`;
// }



// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       alert(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();







// Promise


// var Promise = new Promise( function(resolve, reject){
//     var x= 'Apple';
//     var y= 'Apple';
// if(x === y){

//     resolve();

    
// } else{

//     reject();
// }

// }).then(function(){
//     document.write('MY promise is passed');
    
// }).catch(function(){
//     document.write('MY prmise is rejected');
// })



// var ourPromise = new Promise((resolve, reject)=>{
//     var x = 10;
//     var y = 10;

//     if(x == y){

//         resolve();
//     }

//     else{
//         reject();
//     }

// }).then(()=>{
//     document.write('My promise is Clear ');
// }).catch(()=>{
//     document.write('My promise is Failed');
// });


// var x=9;

// if(x>=90){
//     document.write("Your Grade is 'A+'")
// }

// else if(x >= 80){
//     document.write("Your Grade is 'A'")
// }

// else if(x >= 70){
//     document.write("Your Grade is 'B'")
// }

// else if(x >= 60){
//     document.write("Your Grade is 'C'")
// }

// else if(x >= 50){
//     document.write("Your Grade is 'D'")
// }

// else if(x >= 40){
//     document.write("Your Grade is 'E'")
// }

// else{
//     document.write("Your Grade is 'F'")
// };



var Fruits=["Banana", "Mangoes", "Apples", "Grapes", "Appricote"];

document.getElementById("helo").innerHTML = Fruits.length