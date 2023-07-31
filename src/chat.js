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
    {
        "name": "getCentroComercial",
        "description": "Informacion de un centro comercial de la ciudad de yerba buena son sus horarios y la informacion del centro comercial",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre del centro comercial que quiere consultar"
                }
            }
        }
    },
    {
        "name": "getRestaurants",
        "description": "Informacion de los sitios de gastronomia o restaurantes para comer y disfrutar de la ciudad de yerba buena esta la informacion de sus horarios y la informacion de cada sitio en especial",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getRestaurant",
        "description": "Informacion de un lugar de comida de la ciudad de yerba buena la informacion que se brinda es horarios y la informacion del lugar de comida",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre del restaurante o cafeteria que quiere consultar"
                }
            }
        }
    },
    {
        "name": "getCafeterias",
        "description": "Informacion de los sitios de cafeterias en especifico para comer y disfrutar de la ciudad de yerba buena esta la informacion de sus horarios y la informacion de cada sitio en especial",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getAbogados",
        "description": "Informacion de los abogados y estudios juridicos de la ciudad de yerba buena y su información al respecto",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getBellezas",
        "description": "Informacion de los centro medicos o salones de bellezas y sus relacionados de la ciudad de yerba buena y su información al respecto",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getBelleza",
        "description": "Informacion de un centro medico o un salon de belleza la ciudad de yerba buena la informacion que se brinda es horarios y la informacion del lugar",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre del centro medico o salon de belleza que quiere consultar"
                }
            }
        }
    },
    {
        "name": "getPetShops",
        "description": "Informacion de tiendas de mascotas (petshops) y sus relacionados de la ciudad de yerba buena y su información al respecto",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getInmobiliarias",
        "description": "Informacion de Inmobiliarias y sus relacionados de la ciudad de yerba buena y su información al respecto",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getTaxis",
        "description": "Informacion de servicios privados de transportes como taxis y sus relacionados de la ciudad de yerba buena y su información al respecto",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getEducations",
        "description": "Informacion de instituciones de educacion o gubernamentales y sus relacionados de la ciudad de yerba buena y su información al respecto",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getEducation",
        "description": "Informacion de una institucion de educacion o gubernamental de la ciudad de yerba buena la informacion que se brinda es horarios y la informacion del lugar",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre de la institucion de educacion o gubernamental que quiere consultar"
                }
            }
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
            if (completion.data.choices[0].message.function_call.arguments.length <= 1) {
                let nameFuncion = completion.data.choices[0].message.function_call.name
                let response = eval(nameFuncion + "()")
                let objResponse = {
                    role: "assistant",
                    content: response
                }
                return objResponse
            }
            else {
                let nameFuncion = completion.data.choices[0].message.function_call.name
                let palabraFuncion = nameFuncion.concat("(" + completion.data.choices[0].message.function_call.arguments + ")")
                let response = eval(palabraFuncion)
                let objResponse = {
                    role: "assistant",
                    content: response
                }
                return objResponse
            }

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

