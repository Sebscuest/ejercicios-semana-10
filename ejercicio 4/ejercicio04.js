'use strict'
//Escribir un programa que obtenga las iniciales de un jugador de futbol, 
//sabiendo que se usa iniciales y numero. Ejemplo CR-7, LM-10, LFS-10, AV-25

let jugador =  "CR-7";

let post = jugador.indexOf ('-');
let player = jugador.substring (0,post);

alert(player);