function Mostrar()
{
  var precio;
  var precioIva;

  precio=prompt("Ingrese el importe");
  precio=parseInt(precio)
  precioIva=precio+(precio*0.21);

  document.getElementById('importeFinal').value=precioIva;

}
