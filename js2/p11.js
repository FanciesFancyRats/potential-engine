function genTriNum(n){
	ans = 0;
	for(i = n; i > 0; i--){
		ans += i;		
	}
	return(ans);
}

function countDiv(n){
	count = 0;
	for(i = n; i > 0; i--){
		if(n % i === 0){
			count++;	
		}
	}
	return(count);
}
function problem(n){
	console.log(n);
	if(countDiv(genTriNum(n)) > 5){
		return(genTriNum(n));
	}
	else{
		n++;
		problem(n);
	}
}
problem(1);
