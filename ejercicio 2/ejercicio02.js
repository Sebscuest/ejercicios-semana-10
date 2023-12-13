'use strict'
//Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.

let piso = "01.24";

let post = piso.indexOf ('.');
let numeroPiso = piso.substring (0,post);

alert(numeroPiso);
