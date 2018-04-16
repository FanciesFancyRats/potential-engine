var primes = [];
var j = 2;
var k = 2;
var sum = 0;

for(i = 0; i <= 2000000; i++){
	primes.push(true);	
}
while(j < Math.sqrt(2000000)){
	if(primes[j]){
		for(k = (j*j); k <= 2000000; k+=j){
			primes[k] = false;	
		}
	}
	j++;
}
for(l = 2; l < primes.length; l++){
	if(primes[l]){
		//console.log(l);	
		sum += l;
	}
}
console.log(sum);
