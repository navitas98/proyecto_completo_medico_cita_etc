export type Hospital={
    id:string,
    nombre:string,
    cp:string,
    c_pais:string,
    latitud:string,
    longitud:string,    
    medico:Medico[]
}
export type Paciente={
    id:string,
    url:string,
    cita:Cita[]
   
}
enum Duracion{
    una_hora=60,
    dos_hora=120
}
export type Cita={
    id:string,
    nombre:string
    duracion:Duracion
    hora:string
    dia:string,
    mes:string,
    ano:string,
    paciente:Paciente,
    medico:Medico
}
export type Medico={
    id:string,
    url:string,
    hospital:Hospital
    cita:Cita[]
}