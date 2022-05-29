//for
for(let i = 0; i < 11 i++){		//0 ~ 10까지 실행
	console.log(i);
} 


//while
let i = 0;

while(i<10){
	console.log(i);
	i++;
}

//do..while
let i = 0;

do{ //최초 빌드시 1회 실행
	console.log(i); //i == 0
	++i;
	console.log(i); //i == 1
}while(i < 10)




//break
while(true){
	let answer = confirm('계속 할까요?');
	if(!answer){ //confirm 반환값이 false(취소)이어야 실행.
		break; //break 만날시 탈출
	}
}


//continue
for(let i = 0; i < 10; i++){
	if(i%2){   //반환된 값이 짝수일 경우만 for문을 탈출 가능.
		continue;
	}
	console.log(i);
}//출력 0 2 4 6 8 / continue에 도달할시 하위 코드로 진행.




//switch
//사고싶은 과일 입력시 가격 알려주기
let fruit = prompt('무슨 과일을 살건가?');

switch(fruit){
	case '사과' :
		console.log('100원입니다.');
		break;
	case '바나나' :
		console.log('200원입니다.');
		break;
	case '멜론' :
		console.log('500원입니다.');
		break;
	case '복숭아' : //case문 2개를 같이 이용하면 case가 A1이든 B1이든 하단의 코드를 실행.
	case '딸기' :   //마치 ||(OR)과 같이 사용가능.
		console.log('1000원입니다.');
		break;
	default :
		console.log('그런 과일은 팔지 않습니다.');
}//break 미사용시 case 하단의 모든 case가 실행되게 됨, if문의 else 역할은 default로 대체.


