import axios from 'axios'

//senviar mensaje

const apikey = "sec_GMgMhR0NPthjEO6oGXHV53KUbcFNUJ6t"
// const axios = require("axios");
const config = {
    headers: {
        "x-api-key": apikey,
        "Content-Type": "application/json",
    },
};

export async function createChat(message) {
    const data = {
        sourceId: "cha_RIYFEc0Cz7kngC1enNPpr",
        messages: [
            {
                role: "user",
                content: message,
            },
        ],
    };

    try {
        const response = await axios.post("https://api.chatpdf.com/v1/chats/message", data, config)
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