function getCentrosComerciales() {
    return `
    Centros comerciales en Yerba Buena:
    *Yerba Buena Shopping
    Centro comercial:
    Comercios, gastronomía, supermercado, ropa.
    Te esperamos todos los días de 8 a 22 hs
    Locales Comerciales 9:30 a 13:30 y de 17 a 21hs
    Dirección: Av. Aconquija 1799 - Yerba Buena
    Sitio web www.yerbabuenashopping.com
    Cómo llegar: Shopping Yerba Buena
    Contacto: https://wa.link/tx4lst
    
    *Portal Tucuman
    Portal Tucumán Shopping es el shopping más importante de Tucumán. Cuenta con
    cocheras de fácil acceso, más de 90 locales con las marcas más importantes, Patio de
    Comidas, Cines y entretenimientos. Además en Portal Tucumán podrá disfrutar de un
    Hipermercado Jumbo e Easy
    HORARIOS: ESTAMOS ABIERTOS TODOS LOS DÍAS DE 10 A 22 HS. PATIO DE
    COMIDAS: Domingos a Jueves: 8 A 00 HS / Viernes, Sábado y vísperas de feriado y
    feriados: 8 A 01 HS
    Sitio web: https://www.tucumanshopping.com.ar/
    Cómo llegar: https://goo.gl/maps/gV96qDVLSnPV5sZ56
    `
}
function getCentroComercial(name) {
    if (name) {
        let arrayArguments = Object.values(name)
        let centroComercial = arrayArguments[0].toLowerCase()
        const yerbabuenashopping = `
        *Yerba Buena Shopping
        Centro comercial:
        Comercios, gastronomía, supermercado, ropa.
        Te esperamos todos los días de 8 a 22 hs
        Locales Comerciales 9:30 a 13:30 y de 17 a 21hs
        Dirección: Av. Aconquija 1799 - Yerba Buena
        Sitio web www.yerbabuenashopping.com
        Cómo llegar: Shopping Yerba Buena
        Contacto: https://wa.link/tx4lst
        `;
        const portaltucuman = `
        *Portal Tucuman
        Portal Tucumán Shopping es el shopping más importante de Tucumán. Cuenta con
        cocheras de fácil acceso, más de 90 locales con las marcas más importantes, Patio de
        Comidas, Cines y entretenimientos. Además en Portal Tucumán podrá disfrutar de un
        Hipermercado Jumbo e Easy
        HORARIOS: ESTAMOS ABIERTOS TODOS LOS DÍAS DE 10 A 22 HS. PATIO DE
        COMIDAS: Domingos a Jueves: 8 A 00 HS / Viernes, Sábado y vísperas de feriado y
        feriados: 8 A 01 HS
        Sitio web: https://www.tucumanshopping.com.ar/
        Cómo llegar: https://goo.gl/maps/gV96qDVLSnPV5sZ56
        `
        if (centroComercial.includes("yerba")) {
            return "Si, aca tienes la información del centro comercial Yerba Buena Shopping y su contenido" + yerbabuenashopping
        }
        else {
            return "Si, aca tienes la información del centro comercial Portal Tucuman y su contenido" + portaltucuman
        }
    }
    else {
        return "no encontre información asociada al respecto"
    }
}

function getRestaurants() {
    return `
    Gastronomia en Yerba Buena:

    *Quates
    Restaurante de comida mexicana.
    Menú:Tacos, Quesadillas. Cocteles mexicanos. Tequila, Margaritas.
    Excelente atención y comida. El mozo Mario, pendiente de lo que necesitábamos, nos
    recomendaba tragos y comida.
    La limonada con jengibre y menta es muy buena y refrescante.
    Los tacos son muy abundantes, y cómo variedad de salsas para agregar. La verdad,
    todo muy bueno.
    Direccion: Avenida Juan Domingo Peron Open Plaza

    *El mariachi
    Comida mexicana. comida española. restaurante familiar.
    rabas, tacos, paella, arroz, comidas veganas y vegetarianas.
    abierto de lunes a lunes desde las 18hs.
    WhatsApp: https://wa.link/g52vek
    como llegar: https://goo.gl/maps/rktc1dKxuzPyzHdv8

    *Pizzeria Legui - La original
    Variedades en Pizzas
    Dirección; Av Aconquija 153
    WhatsApp: https://wa.link/g52vek

    *Lo del Chato 
    Bar y Envíos a domicilio.
    Servicios que brindan en comidas: Empanadas, Pizzas, Sándwiches de todo tipo.
    Servicios que brindan en bebidas: Coctelería y tragos. Cervezas nacionales e
    importadas.
    WhatsApp https://wa.link/g52vek

    *Pizza 8 - Pizzeria
    Pizzas y empanadas
    Dirección: Av. Aconquija 2129.
    Envíos a domicilio.
    WhatsApp https://wa.link/g52vek
    Facebook: https://www.facebook.com/guiaelasesor/?locale=es_LA

    *PAQUITO’S
    carnes, parrillada, empanadas, comida regionales.
    DIRECCIÓN: Av. Aconquija 1832 - Galeria Edelweis
    TELÉFONO: 4250450
    WhtasApp: https://wa.link/g52vek

    Cafeterias y panaderias en Yerba Buena:

    *Casapan
    Panadería, Cafetería.
    Envíos a domicilio.
    WIFI gratuito en salón.
    horarios de 9 a 19 hs todos los dias.
    Dirección: Av Aconquija 142
    Tel: 435 2685 - 435 4083
    pedidos al WhatsApp https://wa.link/g52vek
    Servicio que brinda: Desayunos, meriendas, cafe, panaderia, dulces, tortas y tartas,
    sanguchitos. sandwiches.

    *Aló Tienda & Cafe Yerba Buena
    Consumo en el lugar
    Dirección: Av. Aconquija 1591 Local 13
    Horarios: de 08 a 22 hs todos los días
    Servicio que brinda: Desayunos, meriendas, café, panadería, dulces, tortas y tartas.
    Cómo llegar: https://goo.gl/maps/qC2diZKaoDwd5o1QA
    `
}

