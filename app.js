//alert('working');


/*
var numberVariable = 0;
var stringVariable ='1';
var myName ='Yura';

var sentance ='Hello, yura kogut';


//console.log(sentance.indexOf('kogut'));

var result = numberVariable+ ' ' + myName.toLowerCase();

var resultTwo = Number(stringVariable) + Number(numberVariable);

//console.log(resultTwo);

//console.log(result);



function multiplyNumbers(a,b){

	var result =Number(a)*Number(b);

	console.log(result);
}
//multiplyNumbers(13,16);



var fruits = ['яблуко','груша','виноград'];
var numberList = [0,1,2,3,4,5];
var booleanVar = true; //false

var fruitTofind = 'груша';

if (fruits.indexOf(fruitTofind) > -1){
	//console.log(fruitTofind + ' знайдена');
	}else{
		//console.log('error');
	}


//console.log(fruits.indexOf('груша'));

var testBoolean = fruits.indexOf(fruitTofind) == -1;
console.log(testBoolean);
*/


//1)щоб рахувало
function adding(){
	//зчитати поточне значення і перетворити в число(number)
	var number = Number(document.getElementById('test').innerHTML);
//add 1
	number++;
//поміщення в html число для h1
	document.getElementById('test').innerHTML = number;
	
}

var button = document.getElementById("action");
button.addEventListener("click",adding,false);









//2)create fun and inputs name
function createInitials() {
	//отримуємо імя з інпуту
	var first_name = document.querySelector("#first-name").value;
	var last_name = document.querySelector("#last-name").value;
	var middle_name = document.querySelector("#middle-name").value;

var nameWithInitials = last_name + ' ' + first_name[0]+ '. ' + middle_name[0]+'. ';
//для h1 вивід результат
document.getElementById('result').innerHTML = nameWithInitials;

console.log(nameWithInitials);
}
//btn

var button = document.getElementById("process");
//create click
button.addEventListener("click", createInitials, false);


//0 додаванння
function calculator() {
	var a = Number(document.getElementById("number-a").value);
	var b = Number(document.getElementById("number-b").value);
	var res = a + b;
	document.getElementById('result').innerHTML = res;
}

var button = document.getElementById("calc");
//create click
button.addEventListener("click", calculator, false);

