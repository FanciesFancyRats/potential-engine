o = {
	x: 1,
	y: 2,
	a: [],
	swap: 0,

	makeFib: function(){
		sum = 0;
		if(this.y < 4000000){
			//console.log(this.x);
			//console.log(this.x % 2);
			if(this.x % 2 == 0){
				this.a.push(this.x);
			//	console.log(this.a);
			}
			this.swap = this.y + this.x;
			this.x = this.y;
			this.y = this.swap;
			this.makeFib();
			}
		else{


			this.a.forEach(function(v) {sum += v; console.log(v);});
			console.log(sum);
		}
		},
	answer: function(){

	},
}

o.makeFib();
