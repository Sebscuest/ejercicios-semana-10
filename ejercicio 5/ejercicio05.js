'use strict'
//Escribir un programa para obtener el nombre de usuario de un correo electrónico.

let correo =  "kevinCues@gmail.com";

let post = correo.indexOf ('@');
let name01 = correo.substring (0,post);

alert(name01);