type LatitudLongitud={
    latitud:string,
    longitud:string
}
export const getLatitudLongitud = async (cp:string, c_pais:string):Promise<LatitudLongitud>=>{
    const API_URL = "https://zip-api.eu/api/v1";
  const url = `${API_URL}/info/${c_pais.toUpperCase()}-${cp}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("Codigo postal o codigo pais invalido");
  }
  const data = await response.json();
  return {
    latitud: data.lat,
    longitud: data.lng,
  };
};