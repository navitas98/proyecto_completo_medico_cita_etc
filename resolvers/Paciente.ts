import { getPersonajeRickMorty } from "../API/getPersoneRickandMorty.ts";
import { CitaModel, CitaModelType } from "../db/Cita.ts";
import { PacienteModelType } from "../db/Paciente.ts";

export const Paciente={
    nombre:async(paciente:PacienteModelType)=>{
        const dato=await getPersonajeRickMorty(paciente.url);
        return dato.nombre;
    },
    estatus:async(paciente:PacienteModelType)=>{
        const dato=await getPersonajeRickMorty(paciente.url);
        return dato.estatus;
    },
    especie:async(paciente:PacienteModelType)=>{
        const dato=await getPersonajeRickMorty(paciente.url);
        return dato.especie;
    },
    tipo:async(paciente:PacienteModelType)=>{
        const dato=await getPersonajeRickMorty(paciente.url);
        return dato.tipo;
    },
    created:async(paciente:PacienteModelType)=>{
        const dato=await getPersonajeRickMorty(paciente.url);
        return dato.created;
    },
    cita:async(parent:PacienteModelType):Promise<CitaModelType[]>=>{
        const  cita=await CitaModel.find({paciente:parent._id});
        return cita;
    }
}