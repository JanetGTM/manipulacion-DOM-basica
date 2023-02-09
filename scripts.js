/* ---- MODIFICAR HTML DESDE JAVASCRIPT ---- */

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input
})
/*
------------- NOTAS innerHTML e innerText------------
innerHTML escribe HTML e innerText solo texto
Se puede utilizar el HTML para insertar etiquetas, pero si queremos proteger el HTML para evitar inyección de código que modifique el HTML se usará el innerText
--------------------------------------------
*/
// h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> FEo";


/*
------------- NOTAS agregar clases y atributos ------------
Existen varias formas de agregar, leer y modificar tanto clases como atributos.
para leer un atributo usamos: - getAttribute -
para agregar un atributo usamos:  -setAtribute -
para agreghar una clase es mejor usar:  - classList.add -
para eliminar una clase es mejor usar:  - classList.remove -
--------------------------------------------
*/
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'PlatziRojo')
console.log(h1. getAttribute('class'));

h1.classList.add('rojito');
h1.classList.remove('PlatziRojo')

/*
------------- NOTAS -----------
Agregar un valor al input desde javaascript
input.value = '567';
--------------------------------------------
*/

input.value = '567';


/*
------------- NOTAS -----------
Agregar un elemento a HTML desde javaascript
usando append o appendChild
--------------------------------------------
*/
const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);


pid.innerHTML = ""; //borramos el contenido de pid para que solo contenga la imagen
pid.appendChild(img);

// pid.innerHTML = img;
/*
-- Mala inserción del elemento img al HTML
imprimirá:
[object HTMLImageElement]
*/
