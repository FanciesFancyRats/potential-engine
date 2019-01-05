//a = [];
//for(i = 0; i < 20; i++){
//	a.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
//}
//b// = [];
//for (i = 0; i < 3; i++){
//	b.push([0, 0, 0]);
//}
//c//onsole.log(b);

function solve (x, y){
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
};

const memoizedAdd = () => {
	let cache ={};
	return (n) => {
		if (n in cache){
			console.log('Fetching from cache');	
			return cache[n];
		}	
		else{
			console.log('Calculating result'); let result = n + 10;
			cache[n] = result;
			return result;
		}
	}
}
const memoize = (fn) => {
	let cache = {};
	return (...args) => {
		console.log("args: ", args)
		let n = [args[0], args[1]];
		console.log("n: ", n);
		if (n in cache) {
			console.log('Fetching from cache');
			console.log(cache[n]);
			return cache[n];
		}
		else{
			console.log('Calculating result', n);
			let result = fn(n);
			console.log(result);
			cache[n] = result;
			return result;
		}
	}
}
const factorial = memoize(
	(x, y) => {
		if (x === 0){
			return 1 + y;	
		}
		else{
			return factorial((x - 1), x*x); 
		}
	}
);
console.log(factorial(5, 1));
console.log(factorial(5, 1));

console.log(factorial(6, 1));
//const newAdd = memoizedAdd();
//console.log(newAdd(9));
//console.log(newAdd(9));
//console.log(solve(21, 21));
