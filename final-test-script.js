// Τα ερωτήματα 2 έως 7 θα απαντηθούν στο αρχείο αυτό

const checkButton = document.querySelector("#check");
const restartButton = document.querySelector("#restart");
const newGuess = document.querySelector("#new-guess");
const message = document.querySelector("#message");
const lowHigh = document.querySelector("#low-high");
const root = document.querySelector(":root");

// 2. να ορίσετε τους σχετικούς χειριστές συμβάντων

var previousGuesses=[];
var theGuess=1;
let count=1;

window.onload = newRandom() * 101 ;
newGuess.focus();

var input = document.getElementById("new-guess");
input.onkeydown=checkKey;

var div=document.createElement("div");
document.body.appendChild(div);
div.id="div";

function newRandom(){
/* 3. συνάρτηση που βρίσκει ένα τυχαίο αριθμό μεταξύ 1 και 100 
 και τον εκχωρεί στη μεταβλητή theGuess */
 theGuess= Math.floor(Math.random() * 100)+1;
 console.log("Random number="+theGuess);
 restartButton.parentNode.removeChild(restartButton);
 previousGuesses=[];
 lowHigh.textContent ='';
}

function checkKey(e){
/* 4. συνάρτηση που όταν ο χρήστης πατήσει <<enter>>
 να καλεί τη συνάρτηση που αποτελεί τον κεντρικό ελεγκτή του παιχνιδιού. */
	if (e.keyCode === 13) {
	console.log("Enter is Pressed", '///', 'xristis :', newGuess.value, '///', ' metritis :', count, '///', 'lista  :', previousGuesses);
	e.preventDefault();
	checkGuess();
	newGuess.value=''}
}

function checkGuess(){
/* 5. Να ορίσετε συνάρτηση checkGuess η οποία καλείται είτε όταν ο χρήστης πατήσει <<enter>>
στο πεδίο "new-guess" είτε όταν πατήσει το πλήκτρο "check", η οποία είναι ο κεντρικός ελεγκτής,
καλεί τη συνάρτηση processGuess (η οποία αποφαίνεται για την ορθότητα του αριθμού) και κάνει
τις κατάλληλες ενέργειες για να μην μπορεί να εισάγει ο χρήστης νέο αριθμό ή να ανασταλεί η
λειτουργία του <<enter>>, εμφάνιση του πλήκτρου 'restart' και την εξαφάνιση του πλήκτρου 'check'
σε περίπτωση ολοκλήρωσης του παιχνιδιού. */

if(!document.getElementById("new-guess").value) {
		alert('ΚΕΝΗ ΤΙΜΗ,ΒΑΛΕ ΕΝΑΝ ΑΡΙΘΜΟ.');
		newGuess.focus();
		newGuess.value = '';
		return false;
	}
	else if (newGuess.value > 100) {
		alert('ΒΑΛΕ ΜΙΚΡΟΤΕΡΟ ΑΠΟ 101');
		newGuess.focus();
		newGuess.value='';
		return false;}
	else if (input.value.charAt(0) == " ") {
		alert("Μη επιτρεπτή τιμή ,υπάρχει κενό.");
		newGuess.value = '';
        newGuess.focus();
		return false;}
    else if  (input.value && isNaN(input.value)) {
		alert("Δεν επιτρέπονται χαρακτήρες")
	    newGuess.value = '';
		newGuess.focus();
		return false;}
    else if (count > 0) {
		div.innerHTML = "Προηγούμενες προσπάθειες " + '(' + (count) + ")" + ":" +(previousGuesses)+' '+(input.value);
		newGuess.value;
	 }
	 processGuess(newGuess.value);
	}

function processGuess(newValue){
	if (newGuess.value == theGuess) {
		message.textContent = "Μπράβο,το βρήκες...";
		newGuess.value=''
		lowHigh.textContent = '';
		count++;
		document.body.appendChild(restartButton);
		document.getElementById("new-guess").disabled = true;
		checkButton.style.display = "none";
		document.getElementById("restart").focus();
		}
	else if (input.value < theGuess) {
		lowHigh.textContent = 'ΕΙΣΑΙ ΧΑΜΗΛΑ....';
		count++;
		previousGuesses+=' '+input.value;
		newGuess.focus();
		newGuess.value='';
		div.style.display = "initial";
		div.textContent += input.value + "";
		 }
	else if (newGuess.value > theGuess) {
		lowHigh.textContent = 'ΕΙΣΑΙ ΨΗΛΑ....'
		count++;
		previousGuesses += ' ' + input.value;
		newGuess.focus();
		newGuess.value = '';
		div.style.display="initial" ;
		div.textContent+=input.value+"";
		}
	if (count === 11) {
		lowHigh.textContent = 'ΕΧΑΣΕΣ,ΤΕΛΟΣ ΠΑΙΧΝΙΔΙΟΥ!!!';
		document.body.appendChild(restartButton);
		checkButton.style.display = "none";
		newGuess.value = '';
		newGuess.focus();
		document.getElementById("restart").focus();
		document.getElementById("new-guess").disabled = true;
	}
}


function restart(){
/* 7. Να ορίσετε συνάρτηση restart η οποία καλείται όταν ο χρήστης πατήσει το πλήκτρο
'restart' και επανεκινεί τη διαδικασία */
	alert('ΞΕΚΙΝΑΜΕ ΚΑΙΝΟΥΡΓΙΟ ΠΑΙΧΝΙΔΙ');
	newRandom();
	div.value="";
	document.getElementById("message").innerHTML = "";
	div.style.display = "none";
	document.getElementById("new-guess").disabled = false;
	newGuess.focus();
	checkButton.style.display = "initial";
	document.div='';
	count=1;
	div.innerHTML = "Προηγούμενες προσπάθειες : ";
}
restartButton.addEventListener('click',restart)
