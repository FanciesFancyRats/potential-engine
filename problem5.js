answer = 0;
x = 1;
while(answer === 0){
	for(i = 0; i < 20; i++){
		if((x%(i+1)) !== 0){
			break;	
		}	
	}
	if((i) === 20){
		answer = x;	
	}
	x += 1;
}
console.log(answer);
