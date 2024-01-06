type Personaje={
    nombre:string,
    altura:string,
    peso:string,
    color_pelo:string,
    color_piel:string,
    color_ojos:string
}
export const getPersonajeStarWars=async(url:string):Promise<Personaje>=>{
    const response=await fetch (url);
    if(response.status!==200){
        throw new Error("Url invalida");
    }
    const data= await response.json();
    return {
        nombre:data.name,
        altura:data.height,
        peso:data.mass,
        color_pelo:data.hair_color ,
        color_piel:data.skin_color,
        color_ojos:data.eye_color


    }
}