/** 
 **********************************************
loop statements:
while
for

//let counter = 0;
while(counter<10){
    console.log('Hello World');
    //counter = counter + 1;
    counter += 1;
    counter ++;
}
for(let i=0; i<10; i++){
    console.log('Hello World from for loop');
}
************************************************
let score = 75;
if(score >= 80){
    console.log('เกรด A');
} else if (score >= 70){
    console.log('เกรด B');
} else if (score >= 60){
    console.log('เกรด C');
} else if (score >= 50){
    console.log('เกรด D');
} else{
    console.log('เกรด F');
}
************************************************
let number1 = 5
let number2 = 8

let condition = number1 >= 3 || number2 >= 10
console.log("codition: ",condition);

let age = 30;
let gender = 'ชาย';

if(age >= 20 && gender == "ชาย"){
    console.log("ผู้ชายที่มีอายุ 20 ปีขึ้นไป");
}
************************************************
let number1 = 20
let number2 = 10

let result = number1 + number2;
console.log('ผลบวก = ',result)
************************************************
let number1 = 15
let number2 = 15

let result = number1 == number2;
console.log('result of condition is',result)
************************************************
let number1 = 20
let number2 = 20

if (number1 != number2){
    console.log('this if')
}else if (number1 == number2){
    console.log('this else if')
} else {
    console.log('this else')
}
************************************************

*/
