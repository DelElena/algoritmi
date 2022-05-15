/**
	* Dato un numero intero restituire il numero inverso
	* Esempio
	* reverseInt(15) => 51
	* reverseInt(981) => 189
	* reverseInt(-90) => -9
	* reverseInt(-15) => -51
	*/
//Tratto number come se fosse un array di numeri e applico il 
//metodo reverse
/**
 * 
 * @param {Array} Number la funzone prende in ingresso un numero,
 * anche se si comporta come;
 */
function reverseInt(Number) {
	//Potevo risolverla senza ciclo, ma il ciclo mi serve 
	//per capire se c'è un segno o uno zero
	for (let i = 0; i < Number.length; i++) {
		if (Number[i] != "-") {
			a.push((Number.reverseArray()));
		}
		else if (Number[0] == 0 && Number[i - 1] != "-" && Number[i - 1] != 0) {
			a.push((Number.reverseArray()));
		}
		else {
			a.push((Number.reverseArray()));
		}
	}
}