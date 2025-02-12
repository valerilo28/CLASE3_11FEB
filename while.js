//Ejemplo 1: Contador simple con while

let contador = 1;

while(contador <= 5)
{
    console.log("El contador está en el ciclo: ", contador);
    contador++; //es equivalente a contador = contador + 1, o contador += 1
}

//Ejemplo 2: Contador en reversa

let cuentaregresiva = 5;

while (cuentaregresiva > 0)
{
    console.log("Cuenta Regresiva: ", cuentaregresiva);

    cuentaregresiva--;
}

// Ejemplo 3: Solicitar confirmación hasta que el usuario acepte

let confirmacion = true;

while(confirmacion)
{
// Otras tareas dentro del ciclo
    confirmacion =  confirm("Quieres realizar otra operación? "); // confirm devuelve true or false
    console.log("Confirmación recibida", confirmacion);
}