function getRestaurant(name) {
    if (name) {
        let arrayArguments = Object.values(name)
        let restaurante = arrayArguments[0].toLowerCase()



        const quates = `
        *Quates
        Restaurante de comida mexicana.
        Menú:Tacos, Quesadillas. Cocteles mexicanos. Tequila, Margaritas.
        Excelente atención y comida. El mozo Mario, pendiente de lo que necesitábamos, nos
        recomendaba tragos y comida.
        La limonada con jengibre y menta es muy buena y refrescante.
        Los tacos son muy abundantes, y cómo variedad de salsas para agregar. La verdad,
        todo muy bueno.
        Direccion: Avenida Juan Domingo Peron Open Plaza
        `
        const Mariachi = `
        *El mariachi
        Comida mexicana. comida española. restaurante familiar.
        rabas, tacos, paella, arroz, comidas veganas y vegetarianas.
        abierto de lunes a lunes desde las 18hs.
        WhatsApp: https://wa.link/g52vek
        como llegar: https://goo.gl/maps/rktc1dKxuzPyzHdv8
        `

        const PizzeriaLegui = `
        *Pizzeria Legui - La original
        Variedades en Pizzas
        Dirección; Av Aconquija 153
        WhatsApp: https://wa.link/g52vek
        `
        const Chato = `
        *Lo del Chato
        Bar y Envíos a domicilio.
        Servicios que brindan en comidas: Empanadas, Pizzas, Sándwiches de todo tipo.
        Servicios que brindan en bebidas: Coctelería y tragos. Cervezas nacionales e
        importadas.
        WhatsApp https://wa.link/g52vek
        `
        const Pizzeria8 = `
        *Pizza 8 - Pizzeria
        Pizzas y empanadas
        Dirección: Av. Aconquija 2129.
        Envíos a domicilio.
        WhatsApp https://wa.link/g52vek
        Facebook: https://www.facebook.com/guiaelasesor/?locale=es_LA
        `
        const Paquitos = `
        *PAQUITO’S
        carnes, parrillada, empanadas, comida regionales.
        DIRECCIÓN: Av. Aconquija 1832 - Galeria Edelweis
        TELÉFONO: 4250450
        WhtasApp: https://wa.link/g52vek
        `
        const casapan = `
        *Casapan
        Panadería, Cafetería.
        Envíos a domicilio.
        WIFI gratuito en salón.
        horarios de 9 a 19 hs todos los dias.
        Dirección: Av Aconquija 142
        Tel: 435 2685 - 435 4083
        pedidos al WhatsApp https://wa.link/g52vek
        Servicio que brinda: Desayunos, meriendas, cafe, panaderia, dulces, tortas y tartas,
        sanguchitos. sandwiches.
        `
        const Alo = `
        *Aló Tienda & Cafe Yerba Buena
        Consumo en el lugar
        Dirección: Av. Aconquija 1591 Local 13
        Horarios: de 08 a 22 hs todos los días
        Servicio que brinda: Desayunos, meriendas, café, panadería, dulces, tortas y tartas.
        Cómo llegar: Aló Tienda & Cafe Yerba Buena
        `

        if (restaurante.includes("quates")) {
            return "Aca te doy mas información del establecimiento " + quates
        }
        else if (restaurante.includes("mariachi")) {
            return "Aca te doy mas información del establecimiento " + Mariachi
        }
        else if (restaurante.includes("legui")) {
            return "Aca te doy mas información del establecimiento " + PizzeriaLegui
        }
        else if (restaurante.includes("chato")) {
            return "Aca te doy mas información del establecimiento " + Chato
        }
        else if (restaurante.includes("pizza 8")) {
            return "Aca te doy mas información del establecimiento " + Pizzeria8
        }
        else if (restaurante.includes("paquitos")) {
            return "Aca te doy mas información del establecimiento " + Paquitos
        }
        else if (restaurante.includes("casapan")) {
            return "Aca te doy mas información del establecimiento " + casapan
        }
        else if (restaurante.includes("alo")) {
            return "Aca te doy mas información del establecimiento " + Alo
        }
        else {
            return `
            Lo siento no he podido entender tu información 
            podrias probar siendo un poco mas especifico
            o revisando si esta correctamente escrito lo que buscas
            recuerda que estoy aqui para brindarte información
            `
        }
    }
}

