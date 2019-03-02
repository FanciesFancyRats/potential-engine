function isPrime(n){
	var i = 2;
	while(n % i !== 0 && i < n){
		i++;	
	}
	return(n === i);
}
function solve(){
	for(var i = 0, j = 2;i < 10000; j++){
		if(isPrime(j))
			i++;
	}
	return(j);
}
