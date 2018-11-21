var sumSq = 0;
var sqSum = 0;

for (i = 1; i <= 100; i++){
	x = i*i;
	sumSq += x;
}
for (i = 1; i <= 100; i++){
	sqSum += i;
}
sqSum = sqSum*sqSum;
console.log(sqSum - sumSq);