function getCafeterias() {
    return `
    Cafeterias y panaderias en Yerba Buena:

    *Casapan
    Panadería, Cafetería.
    Envíos a domicilio.
    WIFI gratuito en salón.
    horarios de 9 a 19 hs todos los dias.
    Dirección: Av Aconquija 142
    Tel: 435 2685 - 435 4083
    pedidos al WhatsApp https://wa.link/g52vek
    Servicio que brinda: Desayunos, meriendas, cafe, panaderia, dulces, tortas y tartas,
    sanguchitos. sandwiches.

    *Aló Tienda & Cafe Yerba Buena
    Consumo en el lugar
    Dirección: Av. Aconquija 1591 Local 13
    Horarios: de 08 a 22 hs todos los días
    Servicio que brinda: Desayunos, meriendas, café, panadería, dulces, tortas y tartas.
    Cómo llegar: https://goo.gl/maps/qC2diZKaoDwd5o1QA
    `
}

function getAbogados() {
    return `
        Aca te doy toda la información que poseo de abogados y estudios juridicos
        espero te pueda servir

        Estudio jurídico Uno.
        Consultas al wpp https://wa.link/at4y25
    `
}
function getBellezas() {
    return `
    Salud y Belleza en Yerba Buena

    *ACASSUSO CENTRO MEDICO
    DIRECCIÓN: Acassuso 75 - Yerba Buena
    TELÉFONO: 4861872 - 3815729855
    HORARIOS DE ATENCION: 8 a 13 hs - 16 a 21 hs
    EMAIL: centromedicoacassuso@gmail.com
    
    *MENDEZ COLLADO - Centro medico
    DIRECCIÓN: Sede CENTRO: Muñecas 444
    Sede YERBA BUENA: Av. Aconquija 1015
    TELÉFONO: 3815288527 - 4316900
    Solicitar turnos a: turnos@mendezcollado.com
    En ambas sedes brindamos los servicios de Radiología, Mamografía, Densitometría,
    Tomografía, Resonancia y Ecografía.
    Horario de atención: de lunes a viernes de 7 a 22 hs y sábado de 8 a 12hs
    WEB: www.mendezcollado.com
    Contacto: https://wa.link/at4y25

    *Summer Solarium
    Centro de bronceado, Cama Solar, Belleza de manos y pies, Depilación definitiva.
    Estamos en Av. Aconquija 844
    Lun a Sáb de 10 a 21 hs.
    Instagram:Summer #Solarium (@summer_tuc) on Instagram
    https://www.instagram.com/summer_tuc/?hl=es-la
    Contacto: https://wa.link/at4y25

    *Solanas peluquería & Estetica
    Dirección: Cariola 207 Teléfono: 4356609.
    Instagram: Solanas Peluquería & Estética (@solanaspeluqueria) • Instagram photos and
    videos
    https://www.instagram.com/solanaspeluqueria/
    Contacto: https://wa.link/at4y25
    Servicios que brinda: peluqueria, salon de belleza.
    `
}
function getBelleza(name){
    if (name){
        let arrayArguments = Object.values(name)
        let salon = arrayArguments[0].toLowerCase()

        const Acassuso = `
        *ACASSUSO CENTRO MEDICO
        DIRECCIÓN: Acassuso 75 - Yerba Buena
        TELÉFONO: 4861872 - 3815729855
        HORARIOS DE ATENCION: 8 a 13 hs - 16 a 21 hs
        EMAIL: centromedicoacassuso@gmail.com
        `
        const mendez = `
        *MENDEZ COLLADO - Centro medico
        DIRECCIÓN: Sede CENTRO: Muñecas 444
        Sede YERBA BUENA: Av. Aconquija 1015
        TELÉFONO: 3815288527 - 4316900
        Solicitar turnos a: turnos@mendezcollado.com
        En ambas sedes brindamos los servicios de Radiología, Mamografía, Densitometría,
        Tomografía, Resonancia y Ecografía.
        Horario de atención: de lunes a viernes de 7 a 22 hs y sábado de 8 a 12hs
        WEB: www.mendezcollado.com
        Contacto: https://wa.link/at4y25
        
        `

        const solarium = `
        *Summer Solarium
        Centro de bronceado, Cama Solar, Belleza de manos y pies, Depilación definitiva.
        Estamos en Av. Aconquija 844
        Lun a Sáb de 10 a 21 hs.
        Instagram:Summer #Solarium (@summer_tuc) on Instagram
        https://www.instagram.com/summer_tuc/?hl=es-la
        Contacto: https://wa.link/at4y25
        `

        const solanas = `
        *Solanas peluquería & Estetica
        Dirección: Cariola 207 Teléfono: 4356609.
        Instagram: Solanas Peluquería & Estética (@solanaspeluqueria) • Instagram photos and
        videos
        https://www.instagram.com/solanaspeluqueria/
        Contacto: https://wa.link/at4y25
        Servicios que brinda: peluqueria, salon de belleza.
        `
        if(salon.includes("acassuso") || salon.includes("centro medico")){
            return "Aca esta la información del establecimiento solicitado " + Acassuso
        }
        else if (salon.includes("mendez") || salon.includes("collado")){
            return "Aca esta la información del establecimiento solicitado " + mendez
        }
        else if (salon.includes("solarium") || salon.includes("summer")){
            return "Aca esta la información del establecimiento solicitado " + solarium
        }
        else if (salon.includes("solanas") || salon.includes("peluqueria")){
            return "Aca esta la información del establecimiento solicitado " + solanas
        }
        else{
            return `
            Lo siento no he podido entender tu información 
            podrias probar siendo un poco mas especifico
            o revisando si esta correctamente escrito lo que buscas
            recuerda que estoy aqui para brindarte información
            `
        }
    }
}

