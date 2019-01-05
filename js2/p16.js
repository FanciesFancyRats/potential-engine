ans = 2;

for( i = 1; i < 1000; i++){
	ans *= 2;
}
i = 10;
sum = 0;
while( ans % i !== ans){
	test = ans % i;
	test = String(test);
	test = test.split("");

	console.log(test[0]);
	a = Number(test[0]);
	sum += a;
	i *= 10;
	
}
console.log(sum);
