//inicia : 0
//condicion: i < message.length
//incremento: i++

let plate = 'ABC-123'
//Obtener por guion: let pos = plate.indexOf('-');
// obtener la parte letras: let letras = plate.substring (0,pos);
//obtener la parte numeros: let numeros = plate.substring (pos+1);  
let post = plate.indexOf('-');
let letras = plate.substring (0,post);
let numeros = plate.substring (post+1);

alert(letras);
alert (numeros);