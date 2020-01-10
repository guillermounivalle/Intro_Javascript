
var nombre = "Guillermo Hernández";
var nombre_1;

//Función prompt nos permite almacenar un texto y un valor ==> prompt("mensaje", "Valor");
//prompt("Ingresa tu nombre", "Valor");

//La función alert nos muestra una alerta en pantalla
//alert(nombre);

//Lo que voy a hacer es mostrar con una alerta, un document.write y un concole.log el nombre que se le ingrese a la función propmp

nombre_1 = prompt("Ingresa tu nombre", "Valor");

alert(nombre_1);
document.write(nombre_1);
console.log(nombre_1);

//Tipos de datos

  //Nùmerico - float
  var edad = 19.25;

  //String - Cadena de texto
  var nombre_2 = "Guillermo";
  var apellido = "Hernàndez";
  document.write(nombre_2 + " " + apellido);
  //Escapando texto, en este caso comillas
  document.write("Debes ingresar nombre asi \" Guillermo \" " );


  //Array
  var nombres = ["Guillermo", "Paola", "Alberto"];
  document.write(nombres[1]);

  //Objeto
  var objeto = {
    color: "Black",
    size: 12
  };


  //Booleanos
  var booleano = true;

  //undefined
  var Guillermo;

  //Null  Ningún valor
  var init = null;

 