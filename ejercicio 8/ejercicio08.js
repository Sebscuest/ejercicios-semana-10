`use strict`
//Ejercicio 8 Desarrollar un programa que genere la asignación de letras para las filas de computadoras en un laboratorio. Se debe tener en cuenta que la codificación sigue el formato LAB2#A, donde indica la fila A del laboratorio 2

let asignacion = "LAB2#B";
let codigo = 0;
let separador = asignacion.indexOf("#");
let fila = asignacion.charCodeAt(separador + 1);
codigo = fila + 1;
alert(String.fromCodePoint(codigo));