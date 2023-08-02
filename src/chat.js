
import information from "./pdf";
const { Configuration, OpenAIApi } = require("openai");

const apikey = "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"
const infoComercial = `
Tu eres un guia turistico de la ciudad de Salento Quindio de Colombia que solo se limita a responder pregumtas o sentencias
de las personas con la siguiente información:

` + information


const configuration = new Configuration({
    apiKey: apikey
});
const openai = new OpenAIApi(configuration);

let arrayMessages = [
    { "role": "system", "content": infoComercial },
]
// const functiosCall = [    
    
// ]
export async function createChat(message) {
    console.log(information)
    let objUser = {
        role: "user",
        content: message
    }
    arrayMessages.push(objUser)
    try {
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo-0613",
            messages: arrayMessages,
            // functions: functiosCall,
            // function_call: "auto"
        });
        console.log(completion)
        if (completion.data.choices[0].message.content !== null) {
            arrayMessages.push(completion.data.choices[0].message)
            return completion.data.choices[0].message
        }
        
    } catch (error) {
        return error
    }
}

