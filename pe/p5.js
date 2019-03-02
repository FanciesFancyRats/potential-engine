function isDiv(n, d){
	if(d === 1)
		return true;
	else{
		if(n % d !== 0)	
			return false;
		else
			return isDiv(n, (d - 1));
	}
}
function solve(n){
	while(!(isDiv(n, 20))){
		n++;					
	}
	return n;
}
console.log(solve(1));
