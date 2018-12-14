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
function gpf(n, arr){
	i = arr.length - 1;
	pro = 1;
	solution = [];
	
	while(i > 2 && pro != n){
		if(arr[i] == 0){
			i--;	
		}
		else if(n % arr[i] == 0){
			pro = pro * arr[i];
			solution.push(arr[i]);
			i--;
		}
		else{
			i--;	
		}
	}
	return(solution);
}
number = 600851475143;
test = (Math.sqrt(number));
console.log(gpf(number , sievePrimes(makeArr(test))));
// need to be testing gpf with the actual number and not the square root of it...
