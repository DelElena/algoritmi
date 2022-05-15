/**
	* Scrivere una funzione che mostri in console una serie di numeri da 1 a 100.
	* Per ogni multiplo di 3 dovrà mostrare "Fizz", mentre per ogni multiplo di 5
	* dovrà mostrare "Buzz". Nel caso il numero sia multiplo di entrambi dovrà
	* mostrare "FizzBuzz".
	*/
//Entro nel ciclo di numeri da stampare
function multipli() {
	for (let a = 1; a <= 100; a++) {
		//Entro nel ciclo della variabile n
		for (let n = 1; n <= a; n++) {
			if (a == 3 || a == (n * 3)) {
				console.log("Fizz");
			}
			else if (a == 5 || a == (n * 5)) {
				console.log("Buzz");
			}
			else if (a == (n * 3) && a == (n * 5)) {
				console.log("FizzBuzz");
			}
			else {
				console.log(a);
			}

		}
	}

}
