import { getTemperaturaGrados } from "../API/getTemperaturaGrados.ts";
import { HospitalModelType } from "../db/Hospital.ts";
import { MedicoModel, MedicoModelType } from "../db/Medico.ts";

export const Hospital={
    medico:async(parent:HospitalModelType):Promise<MedicoModelType[]>=>{
        const medico= await MedicoModel.find({hospital:parent._id});
        return medico
    },
    temperatura:async(parent:HospitalModelType)=>{
        const info=await getTemperaturaGrados(parent.latitud,parent.longitud);
        return info.temperatura
    },
    grados:async(parent:HospitalModelType)=>{
        const info=await getTemperaturaGrados(parent.latitud,parent.longitud);
        return info.grados
    }
}