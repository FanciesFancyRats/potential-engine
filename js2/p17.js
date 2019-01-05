function n2wOnes(n){
	nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	return(nums[n]);
}

function n2wTens(n){
	nums = ['', 'ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
	exceptions = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	if(n >= 11 && n <= 19){
		return(exceptions[n % 10]);	
	}
	else if(n < 10){
		return(n2wOnes(n));	
	}	
	
	temp = String(n);
	temp = temp.split("");
	temp = Number(temp[0]);
	return(nums[temp] + n2wOnes(n % 10));
}

function n2wHun(n){
	nums = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	if(n < 100){
		return(n2wTens(n));
	}
	else{
	
	}
}


for(i = 1; i < 100; i++){
	console.log(n2wTens(i));
}

