 //우선순위
 //남자이고, 이름이 Mike이거나 성인이면 통과

 const gender = 'F';
 const name = 'Jane';
 const isAdult = true;


 if(gender === 'M' && (name === 'Mike' || isAdult)){
 	console.log('통과');
 } else {
 	console.log('돌아가');
 }