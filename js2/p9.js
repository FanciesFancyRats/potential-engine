//goal for this problem is to find 3 numbers a b and c such that a^2 + b^2 = c^2 and a + b + c = 1000
//Since the possibilities are so limited I'm just going to brute force through it all
//when we find something that matches the two conditions return it as an array

function paTri(){
	for(a = 1; a < 1000; a++){
	for(b = 1; b < 1000; b++){
	for(c = 1; c < 1000; c++){
		if(((a*a) + (b*b)) === (c*c)){
			if(a + b + c === 1000){
				ans = [];
				ans.push(a);
				ans.push(b);
				ans.push(c);
				return(ans);
			}
		}

	}
	}
	}
}
a = paTri();
console.log(a);
