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

	test = countDiv(genTriNum(n));
	console.log(n, ": ", test);
	if(test > 500){
		console.log("Answer: ", genTriNum(n));
		return(genTriNum(n));
	}
	else{
		n += 1;
		problem(n);
	}
}
console.log(problem(3000));