function getPetShops(){
    return `
    Pet Shops
    *Cachorros
    Pet shop - Alimentos para mascotas - Servicios a domicilios.
    Dirección: Av. Belgrano 4433
    Teléfono; 4343530  
    `
}
function getInmobiliarias(){
    return `
    Inmobiliarias
    *Bernasconi
    Servicios inmobiliarios
    ventas y alquiler de propiedades
    Direccion: Centro comercial Quara
    Whatsapp: https://wa.link/at4y25
    
    `
}

function getTaxis(){
    return `
    Taxis y remises en Yerba Buena:
    *Del Rosario Remis:
    Servicio de taxi y Remis.
    Servicios empresariales. Servicios dentro y fuera de la provincia.
    Dirección: Av Aconquija 2154.
    WhtasApp: https://wa.link/g52vek

    *Maxi Taxi
    Servicio de taxi en Yerba buena.
    Direccion: Camino del peru 24
    WhatsApp: https://wa.link/g52vek
    `
}

function getEducations(){
    return `
    Educacion:
    *COLEGIO LOS ARCOS
    Nivel PRIMARIO - SECUNDARIO: Italia 2872
    DIRECCIÓN: Nivel INICIAL: Pedro Maderuelo 162
    TELÉFONO: 4255513 - 3813516035
    Contacto directo: https://wa.link/g52vek

    *Cámara de comercio de Yerba buena
    Dirección: Av. Aconquija 2343, Local 6, Galería Gala.
    Telefono: 3815694187
    WhatsApp https://wa.link/gnuboj
    Email: camaracomercioyerbabuena@hotmail.com
    Facebook: Camaradecomercioyerbabuena
    https://www.facebook.com/camaradecomerciodeyerbabuena/
    Instagram: Cámara de Comercio Yerba Buena (@camaradecomercio.yb) on Instagram
    https://www.instagram.com/camaradecomercio.yb/?hl=es

    *Municipalidad de Yerba Buena
    Dirección: Av. Aconquija 1991
    Cómo llegar: Municipality of Yerba Buena
    https://goo.gl/maps/2FyM6yn74XD8Xbou7
    Sitio web: Municipalidad de Yerba Buena
    https://www.yerbabuena.gob.ar/
    `
}

