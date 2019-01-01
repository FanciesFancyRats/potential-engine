function isPrime(n){
	for(i = (n - 1); i > 1; i--){
		if(n % i == 0){
			return(false);	
		}	
	}
	return(true);
}
numberOfPrimes = 0;
test = 2;
while(numberOfPrimes < 10001){
	if(isPrime(test)){
		numberOfPrimes++;
		test++;
	}
	else{
		test++;	
	}
}
console.log(test);
