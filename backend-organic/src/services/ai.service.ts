import axios from "axios";

export async function interpretProductText (prompt: string){
    const response = await axios.post(process.env.AI_API_URL!, {prompt});

    //esperamos la respuesta JSON estructurada de la IA
    return response.data;
}
