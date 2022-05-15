/**
	* Data una stringa, restituisci il carattere che viene ripetuto più volte.
	* Esempio
	* maxChar("abccccccd") => "c"
	* maxChar("apple 12311111") => "1"
	*/
function caratterePiuRipetuto(stringa) {
	let arrayRip;
	let a = [];

	for (let i = 0; i < stringa.length; i++) {
		for (let j = 1; j <= i; j++) {
			for (let k = stringa.length - 1; k <= i; k--) {
				if (stringa[i] == stringa[j] || stringa[i] == stringa[k]) {
					arrayRip.push(stringa.charAt(i));
				}
				else if (stringa[k] == stringa[j]) {
					arrayRip.push(stringa.charAt(j));
				}
			}
		}
	}
	for (let l = 0; l < arrayRip.length; l++) {
		for (let m = 1; m <= l; m++) {
			if (arrayRip[l] == arrayRip[m]) {
				let a = arrayRip.count().charAt(l);
			}
		}
	}
	return a;
}