import { GraphQLError } from "graphql";
import { MedicoModel, MedicoModelType } from "../db/Medico.ts";
import { PacienteModel, PacienteModelType } from "../db/Paciente.ts";
import { CitaModel, CitaModelType } from "../db/Cita.ts";
import { Hospital } from "../types.ts";
import { HospitalModel, HospitalModelType } from "../db/Hospital.ts";

export const Query={
    Medico:async(_:unknown,args:{id:string}):Promise<MedicoModelType>=>{
        const {id}=args;
        const medico=await MedicoModel.findById(id);
        if(!medico){
            throw new GraphQLError(`No pet found with id ${args.id}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return medico;
    },
    Paciente:async(_:unknown,args:{id:string}):Promise<PacienteModelType>=>{
        const paciente=await PacienteModel.findById(args.id);
        if(!paciente){
            throw new GraphQLError(`No pet found with id ${args.id}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return paciente
    },
    Cita:async(_:unknown, args:{id:string}):Promise<CitaModelType>=>{
        const cita=await CitaModel.findById(args.id);
        if(!cita){
            throw new GraphQLError(`No pet found with id ${args.id}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return cita
    },
    Hospital:async(_:unknown,args:{id:string}):Promise<HospitalModelType>=>{
        const hospital=await HospitalModel.findById(args.id);
        if(!hospital){
            throw new GraphQLError(`No pet found with id ${args.id}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return hospital;
    }
}