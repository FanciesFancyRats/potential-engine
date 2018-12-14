function isDiv(n, m){
	return((n % m) == 0);
}
function isDiv20h(n, m){
	if(m = 1){
		return(true);	
	}
	else if(isDiv(n, m)){

		return(isDiv20h(n, (m - 1)));	
	}
	else{
		return(false);	
	}
}
function isDiv20(n){
	return(isDiv20h(n, 20));
}
console.log(isDiv20(44309));

