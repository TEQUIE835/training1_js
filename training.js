let nombre = prompt(`Ingrese su nombre: `, ``);
let edad;
while (true){
    edad = prompt(`Ingrese su edad: `, ``)
    try{
        edad = parseInt(edad);
        if (edad>=18){
            console.log(`Busca mas oportunidades para tu futuro`)
            break
        } else if (edad<18){
            console.log(`Estudia para poder conseguir un futuro mejor`)
            break
        } else{
            console.log(`Ingrese un numero valido`)
        }
    } catch(error){
        console.log(`Ingrese un numero valido`)
    }
}