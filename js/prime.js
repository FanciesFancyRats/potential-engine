var factors = [];
var factor = 2;
var number = 600851475143;

while(number > 1){
	if((number % factor) == (0)){
		factors.push(factor);
		number = number/factor;
		factor = 2;
	}
	else{
		factor += 1	
	}
}
console.log(factors);
