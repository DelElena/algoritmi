/**
	* Scrivere una funzione che ricerchi la prima occorrenza di un determinato
	* numero in una serie di numeri ordinati e restituisca un valore booleano
	* true se presente, false altrimenti. Mostrare il risultato in console.
	*
	* La ricerca deve implementare l'algoritmo di ricerca binaria.
	* Esempio -> https://d1m75rqqgidzqn.cloudfront.net/wp-data/2021/06/01125313/image-2.png
	*/

function numeriOrdinati(Number) {
	let sonoBoolean;
	let NumberI = Number / 2;
	let array = [];
	for (let i = NumberI; i < array.length; i++) {
		let NumberII = (array.length - NumberI);
		for (let j = 0; j <= NumberII; j++) {
			if (j = Number) {
				console.log("Ci sono " + Number);
				return sonoBoolean = true;
			}
			else {
				return sonoBoolean = false;
			}
		}
	}
}