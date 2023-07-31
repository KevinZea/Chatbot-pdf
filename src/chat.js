// [
//     {
//         "name": "get_name",
//         "description": "Obtener el nombre del dueño",
//         parameters: {
//             type: "object",
//             properties: {
//                 nombre: {
//                     type: "string",
//                     description: "el nombre del dueño"
//                 }
//             }
//         }
//     },

// ],

const { Configuration, OpenAIApi } = require("openai");
const apikey = "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"

const configuration = new Configuration({
    apiKey: apikey
});
const openai = new OpenAIApi(configuration);

let arrayMessages = [
    { "role": "system", "content": "Tu eres un asistente virtual en español que unicamente brinda informacion de Yerba Buena una ciudad de argentina" },
]
const functiosCall = [
    {
        "name": "getAsesor",
        "description": "Informacion de un asesor humano que pueda brindar asesoria de la ciudad de Yerba Buena y su información de contacto",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getCentrosComerciales",
        "description": "Informacion de los centros comerciales de la ciudad de yerba buena son sus horarios y la informacion de cada centro comercial",
        parameters: {
            type: "object",
            properties: {}
        }
    },
]
export async function createChat(message) {
    let objUser = {
        role: "user",
        content: message
    }
    arrayMessages.push(objUser)
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo-0613",
            messages: arrayMessages,
            functions: functiosCall,
            function_call: "auto"
        });
        console.log(completion)
        if (completion.data.choices[0].message.content !== null) {
            return completion.data.choices[0].message
        }
        else {
            let nameFuncion = completion.data.choices[0].message.function_call.name
            let response = eval(nameFuncion + "()")
            let objResponse = {
                role: "assistant",
                content: response
            }
            return objResponse
        }
    } catch (error) {
        return error
    }
}

function getAsesor() {
    const response = "El Asesor es un directorio virtual de la ciudad de Yerba Buena. \n" +
    "Contacto de El Asesor: https://wa.link/at4y25 \n" +
    "Teléfono: 3815076319 \n"
    return response   
}

function getCentrosComerciales(){
    return "Centros comerciales en Yerba Buena: " +
    "Yerba Buena Shopping " +
    "Centro comercial: " +
    "Comercios, gastronomía, supermercado, ropa. " +
    "Te esperamos todos los días de 8 a 22 hs " +
    "Locales Comerciales 9:30 a 13:30 y de 17 a 21hs " +
    "Dirección: Av. Aconquija 1799 - Yerba Buena " +
    "Sitio web www.yerbabuenashopping.com " +
    "Cómo llegar: Shopping Yerba Buena " +
    "Contacto: https://wa.link/tx4lst " +  
    "*Portal Tucuman " +
    "Portal Tucumán Shopping es el shopping más importante de Tucumán. Cuenta con " +
    "cocheras de fácil acceso, más de 90 locales con las marcas más importantes, Patio de " +
    "Comidas, Cines y entretenimientos. Además en Portal Tucumán podrá disfrutar de un " +
    "Hipermercado Jumbo e Easy " +
    "HORARIOS: ESTAMOS ABIERTOS TODOS LOS DÍAS DE 10 A 22 HS. PATIO DE " +
    "COMIDAS: Domingos a Jueves: 8 A 00 HS / Viernes, Sábado y vísperas de feriado y " +
    "feriados: 8 A 01 HS " +
    "Sitio web: Portal Tucumán " +
    "Cómo llegar: Portal Tucumán"
}


// console.log(completion.data.choices[0].message);
