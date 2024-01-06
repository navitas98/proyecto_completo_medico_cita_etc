import { Cita} from "../types.ts";
import mongoose from "mongoose"
const Schema=mongoose.Schema;
const CitaSchema=new Schema({
    hora:String,
    dia:String,
    mes:String,
    ano:String,
    paciente:Schema.Types.ObjectId,
    medico:Schema.Types.ObjectId,
    nombre:String,
    duracion:{type:String, enum:["media_hora","una_hora","dos_hora"]}
});
export type CitaModelType=mongoose.Document&Omit<Cita,"paciente"|"medico">&{
    paciente:mongoose.Types.ObjectId,
    medico:mongoose.Types.ObjectId
};
export const CitaModel=mongoose.model<CitaModelType>("Cita",CitaSchema);