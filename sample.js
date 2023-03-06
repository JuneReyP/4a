


document.getElementById('display').innerHTML = "Sample JS script";
document.getElementById('display').style.backgroundColor = 'orange';
document.getElementById('display').style.color = 'white';

//sdshdfskfjsfjkbjsv

/*
Using variables:

var
let
const



*/

var num = 10;
let num3 = 11;
const sample = 12;
var name = "Juan";
var name2 = "Dela Cruz";
var sampleBol = true;

// console.log(name + " " + name2 + " J'r" + " 24");

// string
//numbers
//boolean

//JS operators
/*
=
+
*
/
%
++
--
*/

/* Comparison Operator
== 	equal to
=== 	equal value and equal type
!= 	not equal
!== 	not equal value or not equal type
> 	greater than
< 	less than
>= 	greater than or equal to
<= 	less than or equal to
? 	ternary operator
*/

// console.log(3 == 2); //false
// console.log(3 !== "3"); //true
// console.log(3 == 3); //true
// console.log(3 == "3"); //true
// console.log(3 === "3"); //false
// console.log(3 > 2); //true
// console.log(2 > 2); //true
// console.log(1 >= 2); //false

// // condition ? exprIfTrue : exprIfFalse

// (3 === 3) ? console.log("Same number") : console.log("not equal");

/**
 * 
 * JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object 
 * 
FUnctions:

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

 */

function bgChangeColor() {
    document.getElementById('display').style.backgroundColor = 'red';
}

function addTwoNum(num1, num2, txt) {
    let sum = num1 + num2;
    document.getElementById('sum').innerHTML = txt + sum;
}


var a = 50;
var b = 65;
var name3 = "The sum is: ";

addTwoNum(a, b, name3);

const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

document.getElementById('obj').innerHTML = person.firstName + " " + person.lastName + " " + person.age;

//array declaration


let fruits2 = new Array('avocado', 'banana', 'apple', 'mango');

// document.getElementById('ary').innerHTML = fruits.length;
// document.getElementById('ary').innerHTML = fruits[0] + ", " + fruits[1] + ", " + fruits[2] + ", " + fruits[3];

/*
if(condition = true or false){
  //code block
}

if(condition = true or false){
  //1st code block if true
}else{
  //2nd code block if the condition is false
}

|| = OR
&& = AND

||
T T = T
F T = T
T F = T
F F = F

&&
T T =T
F T = F
T F = F
F F = F


*/

function myFunction() {
    // alert('Hello');
    var txt;
    // console.log(confirm("Press a button"));
    // if(confirm("Press a button")){
    //     txt = "You pressed OK!";
    // }else{
    //     txt = "You pressed Cancel!";
    // }
    /* var greeting;
    // var hour = 18;
    // if (((hour <= 18) && (hour > 18)) || ((hour > 23) && (hour < 21))) {  //T T
    //     greeting = "Good day";
 } 
 
 switch(expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
        // code block
} 
 
 
 
 */
    var time = 13;
    //  if (time < 12) {
    //     greeting = "Good morning";
    //   } else if (time < 20) {
    //     greeting = "Good day";
    //   } else if(time < 24){
    //     greeting = "Good evening";
    //   }else{
    //     greeting = "Good";
    //   }
    let day;
    switch ('+') {
        case '+':
            sum = a + b;
        case '*':
            product = a * b;
        case '/':
            console.log("Tuesday");
        case 3:
            console.log("Wednesday");
        case 'd':
            console.log("Thursday");
        case 'e':
            console.log("Friday");
        case 'f':
            console.log("Saturday");
            break;
        default:
            console.log("Not on the list");
    }
    //console.log(day);
    // document.getElementById('demo').innerHTML = day;
}

//FOR LOOP
/*
for(initial; condition; increment/decrement){
    //code execution
}
*/ 
var fruits = ['avocado', 'banana', 'apple', 'mango', 'kiat2'];
// let text= "";
// console.log(fruits.length)
// for(let i = 0; i < fruits.length; i++){
//     text = text + fruits[i] + '<br>';
// }
//document.getElementById('demo').innerHTML = text;

var fruits = [
    ['lemon', 'banana', 'apple', 'mango'],//0
    ['avocado', 'kiwi', 'chiko', 'coconut'],//1
    ['orange', 'kamatis', 'papaya', 'kiat2'],//2
    ['avocado', 'kiwi', 'chiko', 'coconut']//3
];
// console.log(fruits[2][3][2])
let text = "";
for (let row = 0; row < fruits.length; row++) {
    text = text + '<ul>';
    for (let col = 0; col < fruits[row].length; col++) {
        text = text + '<li>' + fruits[row][col] + '</li>';
    }
    text = text + '</ul>';
}
document.getElementById('demo').innerHTML = text;
/*
fruits[0][0] lemon
fruits[0][1] banana
fruits[0][2] apple
fruits[0][3] mango

fruits[1][0] avocado
fruits[1][1] kiwi
fruits[1][2] chiko
fruits[1][3] coconut

fruits[2][0]
fruits[2][1]
fruits[2][2]
fruits[2][3]




text = avocado<br>banana<br>apple<br>mango<br>

*/

//while loop
// while(condtion){
    //code execution if the condition is true
// }

let a = 0;
while(a < fruits.length){
    console.log(fruits[a]);
}


// var fruits = ['avocado', 'banana', 'apple', 'mango', 'kiat2'];

// let a = 0;
// //while loop
// // while(a < fruits.length){
// //     console.log(fruits[a]);
// //     a++;
// //}

// //for IN
// for(let fruit in fruits){
//   console.log(fruits[fruit]);
// }
