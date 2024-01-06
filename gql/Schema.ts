export const typeDefs = `#graphql
type Hospital{
    id:ID!
    nombre:String!
    cp:String!
    c_pais:String!
    latitud:String!
    longitud:String!
    temperatura:String!
    grados:String!
    medico:[Medico!]!
}


type Paciente{
    id:ID!
    url:String!
    cita:[Cita!]!
    nombre:String!
    estatus:Status!
    especie:String!
    tipo:String!
    created:String
}
enum Status {
    Alive
    Dead
    unknown
}

type Medico{
    id:ID!
    url:String!
    hospital:Hospital!
    cita:[Cita!]!
    nombre:String!
    altura:String!
    peso:String!
    color_pelo:String!
    color_piel:String!
    color_ojos:String        
}
type Cita{
    id:ID!
    nombre:String!
    hora:String!
    dia:String!
    mes:String!
    ano:String!
    duracion:Duracion
    paciente:Paciente!
    medico:Medico!
}
enum Duracion {
    media_hora
    una_hora
    dos_hora
}
type Mutation{
    test:String!
    nuevoHospital(nombre:String!,cp:String!, c_pais:String!):Hospital!
    nuevoPaciente(url:String!):Paciente!
    nuevoMedico(url:String!, hospital:ID!):Medico!
    nuevaCita(nombre:String!,hora:Int!,minuto:Int!, dia:Int!,mes:Int!,ano:Int!, duracion:Duracion!,paciente:ID!,medico:ID!):Cita!
}
type Query{
    Medico(id:ID!):Medico!
    Paciente(id:ID!):Paciente!
    Cita(id:ID!):Cita!
    Hospital(id:ID!):Hospital!
    test:String!
}
`