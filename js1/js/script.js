
 
function pow() {
	var a = prompt('Введите число ');
	var n = prompt('Введите степень ');
	var result = 1;
	
	if (n > 0) {
		for (var i = 1; i <= n; i++) {
			result *= a;
		} 
		console.log(a, "в степени ", n, " = ", result);
	}  else if (a != 0 & n == 0) {
		result = 1;
		console.log('result = 1' );
		
	} else if (a == 0 & n < 0){
		console.log ("result is not defined");
	} else if (a != 0 & n<0){
		result = (1/ (result *= a));
		console.log(a, "в степени ", n, " = " , result);
	} 
}

pow();


  

  