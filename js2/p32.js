function makeArr(n){
	arr = []
	for (i = 0; i < n; i++){
		arr.push(i);	
	}
	return(arr);
}
function sievePrimes(arr){
	loc = 2;
	while(loc < arr.length){
		for(i = loc + loc; i < arr.length; i += loc){
			arr[i] = 0;	
		}	
		loc++;
		while(arr[loc] == 0 && loc < arr.length){
		loc++;	
		}
		
	}
	return(arr);
}
test = sievePrimes(makeArr(Math.sqrt(13195)));
console.log(test);
