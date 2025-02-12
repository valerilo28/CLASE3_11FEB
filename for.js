// Ejemplo 1: Contador simple con for

for (let contador = 1; contador <= 5; contador++)
{
    console.log("El contador está en el ciclo: ", contador);   
}

// Ejemplo 2: Contador en reversa con for
for(let cuentaRegresiva = 10; cuentaRegresiva > 0; cuentaRegresiva--)
{
    console.log("Cuenta Regresiva: ", cuentaRegresiva);
}

// Ejemplo 3: Salatrnos los números pares

    //Solución 1
    for(let impar = 1; impar <= 10; impar += 2)
    {
        console.log("Número impar: ", impar);
    }

    //Solución 2

    for(let i = 1; i <= 10; i++)
    {
        if(i % 2 === 0)
        {
            continue;
        }
        console.log(i);
    }

    