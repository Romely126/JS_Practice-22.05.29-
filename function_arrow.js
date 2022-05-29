//화살표함수

//기존 함수의 화살표 함수로의 변환
let add = function(num1, num2){
	return num1 + num2;
}
//->
let add = (num1, num2) => {
	num1 + num2; //return만 한다면 return 생략 가능.
}

let add = (num1, num2) => num1 + num2; //return문이 한줄이라면, {}도 생략 가능.

let add = num1 => num1 =+ num1; //변수도 한가지라면 ()생략 가능.

let add = /*function*/(num1, num2){ //return 앞에 여러 코드가 오면 function 생략해야 함.
	const result = num1 + num2;
	return result;
}


//ex1) 함수 표현식
showError(); //표현식이기때문에 어디서든 실행 불가, 에러 발생

let showError = function(){
	console.log('error');
}

//ex1-1) 함수 선언문
showError();

function showError() {
	console.log("error");
}

//ex1-2) 화살표 함수로 변환
let showError = () => {
	console.log("error");
}

//ex1-3) 화살표 함수로 변환 2
const sayHello = function (name) {
	const msg = `Hello, ${name}`;
	console.log(msg);
}
//->
const sayHello = (name) => {
	const msg = `Hello, ${name}`;
	console.log(msg);
}

//ex1-4) return문이 있는 함수의 변환
const add = function (num1, num2) {
	const result = num1 + num2;
	return result;
}
//->
const add = (num1, num2) => {
	const result = num1 + num2;
	return result;
}
//return 문을 한줄로 줄여 최적화
const add = (num1, num2) => return num1 + num2;