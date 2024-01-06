import { GraphQLError } from "graphql";
import { CitaModelType } from "../db/Cita.ts";
import { PacienteModel, PacienteModelType } from "../db/Paciente.ts";
import { MedicoModel, MedicoModelType } from "../db/Medico.ts";

export const Cita={
    paciente:async(parent:CitaModelType):Promise<PacienteModelType>=>{
        const paciente=await PacienteModel.findById(parent.paciente);
        if(!paciente){
            throw new GraphQLError(`No person found with id ${parent.paciente}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return paciente
    },
    medico:async(parent:CitaModelType):Promise<MedicoModelType>=>{
        const medico=await MedicoModel.findById(parent.medico);
        if(!medico){
            throw new GraphQLError(`No person found with id ${parent.medico}`, {
                extensions: { code: "NOT_FOUND" },
              });
        }
        return medico
    },
}