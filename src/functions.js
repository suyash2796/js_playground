//simple function declaration
function display(){
    console.log('Display this!');
};

display();

//function expression

let b = function express(a){
    return a*a;
};


let a=10;
console.log(b(a));
//console.log(express(a)) -> Not valid!


//anonymous function

let anonymous = function(){
    console.log('I am anonymous! I have No Name!');
};
anonymous();


//functions as first class citizens
//can be assigned to a variable
//can be returned
//can be passed as a function param

function outer(){
    function inner(){
        console.log('I will be sent back home!!');
    }
    return inner;
};

console.log(outer());
console.log(outer()());

//callback functions
//functions which can be passed as an argument and dont block the main thread of execution
//calback funcs areexecuted later

function callbck(){
    console.log('I was called after 5 seconds. I was waiting in callback queue!  :C');
    console.log('Look! how good I am. I didnt blocked the main thread! :)')
};

setTimeout(callbck, 5000);

console.log('I am the part of thread, I will be called before callback timeout!')

//higher order functions
//I can take any function as a param
//I can return a function

function circle_area(radius){
    return 3.14*radius*radius;
};
function circle_circumference(radius){
    return 3.14*2*radius;
};

function calculate(radius, calc_logic){
    return calc_logic(radius);
};

console.log(calculate(4, circle_area));
console.log(calculate(4, circle_circumference));


//arrow functions
//will do it later :D