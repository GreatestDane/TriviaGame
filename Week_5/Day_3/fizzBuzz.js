var fizz;
var buzz;
var fizzBuzz;

for (i = 1; i <= 100; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fizzBuzz = i;
        console.log(fizzBuzz + "fizzBuzz");
    }
    
    else if (i % 3 === 0) {
        fizz = i;
        console.log(fizz + "fizz");
    }
    else if (i % 5 === 0) {
        buzz = i;
        console.log(buzz + "buzz");
    }

     
};