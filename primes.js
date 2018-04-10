var factors = [];
var factor = 2;
var number = 600851475143;
var primes = 0;
var x = 2;

while(primes <  6){
	for(i = x; i > 1; i--){
		if(x%i === 0){
			primes += 1;
			break;	
		}	
	} 
	x+=1;
}
console.log(x);
