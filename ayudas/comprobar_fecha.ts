import { isAlive } from "../API/getAlivePaciente.ts";
import { PacienteModel } from "../db/Paciente.ts";

export const ComprobarFecha=async(hora:number,minuto:number, dia:number, mes:number, ano:number,paciente:string):boolean=>{
    //Comprobamos que la fecha cumple los parametros establecidos
        /*
            ->Hora mayor que 0 y menor que 24
            ->Minuto mayor que 0 y menor que 60
            etc
        */
    if(hora<0 || hora >24 || minuto<0 || minuto>59 || mes<0 ||mes >12){
        throw new Error("La fecha es invalida");
    }
    switch(mes){
        case 1:
            if(dia<0|| dia>31)throw new Error("El dia es incorrecto");
            break;
        case 2:
            if(dia<0||dia>28)throw new Error("El dia es incorrecto");
            break;
        case 3:
            if(dia<0|| dia>31)throw new Error("El dia es incorrecto");
            break;
        case 4:
            if(dia<0|| dia>30)throw new Error("El dia es incorrecto");
            break;
        case 5:
            if(dia<0|| dia>31)throw new Error("El dia es incorrecto");
            break;
        case 6:
            if(dia<0|| dia>30)throw new Error("El dia es incorrecto");
            break;
        case 7:
            if(dia<0|| dia>31)throw new Error("El dia es incorrecto");
            break;
        case 8:
            if(dia<0|| dia>31)throw new Error("El dia es incorrecto");
            break;
        case 9:
            if(dia<0|| dia>30)throw new Error("El dia es incorrecto");
            break;
        case 10:
            if(dia<0|| dia>31)throw new Error("El dia es incorrecto");
            break;
        case 11:
            if(dia<0|| dia>30)throw new Error("El dia es incorrecto");
            break;
        case 12:
            if(dia<0|| dia>31)throw new Error("El dia es incorrecto");
        break;
        default:
            console.log("Dia invalido");
            break;
    }
    const anoActual = new Date().getFullYear();
    if(ano<anoActual){
        throw new Error("El ano de la cita es menor que el ano actual");
    }
    //MIRAR ESTO
    //Comprobamos si el paciente esta vivo 
    const _paciente=await PacienteModel.findById(paciente);   
    if(!_paciente)throw new Error("El id del paciente es incorrecto")
    const vivo=await isAlive(_paciente.url)
    if(!vivo)throw new Error("El personaje no esta vivo por lo cual no le podemos atender")
    
    return true;

}