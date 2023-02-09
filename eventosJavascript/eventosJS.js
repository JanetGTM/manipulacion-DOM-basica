const formu = document.querySelector('#form');
const h1 = document.querySelector('h1');
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultado");

btn.addEventListener('click', btnOnClick);

function btnOnClick(){
  //console.log(parseInt(input1.value) + parseInt(input2.value));
 const res = parseInt(input1.value) + parseInt(input2.value);
 resultado.innerHTML = "Resultado: " + res;
}

/*
---------------------------------- NOTA ----------------------------------
 
Cuando tenemos 8un formulario, se toma el ´´ultimo botón como su submit, si no se desea recargar la página se recomineda poner en la función el parametro event y despues mandar llamarlo de la siguiente manera:

event.preventDefault();

De esta manera no se refrescará, aunque si no desea enviar información se recomienda usar el tipo del botón en << button >>

<button type ="button"> 

y con esto ya se puede eliminar el atributo event y el event.preventDefault()

---------------------------------------------------------------------------
*/