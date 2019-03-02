var o ={
	n: 1,
	sum: 0,
	get div(){
		while(this.n < 1000){
			if(this.n % 3 == 0 || this.n % 5 == 0){
				console.log(this.n);
				this.sum += this.n;

			}	
			this.n++;
		}
	}
}

o.div;
console.log(o.sum);

