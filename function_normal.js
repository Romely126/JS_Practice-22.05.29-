//함수작성

//매개변수가 없는 함수

function showError(){//매개변수는 없어도 ok, 2개 이상일시 ,로 구분
	alert('에러가 발생하였습니다!!');
}

showError();


//매개변수가 있는 함수
function sayHello(name){
	const msg = `Hello, ${name}`;
	console.log(msg);
}

sayHello('Mike');
sayHello('Tim');
sayHello('Bill');

//=
function sayHellos(name){
	let msg = 'Hello';	//지역변수msg선언, 함수 내부에서만 사용가능, 외부에서 참조 불가.
	if(name){
		msg += `, ${name}`;
	}
	console.log(msg);
}
//let msg = 'Hello'; 외부에서 전역변수로 선언, 함수 안과 밖 어디서든 접근 가능.
//console.log(msg); 지역변수msg, 불러오기 Err. 
sayHellos('Mike');
sayHellos('Tim');
sayHellos('Bill');



//전역 변수와 지역 변수
let msg = "welcome"; //전역변수msg

function sayHello_sec(name) {
	let msg = "Hello"	//지역변수msg
	console.log(msg + ' ' + name); 
}

sayHello_sec('Mike');//Hello Mike 출력(지역변수 사용)
console.log(msg); //welcome출력(전역변수 사용)


//ex2) 되도록이면 전역변수 선언은 줄이고, 지역변수 선언 활성화
let name = "Mike";

function sayHellu(name){ //함수 내부 한정의 지역 변수 선언 X
	console.log(name);
}

sayHellu(); //undefined(값 할당 X) 출력
sayHellu('Jane'); //Jane 출력, 함수 지역변수 선언하지 않아 전역변수에 저장.


//함수 default값 설정, 코드 간결화
function sayHello(name = 'friend'){ //default값 friend로 설정, name이 할당 x시 friend출력.
	let msg = `Hello, ${newName}`;
	console.log(msg);
}

sayHello(); //Hello, friend
sayHello('') //Hello, Jane

//return으로 값 반환
function add(num1, num2){
	return num1 + num2; //return문이 없을 경우 undefined를 반환
}

const result = add(2, 3); //5반환
console.log(result);

//return 값이 undefined로 반환되는걸 이용한 함수 종료 / C에서 코드 말단에 return 0; 하는 이유.
function showError() {
	alert('에러가 발생했습니다.');
	return;
	alert('return 뒤의 코드는 절대 실행되지 않습니다');
}
const result = showError(); //에러가 발생~ alert 실행
console.log(result); //undefined 실행, 코드 종료.

/*함수 네이밍 가이드
-한번에 한 작업에 집중할것
-한번에 읽고 이해하기 쉽게

showError 에러를 보여줌
getName 이름을 얻어옴
createUserData 유저데이터 생성
checkLogin 로그인 여부 체크 */

