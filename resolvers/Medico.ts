import { GraphQLError } from "graphql";
import { getPersonajeStarWars } from "../API/getPersonaStarWars.ts";
import { HospitalModel, HospitalModelType } from "../db/Hospital.ts";
import { MedicoModelType } from "../db/Medico.ts";
import { CitaModel, CitaModelType } from "../db/Cita.ts";

export const Medico={
    nombre:async(medico:MedicoModelType)=>{
        const dato=await getPersonajeStarWars(medico.url);
        return dato.nombre;
    },
    altura:async(medico:MedicoModelType)=>{
        const dato=await getPersonajeStarWars(medico.url);
        return dato.altura;
    },
    peso:async(medico:MedicoModelType)=>{
        const dato=await getPersonajeStarWars(medico.url);
        return dato.peso;
    },
    color_pelo:async(medico:MedicoModelType)=>{
        const dato=await getPersonajeStarWars(medico.url);
        return dato.color_pelo;
    },
    color_piel:async(medico:MedicoModelType)=>{
        const dato=await getPersonajeStarWars(medico.url);
        return dato.color_piel;
    },
    color_ojos:async(medico:MedicoModelType)=>{
        const dato=await getPersonajeStarWars(medico.url);
        return dato.color_ojos;
    },
    hospital:async(parent:MedicoModelType):Promise<HospitalModelType>=>{
        const hospital=await HospitalModel.findById(parent.hospital).exec();
        if(!hospital){
            throw new GraphQLError(`No person found with id ${parent.hospital}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return hospital;
    },
    cita:async(parent:MedicoModelType):Promise<CitaModelType[]>=>{
        const cita=await CitaModel.find({medico:parent._id});
        return cita
    }
}