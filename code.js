// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function hi(){
//     return"I hope this works";
// }

function sayHello(input){
    if (input == undefined){
        return "Hello, Jane!";
    }else if (typeof input == "boolean"){
      return "Hello, World!";
    }else{
        return("Hello, " + input + "!");
    }
}

function isFive(input){
    if (input == 5 || input == "5"){
        return true;
    }else{
        return false;
    }
}