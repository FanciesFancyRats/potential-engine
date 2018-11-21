var x = 0;
var y = 0;
var z = 0;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

Array.prototype.move = function (from, to) {
	  this.splice(to, 0, this.splice(from, 1)[0]);

};

function reorder(data, index) {
	  return data.slice(index).concat(data.slice(0, index))
};

var numbers = [-4, -8, -15, -6, 8, -7, 12, -10, -7, -80, -2, -11];
var unsolved = true
var add = false;
var sub = false;
var mul = false;
var div = false;
var n = 0;
loopMain:
while(unsolved){

loop1: 
	for(var i = 0; i < numbers.length; i++){
	loop2: 
		for(var j = 0; j < numbers.length; j++){
		loop3:
			for(var k = 0; k < numbers.length; k++){
			if((numbers[i] / numbers[j]) === numbers[k]){
				console.log(numbers[i] + '/' + numbers[j] + '=' + numbers[k]);
				x = numbers[i];
				y = numbers[j];
				z = numbers[k];
				div = true;
				numbers.splice(numbers.indexOf(x), 1);
				numbers.splice(numbers.indexOf(y), 1);
				numbers.splice(numbers.indexOf(z), 1);
				console.log(numbers);

				break loop1;
				unsolved = false;
			}
		}
	}
}


loop1: 
	for(var i = 0; i < numbers.length; i++){
	loop2: 
		for(var j = 0; j < numbers.length; j++){
		loop3:
			for(var k = 0; k < numbers.length; k++){
			if((numbers[i] * numbers[j]) === numbers[k]){
				console.log(numbers[i] + '*' + numbers[j] + '=' + numbers[k]);
				x = numbers[i];
				y = numbers[j];
				z = numbers[k];
				mul = true;
				numbers.splice(numbers.indexOf(x), 1);
				numbers.splice(numbers.indexOf(y), 1);
				numbers.splice(numbers.indexOf(z), 1);
				console.log(numbers);

				break loop1;
				unsolved = false;
			}
		}
	}
}



loop1: 
	for(var i = 0; i < numbers.length; i++){
	loop2: 
		for(var j = 0; j < numbers.length; j++){
		loop3:
			for(var k = 0; k < numbers.length; k++){
			if((numbers[i] - numbers[j]) === numbers[k]){
				console.log(numbers[i] + '-' + numbers[j] + '=' + numbers[k]);
				x = numbers[i];
				y = numbers[j];
				z = numbers[k];
				sub = true;
				numbers.splice(numbers.indexOf(x), 1);
				numbers.splice(numbers.indexOf(y), 1);
				numbers.splice(numbers.indexOf(z), 1);
				console.log(numbers);

				break loop1;
				unsolved = false;
			}
		}
	}
}
loop1: 
	for(var i = 0; i < numbers.length; i++){
	loop2: 
		for(var j = 0; j < numbers.length; j++){
		loop3:
			for(var k = 0; k < numbers.length; k++){
			if((numbers[i] + numbers[j]) === numbers[k]){
				console.log(numbers[i] + '+' + numbers[j] + '=' + numbers[k]);
				x = numbers[i];
				y = numbers[j];
				z = numbers[k];
				sub = true;
				numbers.splice(numbers.indexOf(x), 1);
				numbers.splice(numbers.indexOf(y), 1);
				numbers.splice(numbers.indexOf(z), 1);
				console.log(numbers);


				unsolved = false;
				break loopMain;
			}
		}
	}
}
if(add && sub && mul && div){
	console.log('Solved!');
	unsolved = false;
}
if(n > 100000){
	console.log('Giving up!');
	unsolved = false;
}

numbers = [-4, -8, -15, -6, 8, -7, 12, -10, -7, -80, -2, -11];
numbers = shuffle(numbers);
console.log(n);

console.log('That did not work, shuffling and trying again with: ' + numbers);
var add = false;
var sub = false;
var mul = false;
var div = false;
n++;
}
