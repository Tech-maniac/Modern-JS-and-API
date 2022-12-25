//Modern JS :
//ECMA 2015/ES6

//Array destructuring :Split into Pieces

let details = ["John","Doe","23"];

// let firstName = details[0];
// let lastName = details[1];
// let age = details[2];

console.log(details);

let [firstName, lastName,age,degree="MCA"] = details;
console.log(details);
console.log(firstName);

//Object destructuring : Use curly brackets

const myDetails = {
    myFirstName : "John",
    myLastName : "Doe",
    myAge : 23
}
console.log(myDetails);

//let myFirstName = myDetails.myFirstName;
//console.log(myFirstName);

let {myFirstName,myLastName,myAge} = myDetails;
console.log(myFirstName);

//ECMA 2015
//Object properties :

//We can use dynamic properties
//How to get Dynamic data in an object?

let myName = "John";


const myDataOld = {
    myName : "How are you?",
    23 : "is my age"
}
console.log(myDataOld);
const myData = {
    [myName] : "How are you?",
    [20+3] : "is my age"
}

console.log(myData);

//If key & value are same, no need to write key and value

let studentName = "Jenny";
let studentAge = 23;
//key : value
const studentDataOld ={
    studentName : studentName,
    studentAge : studentAge
}

console.log(studentDataOld);

const studentData ={
    studentName,studentAge : studentAge
}

console.log(studentData);

//Spread Operator : ...
//DRY

let shoppingList = ["books","apples"];
// let newShoppingList = ["books","apples","clothes","chips"];

let updatedShoppingList = [...shoppingList,"clothes","chips"];
console.log(updatedShoppingList);

//ECMA 2016/ES7 features :
//Array includes :
//Returns boolean value : 

let newShoppingList = ["books","apples","clothes","chips"];

let isPresent = newShoppingList.includes("apples");
console.log(isPresent);

//**  operator :
console.log(2**3);

//ECMA 2017/ ES8 :

//let personInfo = {name:"John",age:24}

// console.log(Object.values(personInfo));
// console.log(Object.entries(personInfo));

//ECMA 2018 / ES9
//Using spread operator for objects 

let personInfo = {name:"John",age:24}
let newPersonInfo= {...personInfo};

console.log(newPersonInfo);

"use strict";
pi = 3.14;
console.log(pi);

//Advanced JS :

//Synchronous JS :
const function2 = () =>{
    console.log("Function 2 is called");
}

const function1=()=>{
    console.log("Function 1 is called ");
    function2();
    console.log("Function 1 is called again!");
}

function1();

//Asynchronous JS :

const fun2=()=>{
    setTimeout(()=>{
        console.log("Function 2 is called");
    },2000)
}

const fun1=()=>{
    console.log("Function 1 is called");
    fun2();
    console.log("Function 1 is called again!");
}

fun1();

//API : Application programming interface :
//Using XMLHttpRequest -> JS API to create AJAX requests.
// What's AJAX? AJAX stands for Asynchronous JavaScript And XML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers
//Object to JSON
//JSON.stringify turns a JS object into JSON text & stores JSON text into a string

let myObj = {key1 : "text",key2 : "true", key3 : 12};

let objtoString = JSON.stringify(myObj);
console.log(objtoString);
console.log(typeof(objtoString));

//JSON to object : (Without double quotes):

let stringToObj = JSON.parse(objtoString);

console.log(stringToObj);

console.log(typeof(stringToObj));

//Fetch API :
//Fetch method returns promises

//Promises :
//It will be fulfilled or rejected







