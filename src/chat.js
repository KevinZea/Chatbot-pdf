const { Configuration, OpenAIApi } = require("openai");
const apikey = "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"
const embeddingsArray = require('./embedding.json');

const configuration = new Configuration({
    apiKey: apikey,
});
const openai = new OpenAIApi(configuration);

export async function createChat(question) {
    try {
        const arrayContext = await searchReviews(embeddingsArray, question)
        let context = `
            Responde la siguiente pregunta basado en el contexto de abajo
            y si no puedes responder la pregunta basado en el contexto
            vas a decir Lo siento no tengo conocimiento en tu informacion
            Nota: si te saludan solo responde el saludo
            
        `
        for(let obj of arrayContext){
            context = context.concat(obj.text)
        }
        console.log(context)
        let arrayMessages =[{role: "system", content: context}]
        let user = {role: "user", content: question}
        arrayMessages.push(user)
        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            max_tokens: 200,
            messages: arrayMessages,
            // context: context,
            temperature:0.5
            
            
        });
        const message = completion.data.choices[0].message.content

        let objAssitant = {
            role: "assistant",
            content: message
        }
        return objAssitant
    } catch (error) {
        console.error(error);
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
async function searchReviews(objects, question, n = 3) {
    const embedding = await getEmbedding(question);
    objects.forEach(obj => {
        obj.similarity = cosineSimilarity(obj.embeddings, embedding);
    });
    const res = objects.sort((a, b) => b.similarity - a.similarity).slice(0, n);
    return res;
}
// Ejemplo de uso


