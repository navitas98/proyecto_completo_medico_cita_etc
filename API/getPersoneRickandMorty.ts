type Personaje={
    nombre:string,
    estatus:string,
    especie:string,
    tipo:string,
    created:string
}
export const getPersonajeRickMorty=async(url:string):Promise<Personaje>=>{
    const response=await fetch(url);
    if(response.status!==200){
        throw new Error("Url invalida")
    }
    const data=await response.json();
    return{
        nombre:data.name,
        estatus:data.status,
        especie:data.species,
        tipo:data.type,
        created:data.created
    }
}