function getEducation(name){
    if (name){
        let arrayArguments = Object.values(name)
        let institucion = arrayArguments[0].toLowerCase()

        const arcos = `
        *COLEGIO LOS ARCOS
        Nivel PRIMARIO - SECUNDARIO: Italia 2872
        DIRECCIÓN: Nivel INICIAL: Pedro Maderuelo 162
        TELÉFONO: 4255513 - 3813516035
        Contacto directo: https://wa.link/g52vek
        `

        const camaraC = `
        *Cámara de comercio de Yerba buena
        Dirección: Av. Aconquija 2343, Local 6, Galería Gala.
        Telefono: 3815694187
        WhatsApp https://wa.link/gnuboj
        Email: camaracomercioyerbabuena@hotmail.com
        Facebook: Camaradecomercioyerbabuena
        https://www.facebook.com/camaradecomerciodeyerbabuena/
        Instagram: Cámara de Comercio Yerba Buena (@camaradecomercio.yb) on Instagram
        https://www.instagram.com/camaradecomercio.yb/?hl=es
        `

        const Municipalidad = `
        *Municipalidad de Yerba Buena
        Dirección: Av. Aconquija 1991
        Cómo llegar: Municipality of Yerba Buena
        https://goo.gl/maps/2FyM6yn74XD8Xbou7
        Sitio web: Municipalidad de Yerba Buena
        https://www.yerbabuena.gob.ar/
        `
        
        if (institucion.includes("colegio") || institucion.includes("arcos")){
            return "Aca la información al respecto de la institución nombrada " + arcos
        }
        else if (institucion.includes("camara") || institucion.includes("comercio")){
            return "Aca la información al respecto de la institución nombrada " + camaraC
        }
        else if (institucion.includes("municipalidad")){
            return "Aca la información al respecto de la institución nombrada " + Municipalidad
        }
        else {
            return `
            Lo siento no he podido entender tu información 
            podrias probar siendo un poco mas especifico
            o revisando si esta correctamente escrito lo que buscas
            recuerda que estoy aqui para brindarte información
            `
        }
    }
}