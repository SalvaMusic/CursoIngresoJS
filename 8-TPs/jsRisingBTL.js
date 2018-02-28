/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad;
 	var sexo;
 	var estadoCivil;
 	var sueldoBruto;
 	var numeroLegajo;
 	var nacionalidad;

	edad=prompt("Ingrese edad");
 	edad=parseInt(edad);
 	while(isNaN(edad) || (edad <18 || edad >90))
 	{
 		edad=prompt("Ingrese edad");
 		edad=parseInt(edad);
 	}
 	document.getElementById('Edad').value=edad;

 	sexo=prompt("Ingrese sexo: 'M' para masculino o 'F' para Femenino");

 	while(sexo != 'M' && sexo != 'F')
 	{
 		sexo=prompt("Ingrese sexo: 'M' para masculino o 'F' para Femenino");
 	}
 	document.getElementById('Sexo').value=sexo;

 	estadoCivil=prompt("Ingrese estado civil: 1(Soltero) / 2(Casado) / 3 (Divorsiado / 4 (Viudo)");
 	estadoCivil=parseInt(estadoCivil);
 	while(isNaN(estadoCivil) || (estadoCivil<1 || estadoCivil>4))
 	{
 		estadoCivil=prompt("Ingrese estado civil: 1(Soltero) / 2(Casado) / 3 (Divorsiado / 4 (Viudo)");
 		estadoCivil=parseInt(estadoCivil);
 	}
 	switch(estadoCivil)
 	{
 		case 1:
 			estadoCivil=Soltero;
 			break;
 		case 2:
 			estadoCivil=Casado;
 			break;
 		case 3:
 			estadoCivil=Divorsiado;
 			break;
 		case 4:
 			estadoCivil=Viudo;
 			break;
 	}
 	document.getElementById('EstadoCivil').value=estadoCivil;
/*
 	sueldoBruto=prompt("Ingrese sueldo bruto");

 	numeroLegajo=prompt("Ingrese numero de legajo");

 	while(legajo<1000 || legajo >9999 || isNaN(legajo)


 	nacionalidad=prompt("Ingrese nacionalidad");

 	sexo=prompt("Ingrese edad");*/
}