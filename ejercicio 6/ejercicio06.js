'use strict'
//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.

let urlFACEBOOK =  "facebook.com/cristianoRonaldo";

let post = urlFACEBOOK.indexOf ('/');
let namefacebo = urlFACEBOOK.substring (post+1);

alert(namefacebo);