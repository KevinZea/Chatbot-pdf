import axios from 'axios'

//senviar mensaje

const apikey = "sec_GMgMhR0NPthjEO6oGXHV53KUbcFNUJ6t"
// const axios = require("axios");
const config = {
    headers: {
        "x-api-key": apikey,
        "Content-Type": "application/json",
    },
    // responseType: "stream",
};

let array = []
export async function createChat(message) {
    let objUser = 
        {
            role: "user",
            content: "Vas a responder la siguiente pregunta o instruccion en español y unicamente con la información del pdf proporcionado, ademas que si te pregunten alguna información si hay algun enlace a la información referida vas a enviar esos enlaces en tu respuesta, y otra regla es contestar  sin mencionar la palabra " + "documento" + "relaciona gastronomia con restaurantes cuando te pregunten"  + <br></br> + message,
        }
    array.push(objUser)
    const data = {
        // stream: true,
        referenceSources: false,
        sourceId: "cha_RIYFEc0Cz7kngC1enNPpr",
        messages: array
    };

    try {
        const response = await axios.post("https://api.chatpdf.com/v1/chats/message", data, config)
        let obj = {
            "role": "assistant",
            "content": response.data.content
        }
        array.push(obj)
        console.log(response)
        return response.data.content
    } catch (error) {
        console.log(error)
        return error.message
    }

}

// const { Configuration, OpenAIApi } = require("openai");
// const apikey = "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"

// const configuration = new Configuration({
//     apiKey: apikey
// });
// const openai = new OpenAIApi(configuration);

// export async function createChat(message) {
//     try {
//         const completion = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [{ "role": "system", "content": "Tu eres un asistente virtual." }, { role: "user", content: message }],
//         });
//         return completion.data.choices[0].message
//     } catch (error) {
//         return error
//     }
// }
// // console.log(completion.data.choices[0].message);
