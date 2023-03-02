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

// While

let i = 0;
while(i <= 100){
    console.log(i);
    i++;
}

// Do While

i = 0;
do{
    console.log(i);
    i++;
}while(i <= 50);

