import mongoose from "mongoose"
import { Hospital } from "../types.ts"
const Schema=mongoose.Schema;
const HospitalSchema=new Schema({
    nombre:String,
    cp:String,
    c_pais:String,
    latitud:String,
    longitud:String
})
export type HospitalModelType=mongoose.Document&Omit<Hospital,"medico">
export const HospitalModel=mongoose.model<HospitalModelType>("Hospital",HospitalSchema);
