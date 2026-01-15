export const name = ""

export const lugar = false;

export function f(message: string){
    return message
}

export function suma(a: number, b: number): number{

    return a+b

}

export const NombrePersona = (nombre: string, apellido: string) => {


    if(nombre === "ISMAEL" && apellido === "MUÑOZ"){
        return "ESO";
    }else{
        return "Hola mundo"
    }


}

export const login = (usuario: string, contra: string) =>{


    //Esto lo hice yo. Esta mal hecho, que funciona si, pero mal hecho
    // if(usuario == "imunoz" || contra == "12345"){
    //     return "Accesos concedido"
    // }else if(usuario == "" || contra == ""){
    //     return "CAMPOS OBLIGATORIOS"
    // }else{
    //     return "ACCESO DENEGADO"
    // }

    if(usuario === "" || contra === ""){
        return "CAMBOS OBLIGATORIOS"
    }
    else if(usuario === "imunoz" && contra === "1234"){
        return "ACCESO CONCEDIDIO"
    }else{
        return "ACCESO DENEGADO"
    }


}

export const precios = (saldo: number, precio: number, estado: string) =>{

    


}

