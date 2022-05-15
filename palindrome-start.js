/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/

function palindroma(word) {
	let ciao;
	for (let i = 0; i < word.length; i++) {
		let drow = word.reverseArray();
		if (drow.length === word.length) {
			return ciao = true;
		}
		else {
			return ciao = false;
		}
	}
}
