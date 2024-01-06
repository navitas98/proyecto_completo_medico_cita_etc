import { Medico } from "../types.ts";
import mongoose from "mongoose"

const Schema=mongoose.Schema;
const MedicoSchema=new Schema({
    url:String,
    hospital:Schema.Types.ObjectId
})
export type MedicoModelType=mongoose.Document&Omit<Medico,"hospital"|"cita">&{
    hospital:mongoose.Types.ObjectId
}

export const MedicoModel=mongoose.model<MedicoModelType>("Medico",MedicoSchema);
