function sum(x, y){return x+y}
function square(x) {return x*x}

function generateNext(a){
	if(a[2] + 1 > 999){
		a[2] = 1;
		a[1]++;
	}
	else a[2]++;
	if(a[1] > 999){
		a[1] = 100;
		a[0]++;
	}
	if(a[0] > 999){
		return [];	
	}
	return a;
}
function isPath(a){
	if(a.slice(0, 2).map(square).reduce(sum) === a[2]*a[2])
		return true;
	else
		return false;
}
function solve(){
	for(var a = 1; a < 1000; a++){
	for(var b = 1; b < 1000; b++){
	for(var c = 1; c < 1000; c++){
		//console.log(a,b,c);
		if(a + b + c === 1000){
			if(square(a) + square(b) === square(c)){
				return([a, b, c]);
			}	
		}
	}
	}
	}		
}
function solve2(a){
	while(true){
	a = generateNext(a);
	if(a.reduce(sum) === 1000){
		if(square(a[0]) + (square(a[1])) === (square(a[2]))){
			return(a);	
		}
	}
	}
}
