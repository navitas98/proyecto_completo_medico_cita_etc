import mongoose from "mongoose"
import { Paciente } from "../types.ts"
const Schema=mongoose.Schema;
const PacienteSchema=new Schema({
    url:String,
});
export type PacienteModelType=mongoose.Document&Omit<Paciente,"cita">;

export const PacienteModel=mongoose.model<PacienteModelType>("Paciente",PacienteSchema);
