/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	// esto es un comentario de una linea
	// alert("anda");
	// toda linea de instruccion , termina con punto y coma (;)
	var nombre;
/*
es en bloque
	alert("nombre");
	alert(nombre);
	nombre="Salvador";
	alert(nombre);
*/
	nombre=prompt("ingrese su nombre","natalia natalia");
	//alert(nombre);

	/*
	alert("su nombre es:");
	alert( nombre);
	*/

	//concatenar es juntar en lugar de poner dos alert como arriba, se concatena como abajo con el signo mas (+);
	alert("su nombre es: " + nombre);
}

