'use strict'
//Escribir un programa que obtenga el mes de la siguiente fecha: “2022-10-31”

let fecha = "2022-10";

let post = fecha.indexOf ('-');
let age = fecha.substring (post+1);

alert(age);
