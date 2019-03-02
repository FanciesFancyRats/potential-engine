function isPal(n){
	a = String(n).split("");
//	console.log(a);
	if(a.length <= 1) return true;
	else{
		if(a[0] !== a[a.length - 1]) return false;
		else return isPal(a.slice(1, (a.length - 1)).join(""));
	}
}
function solve(){
	var answer = 0;
	for(i = 999; i > 99; i--){
		for(j = 999; j > 99; j--){
			if(isPal(j*i) && (j*i)>answer) answer = i * j;
		}	
	}
	return answer;
}
//isPal(999);
console.log(solve());
