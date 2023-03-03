// Current Day + Swith Method

const currentDay = new Date().getDay();
console.log(currentDay);

switch(currentDay){    
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}


// For Loop

for(let i = 0; i <= 150; i++){
    console.log(i);
}


// While Loop

let i = 0;
while(i <= 100){
    console.log(i);
    i++;
}


// Do While Loop

i = 0;
do{
    console.log(i);
    i++;
}while(i <= 50);


// Using Loops to calculate squares of the numbers between 1 to 20, and push them into the array

// Using For Loop
let empty = [];
for(i = 1; i <= 20; i++){
    empty.push(i * i);
}
console.log(empty);


// Using While Loop
let square = [];
let startNum = 1;
while(startNum <= 20){
    square.push(startNum * startNum);
    startNum += 1;
}
console.log(square);

