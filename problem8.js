//Start at 997 + 2 + 1
//-1 from c, if a < b add 1 to a, else add 1 to b
//test if c^2 = b^2 + a^2
//if true then break and print a*b*c?
//
//start at 997 + 2 + 1
//	if c^2 != b^2 + a^2
//	c - 1, b + 1
//
for (c = 1; c < 1000; c++){
	for (b = 1; b < 1000; b++){
		for (a = 1; a < 1000; a++){
			if(((a*a) + (b*b)) === (c*c)){
				//console.log(a, b, c, (a+b+c));	
				if (a+b+c === 1000){
					answerA = a;
					answerB = b;
					answerC = c;
				}
			}
		}
	}
}
console.log(answerA, answerB, answerC);
console.log(answerA * answerB * answerC);
