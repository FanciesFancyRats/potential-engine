var factors = 0;
var triNum = 1;
var triSum = 0;

while(factors < 500){
	factors = 0;
	triSum = 0;
	for (i = triNum; i > 0; i--){
		triSum += i;	
	}
	//console.log(triSum);
	for (j = triSum; j > 0; j--){
		if(triSum%j === 0){
			factors++;	
		}
			
	}
	triNum++;
	if(factors > 100){
	console.log(factors);
	}
}
console.log(triSum, 'has ', factors, 'factors');
