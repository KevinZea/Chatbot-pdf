const { Configuration, OpenAIApi } = require("openai");
const apikey = "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"
const salento = require('./salento.json');
const pereira = require('./pereira.json')
const sonson = require('./sonson.json')
const quindio = require('./quindio.json')
const risaralda = require('./risaralda.json')
const cafetero = require('./cafetero.json')
const pueblos = require('./pueblos.json')
const configuration = new Configuration({
    apiKey: apikey,
});
const openai = new OpenAIApi(configuration);

let embeddingsArray = []
export async function createChat(question) {
    try {
        let arrayContext = await searchReviews(question)
        let context = `
            Eres un asesor virtual de turismo
            Responde la siguiente pregunta basado en el siguiente contexto
            y respondiendo con toda la informacion de contacto que haya
            de manera organizada
            Importante: si no puedes responder la pregunta basado en el contexto
            vas a decir Lo siento no tengo conocimiento en tu informacion, trata de ser mas especifico
            Nota: si te saludan solo responde el saludo
            
        `
        for (let obj of arrayContext) {
            context = context.concat(obj.text + "\n")
        }
        let arrayMessages = [{ role: "system", content: context }]
        let user = { role: "user", content: question }
        arrayMessages.push(user)
        console.log(context)
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo', //-0613
            messages: arrayMessages,
            temperature: 0,


        });
        const message = completion.data.choices[0].message
        arrayMessages.push(message)
        return message

    } catch (error) {
        console.error(error);
        let objError = {
            role: "assistant",
            content: "Lo siento, estoy teniendo problemas de conexion, intenta mas tarde"
        }
        return objError
    }
}

//similitud de cosenos
function cosineSimilarity(a, b) {
    let dotProduct = 0;
    let magnitudeA = 0;
    let magnitudeB = 0;
    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        magnitudeA += a[i] * a[i];
        magnitudeB += b[i] * b[i];
    }
    magnitudeA = Math.sqrt(magnitudeA);
    magnitudeB = Math.sqrt(magnitudeB);
    return dotProduct / (magnitudeA * magnitudeB);
}
// obtener el embedding de una frase
async function getEmbedding(text) {
    const response = await openai.createEmbedding({
        model: 'text-embedding-ada-002',
        input: text
    });
    return response.data.data[0].embedding;
}
// responde con un arreglo los resultados mas parecidos
async function searchReviews(question, n = 3) {
    const includesCity = question.toLowerCase().trim()
    if (includesCity.includes("salento")) {
        embeddingsArray = [...salento]
    }
    else if (includesCity.includes("pereira")) {
        embeddingsArray = [...pereira]
    }
    else if (includesCity.includes("sonson") || includesCity.includes("sonsón")){
        embeddingsArray = [...sonson]
    }
    else if(includesCity.includes("quindio")){
        embeddingsArray = [...quindio]
        n = 1
    }
    else if(includesCity.includes("risaralda")){
        embeddingsArray = [...risaralda]
    }
    else if(includesCity.includes("cafetero")){
        embeddingsArray = [...cafetero]
    }
    else if(includesCity.includes("patrimonio cultural")){
        embeddingsArray = [...pueblos]
    }
    
    const embedding = await getEmbedding(question);
    embeddingsArray.forEach(obj => {
        obj.similarity = cosineSimilarity(obj.embeddings, embedding);
    });
    const res = embeddingsArray.sort((a, b) => b.similarity - a.similarity).slice(0, n);
    return res;
}

