// Type Safety Demo

// Say we have a function that adds 3 numbers.
// The function will be like so :

// function addXYZ(x,y,z){
//   console.log(x+y+z);
// }

// But we want to be sure that x,y and z are integer numbers, not float
// or strings. We can do that in TypeScript like so :

function addXYZ(x: number,y: number ,z: number){
  console.log(x+y+z);
}

addXYZ(1,2,3); //Works
//addXYZ("1",2,3) Gives an error

// Default param value

function ech(message:string = "Default Value"){
  console.log(message);
}

// check typeScript1.js and see the above function!


// Demo classes.

class Greeter{
  method1(msg: string = "Default"){
    return msg;
  }
}

var greeter = new Greeter();
greeter.method1('hello');
// greeter.method1(1); - Error dega
