export const isAlive=async(url:string):Promise<Boolean>=>{
    const response=await fetch(url);
    if(response.status!==200){
        throw new Error("Url invalida")
    }
    const data=await response.json();
    if(data.status==="Alive"){return true}
     return false
    
    
}