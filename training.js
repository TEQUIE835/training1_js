//se pregunta por el nombre
let nombre = prompt(`Ingrese su nombre: `, ``);

//se crea la variable de edad
let edad;
while (true){

    //se pide la edad al usuario
    edad = prompt(`Ingrese su edad: `, ``)
    try{
        //se intenta convertir la edad a entero
        edad = parseInt(edad);
        if (edad>=18){

            //si es mayor de 18 se imprime este mensaje
            console.log(`Busca mas oportunidades para tu futuro`)
            break
        } else if (edad<18){

            //si es menor de 18 se imprime este mensaje
            console.log(`Estudia para poder conseguir un futuro mejor`)
            break
        } else{

            //si es un numero invalido se imprime este mensaje
            console.log(`Ingrese un numero valido`)
        }
    } catch(error){
        //si se ingresa algo que no se puede convertir a entero se imprime este mensaje
        console.log(`Ingrese un numero valido`)
    }
}