const userName = prompt("Ciao! Come ti chiami?");


console.log(userName);

let popup = ("Bravissimo! Andiamo avanti");
console.log(popup);


const lastName = prompt("Dimmi ora il tuo cognome");
console.log(lastName);


popup = (" Manca poco! Solo un'ultima domanda");
console.log(popup);

let favColor = prompt("Qual'è il tuo colore preferito? e perché proprio il Blu");
console.log(favColor);

// creo la variabile che racchiuder le 3 risposte precedenti

const password = userName + lastName + favColor + "22";
console.log(password);

document.getElementById("passwordtext").innerHTML = password;

popup = ("Ben fatto! Ora il tuo Account è correttamente registrato, puoi procedere col tuo ordine");
console.log(popup);