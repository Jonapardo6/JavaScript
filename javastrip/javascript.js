var saludo="hola mundo desde JavaScript"
console.log(saludo)
//Comentarios
/* 
aqui va
nuestros comentarios

Forma de escribir la sintaxis
var nombre 
var $nombre
var _nombre
var nombre1
var nombre_estudiante
Como no se puede escribir una variable
var 8nombre
Tampoco se puede utilizar
palabras reservadads de JavaScript
var if, while, case, for
¿Cómo creamos nuestros archivos JS?
JAVASCRIPT.js
var holaMundo
def HolaMundo{

}
*/

/*----------Variables en JavaScript---------
Existen dos tipos
1. var=>Es una variable global que puede 
ser utilizada en toda la vida del programa o todos los alcanze
2. let=>Es una varible que se utilza en un parte 
especifica de mi programa eso quiere decir que es una variable local

*/
var a
a=7
console.log("El valor de a es : ",a)
let b 
b=6
console.log("El valor de b es :",b)
console.log(window)
console.log(window.a)
console.log(window.b)
/*-------Valor tipo var-----*/
var musica="Baladas"
console.log("Variables antes del bloque",musica)

{
    var musica="Cumbia"
    console.log("Variable dento del bloque" , musica)
}
console.log("Variable fuera de bloque" , musica)
console.log("*********let**********")
let musica2="Salsa"
console.log("Variable antes de entrar al bloque", musica)
{
    let musica2="Merenge"
    console.log("Variable dentro del bloque", musica2)
}
console.log("Variable fuera del bloque" , musica2)
