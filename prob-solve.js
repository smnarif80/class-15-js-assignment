/*Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)
*/

let num1=30;
let num2=50;
if (num1>num2){
    console.log("The maximum number is:" + num1);
}

else{
    console.log("The maximum number is: " + num2);
}

/* (2)  Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition) */



let a;
a=-0;

if(a>0){
    console.log("The number is positive");
}
else if(a<0){
    console.log("The number is negative")
}
else{
    console.log("The number is zero")
}

/* (3)  Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)
*/

/*
*/
let number;

number=50;

if (number%10===0){
    console.log(number+""+" is divisible by 10")
}

else{
    console.log(number+""+"is not divisible by 10")
}

/*  (4) Solve the problem with Javascript  to check whether a number is even or odd.*/

let Number;
Number=10;
if(Number%2==0){

    console.log( Number +" "+"is a even number");
}

else{
    console.log(Number +" "+"is a odd number");
}

/* (5)  Solve the problem with Javascript  to check whether a character is in the alphabet or not.*/


let char = 'o';

if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
    console.log(char + ' is an alphabet.');
} 

else {
    console.log(char + ' is not an alphabet.');
}


/* (6) Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)*/

var temperature;

temperature=30;

if(temperature>=30){
    console.log("The temperature is hot");
}

else if(temperature<=25) {
    console.log("The temperature is cold");
}
 else {
    console.log("The temperature is normal");
}

/*  (7) Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)*/


var numb1 = 20;
var numb2 = 200;
var numb3 = 30;

if (numb1 >= numb2 && num1 >= numb3) {
   console.log(num1+" "+"is the maximum number");
} 

else if (numb2 >= numb1 && numb2 >= numb3) {
    console.log(numb2+" "+"is the maximum number");
}

 else {
    console.log(numb3+" "+"is the maximum number");
}


/* (8) Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”*/


var x = 10;


var result;
if (x%2==0){
   result="even number";
}

else {
    result="odd number";
}

console.log( x +" "+"is" + result);

// Display the result
console.log(result);


/* (9) Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.*/

let numOne=20;
let numTwo=50;

if(numOne>30 && numTwo>30){
    console.log("Both number are greater than 30");
}

else{
    console.log("One or both number are less than 30");
}


/* (10) Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)
*/

let age=13;
if(age>=13 && age<=19){
    console.log("Teenager");
}
else{
    console.log("Not a teenager");
}

/* (11) Create a program that uses the logical OR operator to check if either one of two strings str1 or str2 is equal to "JavaScript". Output a boolean result.*/

let str1;
let str2;
str1 = "HTML";
str2 = "JavaScript";

if(str1==="JavaScript" || str2==="JavaScript"){
    console.log("true");
}

else{
    console.log("false");
}


/* (12)  Given 3 subjects Math, English and Physics find the total marks and average of 3 subjects.
Find out if the average grade:
If Percentage >= 90% then print “Grade A”
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F
*/


let math = 31;
let english = 85;
let physics = 95;

let totalMarks = math + english + physics;
console.log("The total marks is:", totalMarks);

let average = (math+english+physics) / 3;
console.log("The average marks is:",Math.round(average));

let percentage = (totalMarks/300)*100;
console.log("Obtained marks:",Math.round(percentage)+"%");


if(math<33 && english<33 && physics<33){

    if(percentage>=90){
        console.log("Obtained grade A");
    }
    else if(percentage>=80) {
        console.log("Obtained grade B");
    }
    
    else if(percentage>=70) {
        console.log("Obtained grade C");
    }
    
    else if(percentage>=60) {
        console.log("Obtained grade D");
    }
    
    else if(percentage>=50) {
        console.log("Obtained grade E");
    }
    
    else if(percentage>=40) {
        console.log("Obtained grade F");
    }
    
    else {
        console.log("Fail");
    }
}

else {
    console.log("Fail");
}


/* (13) Find the random number between 1 to 10*/

let randomNumber = Math.floor(Math.random() * 10 + 1); 
console.log("Random number is:", randomNumber);


















 






