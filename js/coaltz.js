var ans = 0;
var ansLen = 0;
var n = 0;
var seq = [];
var ansArr = [];


for(i = 1; i < 1000000; i++){
	seq = [];
	n = i;
	//console.log('n =',n);
	while(n > 1){
		//console.log(n, '%', 2, n%2);
		if(n%2 === 0){
			n = n/2;	
		}
		else{
			n = (3 * n) + 1;	
		}
		seq.push(n);
		//console.log(seq);
	}
	//console.log('seq.length =', seq.length, 'ansLen =', ansLen);
	if(seq.length > ansLen){
		ansLen = seq.length;
		//console.log(i, 'is the new answer');
		ans = i;
	}
}
console.log(ans, 'has a sequence of', ansLen);
ansArr[0] = ans;
while(ans !== 1){
	if(ans%2 === 0){
		ans = ans/2;
		ansArr.push(ans);	
	}
	else{
		ans = (ans * 3) + 1;	
		ansArr.push(ans);
	}
}
console.log(ansArr);
