var prime = [2,	3,	5,	7,	11,	13,	17,	19,	23,	29,	31,	37,	41,	43,	47,	53,	59,	61,	67,	71,  73,	79,	83,	89,	97,	101,	103,	107,	109,	113,	127,	131,	137,	139,	149,	151,	157,	163,	167,	173,179,	181,	191,	193,	197,	199,	211];
var factors = [2];
var target = 600851475143;
var loc = [0];
var solved = true;
while(solved){
	sum = 1;
	for(i = 0; i < factors.length; i++){
		sum *= factors[i];	
	}
	if (sum == target){
		console.log('Found it');
		console.log(factors);
		solved = false;
		break;
	}
	for(i = 0; i < loc.length; i++){
		if(((i) == loc.length - 1)&&(loc[i] == prime.length - 1)){
			//console.log('pushing');
			loc.push(0);
			factors.push(2);
		}
		if(loc[i] == prime.length - 1){
			loc[i] = 0;	
		}
		else{
			loc[i] += 1;	
			break;
		}
	}
	for(i = 0; i < factors.length; i++){
		factors[i] = prime[loc[i]];	
	}

	console.log(factors, sum);

}
	
