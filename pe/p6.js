function makeArr(){
	var a = [];
	for(i = 1; i <= 100; i++){
		a.push(i);
	}
	return a;
}
function sum(x, y){
	return x + y;
}
function square(x){
	return x * x;
}
function sumOfSqr(a){
	return(a.map(square).reduce(sum));
}
function sqrOfSum(a){
	return(square(a.reduce(sum)));
}
function solve(){
	return (sqrOfSum(makeArr()) - sumOfSqr(makeArr()));
}
