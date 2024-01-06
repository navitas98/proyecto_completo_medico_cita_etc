import { getLatitudLongitud } from "../API/getLatitudLongitud.ts";
import { ComprobarFecha } from "../ayudas/comprobar_fecha.ts";
import { CitaModel, CitaModelType } from "../db/Cita.ts";
import { HospitalModel, HospitalModelType } from "../db/Hospital.ts";
import { MedicoModel, MedicoModelType } from "../db/Medico.ts";
import { PacienteModel, PacienteModelType } from "../db/Paciente.ts";
import mongoose from "mongoose"
export const Mutation={
    nuevoHospital:async(_:unknown, args:{nombre:string, cp:string, c_pais:string}):Promise<HospitalModelType>=>{
        const {nombre, cp,c_pais}=args;
        const {latitud, longitud}=await getLatitudLongitud(cp, c_pais);
        const hospital={
            nombre,
            cp,
            c_pais:c_pais.toUpperCase(),
            latitud,
            longitud
        }
        const newHospital=await HospitalModel.create(hospital);
        return newHospital;
    },
    nuevoPaciente:async(_:unknown, args:{url:string}):Promise<PacienteModelType>=>{
        const {url}=args;
        const paciente={
            url
        }
        const nuevoPaciente=await PacienteModel.create(paciente);
        return nuevoPaciente
    },
    nuevoMedico:async(_:unknown, args:{url:string, hospital:string}):Promise<MedicoModelType>=>{
        const {url, hospital}=args;
        const medico={
            url,
            hospital:new mongoose.Types.ObjectId(hospital)
        }
        const nuevoMedico=await MedicoModel.create(medico);
        return nuevoMedico
    },
    nuevaCita:async(_:unknown,args:{nombre:string, hora:number,minuto:number, dia:number, mes:number, ano:number, duracion:string, paciente:string, medico:string}):Promise<CitaModelType>=>{
        const {nombre, hora,minuto, dia, mes, ano, duracion,paciente, medico}=args;

        const fecha=await ComprobarFecha(hora, minuto, dia, mes, ano, paciente)
        const cita=await ComprobarCita(hora, minuto, dia, mes, ano, duracion,medico);
        
        //Comprobar que se puede guardar la cita
        const citas={
            nombre,
            hora:"15",
            dia:"10",
            mes:"12",
            ano:"2024",
            duracion,
            paciente:new mongoose.Types.ObjectId(paciente),
            medico:new mongoose.Types.ObjectId(medico)
        }
        const nuevaCita=await CitaModel.create(citas);
        return nuevaCita
        
    }
    
    
}