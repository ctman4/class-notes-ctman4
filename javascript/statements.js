//Statement syntax in JavaScript

//Constants - variables that you are never going to change

const pi = 3.14;

//printing
console.log(pi);

//for loop
for (let x = 0; x < 3; x ++){
  console.log(x);
}

//While loop
let x = 0; // this x is defined from here on out
while(x < 3) {
  console.log(x);
  x += 1;
}

// if Statement(conditional)
if(x===3){
  console.log('x is now 3');
}else{
  console.log('x is now ${x}');
}
