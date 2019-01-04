a = [];
for(i = 0; i < 20; i++){
	a.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
}
b = [];
for (i = 0; i < 3; i++){
	b.push([0, 0, 0]);
}
console.log(b);

function solve(x, y){
	if(x === 1 && y === 1){
		return(1);	
	}	
	else{
		if(x > 1 && y > 1){
			return((solve((x - 1), y)) + (solve(x, (y - 1))));
		}	
		else if(x > 1){
			return((solve((x - 1), y)));
		}
		else{
			return(solve(x, (y - 1)));	
		}
	}
}
console.log(solve(20, 20));
