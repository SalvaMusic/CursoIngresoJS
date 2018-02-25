function Mostrar()
{
	var importe;
	var contador=0;
	var mayor=0;
	var menor=0;

	while(contador < 24)
	{
		contador ++;
		importe=prompt("ingrese importe del día "+contador);
		if (contador==1)
		{
			mayor=importe;
			menor=importe;
		} 
		else 
		{
			if(importe>mayor)
			{
				mayor=importe;
			}
			if (importe<menor)
			{
				menor=importe;
			}
		}
	}
	document.getElementById('importeFinal').value=("Mayor: "+mayor+", Menor: "+menor);
}
