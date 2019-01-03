function collatz(n, c){
	c = c + 1;	

	if(n === 1){
		return(c);	
	}
	else if(n % 2 === 0){
		return(collatz(n/2, c));	
	}
	else{
		return(collatz((3*n) + 1, c));	
	}
}
largest = 1;
ans = 1;
col = 1;
for(i = 1; i <= 1000000; i++){
	col = collatz(i, 1);
	if(col > largest){
		largest = col;	
		ans = i;
	}

	}
console.log(ans);
console.log(largest);
