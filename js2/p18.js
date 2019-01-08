a = [];
a[0] = [3];
a[1] = [7, 4];
a[2] = [2, 4, 6];
a[3] = [8, 5, 9, 3];
ans = [];

for(i = 0; i < a.length; i++){
	test = 0;
	target = 0;
	for(j = 0; j < a[i].length; j++){
		if(a[i][j] > test){
			test = a[i][j];
			target = j;
		}	

	}
	ans.push([i, target]);
}
genPath(level, position, maze){
	path = [];
	cPos = position;
	cLev = level;
	if(level < 3){
		while (cPos < 3){
			if(maze[[cLev + 1], [cPos]] > (maze[[cLev + 1], [cPos + 1]]
		}		
	} 
}
console.log(ans);
