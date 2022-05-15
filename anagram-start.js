/**
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/
/**
 * 
 * @param {Array} word Inserisco un array di stringhe
 * @param {Array} wordI Inserisco un array di stringhe
 * @returns 
 */
function controllaAnagrammi(word, wordI) {
	//Variabile Boolean
	let ciao;
	for (let i = 0; i < word.length; i++) {
		//Mi ciclo il primo array
		for (let j = 0; j < wordI.length; j++) {
			//Mi ciclo il secondo array
			if (word[i] == wordI[j]) {
				//Se il valore restituito dagli array è di uguale valore entro nell'if
				//Istanzio una variabile array
				let corrispondenza = [];
				//Salvo nella variabile il valore uguale tra i due array
				corrispondenza.push(word[i]);
				//Solo se la lunghezza dell'array di valori uguali è pari alla
				//lunghezza di tutti i valori, so che tutti i valori dei due array
				//sono uguali ed entro nell'if
				if (corrispondenza.length == word.length) {
					return ciao = true;
				}
			}
			return ciao = false;
		}
	}
}