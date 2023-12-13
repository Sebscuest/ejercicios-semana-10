`use strict`
// Ejercicio 7 Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.

let url = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";
let inicio = url.indexOf('d/') + 2;
let fin = url.indexOf('/', inicio);
let salida = url.substring(inicio, fin);
alert(salida);