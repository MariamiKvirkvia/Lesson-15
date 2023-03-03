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


// Checking currencies

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "7.1320",
		diffFormated: "0.0209",
		rate: 7.132,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0209,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
    {
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.7264",
		diffFormated: "0.0014",
		rate: 6.7264,
		name: "სომხური დრამი",
		diff: -0.0014,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "AZN",
		quantity: 1,
		rateFormated: "1.5409",
		diffFormated: "0.0045",
		rate: 1.5409,
		name: "აზერბაიჯანული მანათი",
		diff: -0.0045,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1799",
		diffFormated: "0.0055",
		rate: 1.1799,
		name: "ჩეხური კრონა",
		diff: 0.0055,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7791",
		diffFormated: "0.0040",
		rate: 2.7791,
		name: "ევრო",
		diff: 0.004,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
	{
		code: "GBP",
		quantity: 1,
		rateFormated: "3.1674",
		diffFormated: "0.0203",
		rate: 3.1674,
		name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
		diff: 0.0203,
		date: "2023-02-28T17:45:12.156Z",
		validFromDate: "2023-03-01T00:00:00.000Z",
	},
];

// Using For Loop
const currenciesLength = currencies.length;
for(let i = 0; i < currenciesLength; i++){
    if(currencies[i].diff < 0){
        console.log(currencies[i].name);
    }
}

// Using While Loop
let a = 0;
while(a < currencies.length){
    if(currencies[a].diff < 0){
        console.log(currencies[a].name);
    }
    a++;
}