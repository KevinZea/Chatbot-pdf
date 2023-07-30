// // Aquí deberías tener el código para cargar los datos desde donde los tengas almacenados localmente.
// // Por ejemplo, puedes leerlos desde un archivo JSON, una base de datos local o cualquier otra fuente.

// /* CONVIERTE EL TEXTO A VECTOR */
// const toEmbeddings = async (text) =>  {
//     return lib.openai.playground[
//       '@0.2.1'
//     ].embeddings.create({
//       model: `text-embedding-ada-002`,
//       input: [`${text}`],
//     });
//   }

// /* FUNCION PARA BUSCAR POR SIMILITUD DE COSENO */
// const cosineSimilarity = (vectorA, vectorB) => {
//   // Implementa aquí tu función para calcular la similitud de coseno entre dos vectores
//   // Puedes utilizar la librería mathjs u otra que te resulte conveniente
//   // Asegúrate de devolver el resultado de la similitud de coseno
//   return similarity;
// };

// /* Guardamos la información dividida por tamaño de token */
// // Para simular el almacenamiento local, guardamos los embeddings en un array en memoria
// const localEmbeddings = [];

// for (const infoPart of data) {
//   const embedding = await toEmbeddings(infoPart.content);
//   localEmbeddings.push({
//     id: infoPart.id + '',
//     metadata: {
//       content: infoPart.content,
//     },
//     values: embedding,
//   });
// }

// console.log(`Search: ${search}`);

// /* 1. CONVERTIMOS LA BÚSQUEDA EN EMBEDDINGS/VECTORES */
// const searchEmbedding = await toEmbeddings(search);

// console.log(`Search embeddings: ${searchEmbedding}`);

// /* 2. BUSCAMOS EN LOS EMBEDDINGS LOCALES - SIMILITUD DE COSENO */
// const results = localEmbeddings.map(embeddingObj => {
//   const similarity = cosineSimilarity(embeddingObj.values, searchEmbedding);
//   return {
//     similarity,
//     metadata: embeddingObj.metadata
//   };
// });

// // Ordenamos los resultados por similitud de coseno (los más similares primero)
// results.sort((a, b) => b.similarity - a.similarity);

// /* 3. Sacamos el contenido en formato texto de los resultados más parecidos */
// const topMatches = results.slice(0, 4);
// const CONTENIDO = topMatches.map(match => match.metadata.content).join('. ');

// const ND = 'Lo siento, pero no lo sé';

// const res = await lib.openai.playground['@0.2.1'].chat.completions.create({
//   // ... (código sin cambios) ...
// });

// // endpoints are executed as functions, click [> Run] below to test
// return {
//   message: res.choices[0].message.content,
// };
