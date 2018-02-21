function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	var cantidadAlambre;

	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=(ancho*2)+(largo*2);

	cantidadAlambre=perimetro*3;

	alert("Necesita "+cantidadAlambre+" metros de alambre");

}
