
//Arrow function


// var x=(x=3, y=4)=>{ document.write(x*y)
// }
// x()


// var sum=(a, b) => a + b;
// alert(sum(3, 5));

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
()=> alert('hello'):
()=> alert('Nice to meet you');

welcome();