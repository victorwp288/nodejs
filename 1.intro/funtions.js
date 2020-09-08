function myFirstFunction(){
    return "Hello World";
}

console.log(myFirstFunction());

const myVariableFunction = function (){
    return "this is my function"
}


//callback
const myArrowFunction = () => {
    console.log("Hello form my arrow function");
}

function sayHiLater(anyFunctionReference) {
    anyFunctionReference();
}

sayHiLater(myArrowFunction);




//Callback
const poke = (name) => "poke " + name;
const hug = (name) => "hug " + name;


function interact(anythingToCallback, name) {
    console.log(anythingToCallback(name))
}

interact(poke,"peter");
interact(hug, "peter");