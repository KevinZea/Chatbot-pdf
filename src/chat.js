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
    {
        "name": "getInformacionTuristica",
        "description": "Informacion Turistica de la ciudad de yerba buena y San Javier la informacion del lugar",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "getInformacionTuristicaPartes",
        "description": "Informacion turistica de la ciudad de yerba buena la informacion que se brinda es gastronomia, actividades, clima, ubicacion",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre de la informacion que quiere consultar ya sea gastronomia, ubicacion, clima o actividades"
                }
            }
        }
    },
    {
        "name": "TurismoAventura",
        "description": "Informacion de actividades aventura Turisticas de la ciudad de yerba buena",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "TurismoAventuraPartes",
        "description": "Informacion de alguna actividad de aventura Turisticas de la ciudad de yerba buena",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre de la actividad de aventura turistica a consultar"
                }
            }
        }
    },
    {
        "name": "EscenariosNaturales",
        "description": "Informacion de parques o escenarios naturales de la ciudad de yerba buena o sus alrededores",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "EscenarioNatural",
        "description": "Informacion de algun lugar natural o escenarios naturales como parque o jardines de la ciudad de yerba buena",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre del parque o lugar o escenario natual turistico a consultar de la ciudad de yerba buena"
                }
            }
        }
    },
    {
        "name": "monumentos",
        "description": "Informacion de monumentos historicos o religiosos de la ciudad de yerba buena o sus alrededores",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "monumento",
        "description": "Informacion de un monumento historico o religioso de la ciudad de yerba buena o sus alrededores",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre del monumento que desea consultar de la ciudad de yerba buena"
                }
            }
        }
    },
    {
        "name": "senderismo",
        "description": "Informacion de actividades de senderismo de la ciudad de yerba buena o sus alrededores",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "senderos",
        "description": "Informacion de un sendero turistico de la ciudad de yerba buena o sus alrededores",
        parameters: {
            type: "object",
            properties: {
                nombre: {
                    type: "string",
                    description: "nombre del sendero que desea consultar de la ciudad de yerba buena"
                }
            }
        }
    },
    {
        "name": "informacionOficial",
        "description": "Informacion oficial de la ciudad de yerba buena",
        parameters: {
            type: "object",
            properties: {}
        }
    },
    {
        "name": "informacionSanJavier",
        "description": "Informacion oficial de la ciudad de San Javier",
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
        // console.log(completion)
        if (completion.data.choices[0].message.content !== null) {
            arrayMessages.push(completion.data.choices[0].message)
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
                arrayMessages.push(objResponse)
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
                arrayMessages.push(objResponse)
                return objResponse
            }

        }
    } catch (error) {
        return error
    }
}

function getAsesor() {
    const response = `
    El Asesor es un directorio virtual de la ciudad de Yerba Buena.
    Contacto de El Asesor: "https://wa.link/at4y25"
    Teléfono: 3815076319
    
    `
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
function getBelleza(name) {
    if (name) {
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
        if (salon.includes("acassuso") || salon.includes("centro medico")) {
            return "Aca esta la información del establecimiento solicitado " + Acassuso
        }
        else if (salon.includes("mendez") || salon.includes("collado")) {
            return "Aca esta la información del establecimiento solicitado " + mendez
        }
        else if (salon.includes("solarium") || salon.includes("summer")) {
            return "Aca esta la información del establecimiento solicitado " + solarium
        }
        else if (salon.includes("solanas") || salon.includes("peluqueria")) {
            return "Aca esta la información del establecimiento solicitado " + solanas
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

function getPetShops() {
    return `
    Pet Shops
    *Cachorros
    Pet shop - Alimentos para mascotas - Servicios a domicilios.
    Dirección: Av. Belgrano 4433
    Teléfono; 4343530  
    `
}
function getInmobiliarias() {
    return `
    Inmobiliarias
    *Bernasconi
    Servicios inmobiliarios
    ventas y alquiler de propiedades
    Direccion: Centro comercial Quara
    Whatsapp: https://wa.link/at4y25
    
    `
}

function getTaxis() {
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

function getEducations() {
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

function getEducation(name) {
    if (name) {
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

        if (institucion.includes("colegio") || institucion.includes("arcos")) {
            return "Aca la información al respecto de la institución nombrada " + arcos
        }
        else if (institucion.includes("camara") || institucion.includes("comercio")) {
            return "Aca la información al respecto de la institución nombrada " + camaraC
        }
        else if (institucion.includes("municipalidad")) {
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
function getInformacionTuristica() {
    return `
    Yerba Buena se ubica estratégicamente a 10 minutos de la capital de Tucumán y es paso
    obligado para acceder a San Javier.
    Es la zona residencial de Tucumán por excelencia, en donde está ubicada la mayoría de los
    countries, barrios cerrados e importantes casonas.
    Funciona como centro de vida social de un importante sector de la población de San Miguel
    de Tucumán y de sus propios habitantes.
    Clima: es subtropical con veranos cálidos y lluviosos, inviernos templados y húmedos y
    primaveras cálidas y secas. Es un lugar ideal para vacacionar prácticamente durante todo el
    año.

    Gastronomía: cuenta con una gran variedad de gastronomía, desde restaurantes gourmets
    hasta establecimientos más sencillos como cafés.
    Atractivos: Cuenta con una cuantiosa variedad de atractivos naturales y arquitectónicos.
    Se encuentra a 1h 10 min del Aeropuerto Benjamín Matienzo.
    Población: Cuenta con un crecimiento del 5% anual, hoy en día habitan aproximadamente
    110.000 habitantes.

    Detalles de la Actividades:
    Yerba Buena Tucumán, Centro turístico en constante expansión, donde la infraestructura
    hotelera crece constantemente para recibir a los turistas que deseen combinar la
    naturaleza, tranquilidad y cercanía con la capital tucumana
    Durante el día Yerba Buena se transforma en un lugar repleto de actividades deportivas
    como mountain bike, trekking, cabalgatas, parapente y golf, entre otras.
    También se presentan opciones gastronómicas, con la característica comida regional como
    así también contemporánea y vanguardista.
    Por las noches los bares, pubs y cervecerías abren sus puertas para recibir a todos aquellos
    que deseen pasar un tiempo con amigos, tomar unos tragos y divertirse.
    En Yerba Buena podremos realizar múltiples actividades, la mayoría de ellas tendrán que
    ver con actividades al aire libre, en contacto con la naturaleza y sus inmensos atractivos.
    `
}

function getInformacionTuristicaPartes(name) {
    if (name) {
        let arrayArguments = Object.values(name)
        let info = arrayArguments[0].toLowerCase()

        const ubicacion = `
        Yerba Buena se ubica estratégicamente a 10 minutos de la capital de Tucumán y es paso
        obligado para acceder a San Javier.
        Es la zona residencial de Tucumán por excelencia, en donde está ubicada la mayoría de los
        countries, barrios cerrados e importantes casonas.
        Funciona como centro de vida social de un importante sector de la población de San Miguel
        de Tucumán y de sus propios habitantes
        `

        const clima = `
        Clima: es subtropical con veranos cálidos y lluviosos, inviernos templados y húmedos y
        primaveras cálidas y secas. Es un lugar ideal para vacacionar prácticamente durante todo el
        año.
        
        `
        const gastronomia = `
        Gastronomía: cuenta con una gran variedad de gastronomía, desde restaurantes gourmets
        hasta establecimientos más sencillos como cafés.
        Atractivos: Cuenta con una cuantiosa variedad de atractivos naturales y arquitectónicos.
        Se encuentra a 1h 10 min del Aeropuerto Benjamín Matienzo.
        Población: Cuenta con un crecimiento del 5% anual, hoy en día habitan aproximadamente
        110.000 habitantes.
        `
        const actividades = `
        Detalles de la Actividades:
        Yerba Buena Tucumán, Centro turístico en constante expansión, donde la infraestructura
        hotelera crece constantemente para recibir a los turistas que deseen combinar la
        naturaleza, tranquilidad y cercanía con la capital tucumana
        Durante el día Yerba Buena se transforma en un lugar repleto de actividades deportivas
        como mountain bike, trekking, cabalgatas, parapente y golf, entre otras.
        También se presentan opciones gastronómicas, con la característica comida regional como
        así también contemporánea y vanguardista.
        Por las noches los bares, pubs y cervecerías abren sus puertas para recibir a todos aquellos
        que deseen pasar un tiempo con amigos, tomar unos tragos y divertirse.
        En Yerba Buena podremos realizar múltiples actividades, la mayoría de ellas tendrán que
        ver con actividades al aire libre, en contacto con la naturaleza y sus inmensos atractivos.
        
        `
        if (info.includes("ubicacion") || info.includes("zona")) {
            return ubicacion
        }
        else if (info.includes("clima") || info.includes("tropical")) {
            return clima
        }
        else if (info.includes("gastronomia") || info.includes("comida")) {
            return gastronomia
        }
        else if (info.includes("actividades") || info.includes("detalles")) {
            return actividades
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

function TurismoAventura() {
    return `
    *Turismo Aventura desde Yerba Buena
    Para los amantes del turismo aventura, Yerba Buena se presenta como un lugar cercano a
    la capital tucumana que nos permite realizar actividades turísticas diferentes, no solo podrán
    recorrer un destino rico en su arquitectura sino que también podrán disfrutar del contacto
    con la naturaleza y de actividades para toda la familia.

    *DEPORTES DE COMPETENCIA: Mountain Bike, Enduro, Golf, Rugby y Jockey son
    algunos de los deportes que se practican en nuestra ciudad y participan todos los años de
    competencias a nivel mundial, como el ya característico trasmontaña que se realiza en
    nuestros cerros.

    *PARAPENTE: Tanto para lanzamientos profesionales, como personas que desean
    aprender sobre el vuelo, la Sierra San Javier es el punto de encuentro para el despegue.
    Loma Bola suele ser un punto panorámico y de encuentro inigualable desde el cual se
    pueden ver la belleza del paisaje y los parapentistas que alzan vuelo.

    *TREKKING: Esta actividad es la elegida por los turistas que visitan Yerba Buena , donde se
    desarrollan Caminatas tranquilas observando la naturaleza desde un aspecto más que
    cercano y tangible y desde hace un par de años la ya característica” Caminata Nocturna
    Lunita Tucumán”.

    *CABALGATAS: Una opción para recorrer el pedemonte de la Yunga son las cabalgatas
    guiadas por expertos de la zona. Diferentes programas organizados de acuerdo a las
    posibilidades de cada grupo: cabalgatas nocturnas, de día completo o medio día.

    *MOUNTAIN BIKE: Se puede practicar las modalidades, descenso, cross country y rally
    trasmontaña. En Horco Molle dentro del Parque Sierra San Javier hay un circuito señalizado
    entre bosques y por el valle de Potrerillo atraviesa cada año, el internacional “rally
    trasmontaña” de Mountain bike, que se larga desde San Javier. Hay una senda de descanso
    desde San Javier que llega a la Rinconada.

    *GOLF: La mayor cantidad de canchas de Golf de Tucumán se hallan en Yerba Buena, por
    lo que se puede optar entre diversos links que se ofrecen tradicionales y destacados clubes
    de la zona.

    *RUGBY Y HOCKEY: Los principales clubes desarrollan sus actividades en esta ciudad con
    campeonatos a nivel nacional.
    
    `
}

function TurismoAventuraPartes(name) {
    if (name) {
        let arrayArguments = Object.values(name)
        let aventura = arrayArguments[0].toLowerCase()

        const deportes = `
        *DEPORTES DE COMPETENCIA: Mountain Bike, Enduro, Golf, Rugby y Jockey son
        algunos de los deportes que se practican en nuestra ciudad y participan todos los años de
        competencias a nivel mundial, como el ya característico trasmontaña que se realiza en
        nuestros cerros.
        
        `

        const parapente = `
        *PARAPENTE: Tanto para lanzamientos profesionales, como personas que desean
        aprender sobre el vuelo, la Sierra San Javier es el punto de encuentro para el despegue.
        Loma Bola suele ser un punto panorámico y de encuentro inigualable desde el cual se
        pueden ver la belleza del paisaje y los parapentistas que alzan vuelo.
        
        `

        const trekking = `
        *TREKKING: Esta actividad es la elegida por los turistas que visitan Yerba Buena , donde se
        desarrollan Caminatas tranquilas observando la naturaleza desde un aspecto más que
        cercano y tangible y desde hace un par de años la ya característica” Caminata Nocturna
        Lunita Tucumán”.
        `
        const cabalgatas = `
        *CABALGATAS: Una opción para recorrer el pedemonte de la Yunga son las cabalgatas
        guiadas por expertos de la zona. Diferentes programas organizados de acuerdo a las
        posibilidades de cada grupo: cabalgatas nocturnas, de día completo o medio día.
        
        `
        const mountain = `
        *MOUNTAIN BIKE: Se puede practicar las modalidades, descenso, cross country y rally
        trasmontaña. En Horco Molle dentro del Parque Sierra San Javier hay un circuito señalizado
        entre bosques y por el valle de Potrerillo atraviesa cada año, el internacional “rally
        trasmontaña” de Mountain bike, que se larga desde San Javier. Hay una senda de descanso
        desde San Javier que llega a la Rinconada.
        
        `
        const golf = `
        *GOLF: La mayor cantidad de canchas de Golf de Tucumán se hallan en Yerba Buena, por
        lo que se puede optar entre diversos links que se ofrecen tradicionales y destacados clubes
        de la zona.
        
        `
        const Rugby = `
        *RUGBY Y HOCKEY: Los principales clubes desarrollan sus actividades en esta ciudad con
        campeonatos a nivel nacional.
        
        `

        if (aventura.includes("deportes") || aventura.includes("compentencia")) {
            return "Yerba buena presenta diferentes actividades de aventura como " + deportes
        }
        else if (aventura.includes("parapente")) {
            return "Yerba buena presenta diferentes actividades de aventura como " + parapente
        }
        else if (aventura.includes("trekking")) {
            return "Yerba buena presenta diferentes actividades de aventura como " + trekking
        }
        else if (aventura.includes("cabalgatas") || aventura.includes("cabalgata")) {
            return "Yerba buena presenta diferentes actividades de aventura como " + cabalgatas
        }
        else if (aventura.includes("mountain") || aventura.includes("bike") || aventura.includes("montaña")) {
            return "Yerba buena presenta diferentes actividades de aventura como " + mountain
        }
        else if (aventura.includes("golf")) {
            return "Yerba buena presenta diferentes actividades de aventura como " + golf
        }
        else if (aventura.includes("rugby") || aventura.includes("hockey")) {
            return "Yerba buena presenta diferentes actividades de aventura como " + Rugby
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

function EscenariosNaturales() {
    return `
    Yerba Buena Escenario Natural:
    La naturaleza ha dotado a esta región de paisajes hermosos para disfrutar en paseos
    recreativos, actividades deportivas y de esparcimiento. Este es el motivo por el que se
    conoce a Yerba Buena con el nombre de “Ciudad Jardín”.

    * Parque Sierra San Javier: La zona aledaña a Yerba Buena y comprendida dentro del
    Parque Sierra San Javier, cuenta cosn senderos diferenciados por duración y dificultad, para
    abarcar e incluir a la mayoría de las personas deseosas de adentrarse en la vegetación
    autóctona. Con la posibilidad de pasar el día en familia, áreas para acampar, picnic y áreas
    de río o lagunas internas.

    *Jardín Botánico: El Jardín Botánico Horco Molle está ubicado en la Reserva Experimental
    Horco Molle, y ambos dependen de la Facultad de Ciencias Naturales e IML – Universidad
    Nacional de Tucumán.
    La creación de un Jardín botánico estuvo presente desde el año 1999 por parte de las
    autoridades de nuestra universidad, pero su existencia y consolidación se está realizando
    luego de quince años, con el trabajo constante de docentes e investigadores de nuestra
    unidad académica.
    · Un espacio de recuperación constante de la selva pedemontana, donde a partir de la
    producción e investigación científica se pueda generar de forma paulatina un proceso de
    restauración de la misma. La restauración ecológica es el fundamento donde cada acción
    se enmarca en un contexto técnico-científico y social.
    El jardín botánico horco molle recibe permanentemente delegaciones estudiantiles, ONGS,
    centros de día, entre otras instituciones que buscan sorprenderse y aprender mucho más
    acerca de las riquezas que existen en nuestras yungas tucumanas
    Reserva Horco Molle (visitas guiadas)
    https://goo.gl/maps/p1T6gUQRiXBZnaSq8
    Horario: 09:00 a 19:00 – todos los días
    Jardín Botánico Horco Molle (visitas guiadas)
    Horario: 09:00 a 19:00 – todos los días
    https://goo.gl/maps/hUjDW3BnxJ1H7RWL9


    *Parque Percy Hill: Uno de los últimos reductos de la Selva Pedemontana que se desarrolla
    en Tucumán están enmarcados dentro del Parque Percy Hill. Podremos recorrer hoy,
    apenas 2,2 hectáreas de un ecosistema que supo tener un tamaño tal que abarcaba la
    actual Capital y Yerba Buena.
    Gracias al espacio rescatado por el inglés Percy Hill, en honor al cual se nombra este
    parque, podremos conocer un ambiente naturalmente selvático; donde los colosales árboles
    son los dueños de cada rincón y donde la tupida vegetación simulan baldosas a nuestro
    paso.
    Ubicación: calle Perú 1100 – altura Avenida Aconquija 1100
    https://goo.gl/maps/fHTwgYfugfyzgnvLA
    Horario: 08:00 a 18:00 todos los días
    `
}

function EscenarioNatural(name) {
    if (name) {
        let arrayArguments = Object.values(name)
        let parque = arrayArguments[0].toLowerCase()

        const parqueSierra = `
        * Parque Sierra San Javier: La zona aledaña a Yerba Buena y comprendida dentro del
        Parque Sierra San Javier, cuenta con senderos diferenciados por duración y dificultad, para
        abarcar e incluir a la mayoría de las personas deseosas de adentrarse en la vegetación
        autóctona. Con la posibilidad de pasar el día en familia, áreas para acampar, picnic y áreas
        de río o lagunas internas.
        
        `
        const jardin = `
        *Jardín Botánico: El Jardín Botánico Horco Molle está ubicado en la Reserva Experimental
        Horco Molle, y ambos dependen de la Facultad de Ciencias Naturales e IML – Universidad
        Nacional de Tucumán.
        La creación de un Jardín botánico estuvo presente desde el año 1999 por parte de las
        autoridades de nuestra universidad, pero su existencia y consolidación se está realizando
        luego de quince años, con el trabajo constante de docentes e investigadores de nuestra
        unidad académica.
        · Un espacio de recuperación constante de la selva pedemontana, donde a partir de la
        producción e investigación científica se pueda generar de forma paulatina un proceso de
        restauración de la misma. La restauración ecológica es el fundamento donde cada acción
        se enmarca en un contexto técnico-científico y social.
        El jardín botánico horco molle recibe permanentemente delegaciones estudiantiles, ONGS,
        centros de día, entre otras instituciones que buscan sorprenderse y aprender mucho más
        acerca de las riquezas que existen en nuestras yungas tucumanas

        Reserva Horco Molle (visitas guiadas)
        https://goo.gl/maps/p1T6gUQRiXBZnaSq8
        Horario: 09:00 a 19:00 – todos los días
        Jardín Botánico Horco Molle (visitas guiadas)
        Horario: 09:00 a 19:00 – todos los días
        https://goo.gl/maps/hUjDW3BnxJ1H7RWL9

        `
        const parquePercy = `
        *Parque Percy Hill: Uno de los últimos reductos de la Selva Pedemontana que se desarrolla
        en Tucumán están enmarcados dentro del Parque Percy Hill. Podremos recorrer hoy,
        apenas 2,2 hectáreas de un ecosistema que supo tener un tamaño tal que abarcaba la
        actual Capital y Yerba Buena.
        Gracias al espacio rescatado por el inglés Percy Hill, en honor al cual se nombra este
        parque, podremos conocer un ambiente naturalmente selvático; donde los colosales árboles
        son los dueños de cada rincón y donde la tupida vegetación simulan baldosas a nuestro
        paso.

        Ubicación: calle Perú 1100 – altura Avenida Aconquija 1100
        https://goo.gl/maps/fHTwgYfugfyzgnvLA
        Horario: 08:00 a 18:00 todos los días
        `
        if (parque.includes("parque sierra") || parque.includes("parque san javier")) {
            return parqueSierra
        }
        else if (parque.includes("jardin") || parque.includes("botanico")) {
            return jardin
        }
        else if (parque.includes("percy") || parque.includes("hill")) {
            return parquePercy
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

function monumentos() {
    return `
    Estos son los monumentos mas destacados de la ciudad de Yerba Buena

    *EL CRISTO: Comenzamos nuestro recorrido por el boulevard del cruce Av. Aconquija y
    Camino del Perú, allí encontraremos la obra de Santiago Chiérico. La imagen del Cristo y su
    cruz, creada en base al modelo original que se crearía para colocar en la Cordillera de los
    Andes (proyecto inconcluso).
    Luego, podremos continuar el recorrido por alguno de los tantos puntos de interés religioso:
    - Parroquia de San José: Camino del Perú n°1351 y fundada en 1931.
    - Capilla María del Rosario de San Nicolás: ubicada en la intersección de las calles Salas y
    Valdez. Creada originalmente en el año 1988, supo ser una gruta construida por un vecino
    que cumplía una promesa.
    Hacia 1995 pudo transformarse la pequeña gruta en la actual capilla y a partir de ese
    momento se realizan mejoras permanentes gracias al aporte de la comunidad.
    - Capilla Ntra. Señora del Carmen: ubicada en la Plaza Vieja de La Rinconada, con más de
    170 años de historia, la capilla fue construida durante la década de 1840
    - Parroquia de San José: Camino del Perú n°1351
    - Oratorio Sagrado Corazón Eucarístico de Jesús: en Av. Aconquija al 400, su construcción
    comenzó en el año 2004.

    *LA VIRGENCITA: Es una imagen de María Auxiliadora réplica de la misma imagen
    ubicada en el Colegio homónimo en San Miguel de Tucumán. Ubicada en Av. Aconquija al
    800.

    *CRISTO BENDICENTE DE SAN JAVIER:
    Obra del artista tucumano Juan Carlos Iramain, ubicado en la cumbre del Cerro San Javier.
    Impecables tanto la fotografía que podrán obtener del Cristo como la vista panorámica que
    obtendrán desde lo alto del Cerro.
    Parque Provincial Aconquija
    Se trata de una Reserva Forestal de 500 has creada en 1936, constituyendo en ese
    momento la 1° área natural provincial protegida a nivel nacional. De esta forma Tucumán se
    convertía en la primer provincia que preservaba un área natural, su ecosistema y la
    biodiversidad.
    La función del Parque es la de preservar una franja de Yungas, complementando las áreas
    naturales de Horco Molle y Parque Sierra San Javier. Actividades recreativas como pesca
    deportiva, canotaje, trekking, montañismo, paseos en bici y senderismo.
    Reserva Experimental Horco Molle
    Reserva creada en 1986, cuenta con un área protegida de 200 has de Yungas o Selva
    Subtropical de Montaña.
    El objetivo principal de su creación es la de preservar y mostrar al público la flora y fauna
    autóctona, aparte de conformar el área de laboratorio de campo (investigación y docencia)
    de la Facultad de Ciencias Naturales y el Instituto Lillo.
    También está destinado para que los turistas, niños de escuelas y colegios, ciudadanos en
    general puedan pasar el día y conocer la flora y fauna característica de la región. Poseen
    asadores y lugares para acampar.

    Centro de Interpretación Cristo Bendicente San Javier
    Horario: 09:30 a 18:20
    https://goo.gl/maps/mXUAmAr8krW5dQFP9
    `
}

function monumento(name) {
    if (name) {
        let arrayArguments = Object.values(name)
        let monumento = arrayArguments[0].toLowerCase()

        const cristo = `
        *EL CRISTO: Comenzamos nuestro recorrido por el boulevard del cruce Av. Aconquija y
        Camino del Perú, allí encontraremos la obra de Santiago Chiérico. La imagen del Cristo y su
        cruz, creada en base al modelo original que se crearía para colocar en la Cordillera de los
        Andes (proyecto inconcluso).
        Luego, podremos continuar el recorrido por alguno de los tantos puntos de interés religioso:
        - Parroquia de San José: Camino del Perú n°1351 y fundada en 1931.
        - Capilla María del Rosario de San Nicolás: ubicada en la intersección de las calles Salas y
        Valdez. Creada originalmente en el año 1988, supo ser una gruta construida por un vecino
        que cumplía una promesa.
        Hacia 1995 pudo transformarse la pequeña gruta en la actual capilla y a partir de ese
        momento se realizan mejoras permanentes gracias al aporte de la comunidad.
        - Capilla Ntra. Señora del Carmen: ubicada en la Plaza Vieja de La Rinconada, con más de
        170 años de historia, la capilla fue construida durante la década de 1840
        - Parroquia de San José: Camino del Perú n°1351
        - Oratorio Sagrado Corazón Eucarístico de Jesús: en Av. Aconquija al 400, su construcción
        comenzó en el año 2004.
        
        `
        const virgen = `
        *LA VIRGENCITA: Es una imagen de María Auxiliadora réplica de la misma imagen
        ubicada en el Colegio homónimo en San Miguel de Tucumán. Ubicada en Av. Aconquija al
        800.
        
        `
        const cristoBendice = `

        *CRISTO BENDICENTE DE SAN JAVIER:
        Obra del artista tucumano Juan Carlos Iramain, ubicado en la cumbre del Cerro San Javier.
        Impecables tanto la fotografía que podrán obtener del Cristo como la vista panorámica que
        obtendrán desde lo alto del Cerro.
        Parque Provincial Aconquija
        Se trata de una Reserva Forestal de 500 has creada en 1936, constituyendo en ese
        momento la 1° área natural provincial protegida a nivel nacional. De esta forma Tucumán se
        convertía en la primer provincia que preservaba un área natural, su ecosistema y la
        biodiversidad.
        La función del Parque es la de preservar una franja de Yungas, complementando las áreas
        naturales de Horco Molle y Parque Sierra San Javier. Actividades recreativas como pesca
        deportiva, canotaje, trekking, montañismo, paseos en bici y senderismo.
        Reserva Experimental Horco Molle
        Reserva creada en 1986, cuenta con un área protegida de 200 has de Yungas o Selva
        Subtropical de Montaña.
        El objetivo principal de su creación es la de preservar y mostrar al público la flora y fauna
        autóctona, aparte de conformar el área de laboratorio de campo (investigación y docencia)
        de la Facultad de Ciencias Naturales y el Instituto Lillo.
        También está destinado para que los turistas, niños de escuelas y colegios, ciudadanos en
        general puedan pasar el día y conocer la flora y fauna característica de la región. Poseen
        asadores y lugares para acampar.
        
        `
        if (monumento.includes("cristo")) {
            return "estos son los monumentos relacionados a tu busqueda" + cristo + cristoBendice
        }
        else if (monumento.includes("virgencita") || monumento.includes("virgen")) {
            return virgen
        }
    }
}
function senderismo() {
    return `
    Para los amantes del turismo aventura, Yerba Buena se presenta como un lugar cercano a
    la capital tucumana que nos permite realizar actividades turísticas diferentes, no solo podrán
    recorrer un destino rico en su arquitectura sino que también podrán disfrutar del contacto
    con la naturaleza y de actividades para toda la familia.
    Conocida como “Ciudad Jardín”, a tan sólo 12 kilómetros de San Miguel de Tucumán, crece
    año tras año combinando el aire puro de la cercanía del cerro con la movida de bares, pubs,
    shoppings y restaurantes.
    *La naturaleza ha dotado a esta región de paisajes hermosos para disfrutar de paseos
    recreativos, actividades deportivas y de esparcimiento.
    Los turistas podrán disfrutar de actividades como mountain bike, trekking, senderismo y
    cabalgatas.
    Centros comerciales, bares, pubs y discotecas, sedes bancarias, restaurantes de todo tipo y
    alojamientos, entre otros, han hecho que Yerba Buena sea un destino destacado en la
    provincia de Tucuman.
    *Un paseo imperdible en Yerba Buena, es la Reserva de Horco Molle perteneciente a la
    Universidad Nacional de Tucumán. Quien la visite podrá conocer especies autóctonas de
    flora y fauna. La reserva es ideal para compartir un día en familia; cuenta con merenderos,
    quinchos, asadores y sanitarios.
    Dentro de la Reserva de Horco Molle se encuentra el Jardín Botánico Horco Molle.
    *Otro atractivo de la “Ciudad Jardín” es el Parque Percy Hill, donde el visitante podrá
    conocer más de 80 especies de aves en una magnífica porción de las yungas, la selva
    tucumana.
    *Sendero El Funicular: Ubicado en la Sierra de San Javier, el sendero El Funicular es uno
    de los más visitados en las cercanías de la ciudad de San Miguel de Tucumán. El sendero
    inicia en Horco Molle, se encuentra señalizado y puede combinarse con otros dos senderos
    para hacer un recorrido más amplio o circular. También cuenta con carteles informativos que
    cuentan la historia del antiguo ferrocarril y datos de algunas de las especies de flora que es
    posible encontrar. Es una excelente manera de disfrutar de la naturaleza que forma el
    ecosistema de las yungas.
    *El sendero Puerta del Cielo: Ubicado en Horco Molle, es considerado uno de los más
    lindos de Tucumán. Se sumerge en la naturaleza a través de un abundante bosque y
    asciende por las colinas que forman parte de la Sierra de San Javier. Su dificultad es
    moderada, sin embargo, la humedad puede hacer que la caminata se sienta más pesada.
    En épocas lluviosas, también hay bastante barro. Desde la cima se tienen lindas vistas,
    especialmente de la ciudad de San Miguel de Tucumán.
    La duración del circuito es de una hora y treinta minutos aproximadamente. Llevar agua
    abundante es necesario.
    
    `
}

function senderos(name) {
    if (name) {
        let arrayArguments = Object.values(name)
        let sendero = arrayArguments[0].toLowerCase()

        const Funicular = `
        *SENDERO EL FUNICULAR: Inmerso en la yunga tucumana y mimetizado con la
        vegetación abundante del lugar. El recorrido comprende parte de lo que supo ser el
        proyecto de conexión San Javier - Horco Molle.
        La obra se basaba en la construcción de una red ferroviaria eléctrica de 3km y 6 viaductos
        que salvarían los desniveles de la geografía y conectarían 2 sectores universitarios
        importantes del Circuito Yungas.
        El trekking comprende un trayecto ida y vuelta de 5 horas aproximadas y se puede arribar
        hasta el 2° viaducto, donde se encuentra la construcción abandonada del funicular.
        `
        const anta =`
        *SENDERO ANTA YACU: Un trayecto de dificultad menor y una duración aproximada de 1
        hora y media       
        `
        const yungas = `
        *SENDERO LAS YUNGAS: Un recorrido sin dificultad, a través del cual podrán conocer el
        interior de la selva basal característica que rodea la Universidad de Horco Molle y el Arroyo
        Las Cañas.                
        `
        const cascada = `
        *SENDERO LA CASCADA: Junto al trayecto del Río Los Noques realizaremos nuestra
        caminata, hasta arribar a un salto de agua natural que da nombre a dicho sendero.               
        `
        const puerta = `
        *SENDERO PUERTA DEL CIELO: En este recorrido se conocerán los 2 estratos selváticos
        que constituyen la Yunga Tucumana
        • selva basal (hasta los 800 m.s.n.m)
        • selva de Mietáceas (hasta los 1200 m.s.n.m)
        En dicho trayecto podrán acceder a puntos panorámicos desde los cuales se observa la
        ciudad de San Miguel de Tucumán en su totalidad. El recorrido total abarca 3 horas
        salvando una distancia de 2 kms., hasta arribar a la localidad de San Javier.
        `
        const informacion = `
        Jardín Botánico Parque Percy Hill
        Ubicación: calle Perú 1100 – altura Avenida Aconquija 1100
        https://goo.gl/maps/fHTwgYfugfyzgnvLA
        Horario: 08:00 a 18:00 todos los días

        Reserva Horco Molle (visitas guiadas)
        https://goo.gl/maps/p1T6gUQRiXBZnaSq8
        Horario: 09:00 a 19:00 – todos los días

        Jardín Botánico Horco Molle (visitas guiadas)
        Horario: 09:00 a 19:00 – todos los días
        https://goo.gl/maps/hUjDW3BnxJ1H7RWL9

        Senderos “Puerta del Cielo” y “El Funicular”:
        Horarios: 9:00 a 18:00 hs. Sin Guiado
        https://goo.gl/maps/wvR9pGheBxfSDFer9

        Sendero Cascada del Río Noque – Cerro San Javier
        Horario: 09:00 a 18:00 hs. Sin Guiado
        https://goo.gl/maps/BwdGBSWuJjKjr1wd6

        Centro de Interpretación Cristo Bendicente San Javier
        Horario: 09:30 a 18:20
        https://goo.gl/maps/mXUAmAr8krW5dQFP9
        `
        if (sendero.includes("funicular")){
            return Funicular
        }
        else if (sendero.includes("anta") || sendero.includes("yacu")){
            return anta
        }
        else if(sendero.includes("yungas")){
            return yungas
        }
        else if (sendero.includes("cascada")){
            return cascada
        }
        else if (sendero.includes("puerta") || sendero.includes("cielo")){
            return puerta
        }
        else if(sendero.includes("informacion")){
            return informacion
        }
    }
}
function informacionOficial(){
    return `
    Más info y contacto oficial de Yerba Buena:
    Información de la municipalidad de Yerba Buena y cuenta oficial de Turismo de la
    municipalidad de Yerba Buena.
    Instagram: https://www.instagram.com/turismoyb/?hl=es
    Email: Turismoenyerbabuena2020@gmail.com
    Sitio web de municipalidad de Yerba Buena: https://www.yerbabuena.gob.ar/
    `
}
function informacionSanJavier(){
    return `
    *San javier:
    El cerro de San Javier está ubicado en el departamento de Yerba Buena.
    Desde las sierras de San Javier, el turista podrá tener una vista panorámica y perfecta de
    toda la ciudad de San Miguel de Tucumán y la ciudad de Yerba Buena.
    Esta pequeña campiña serrana de ondulantes lomadas cubiertas de verde, cuenta con
    numerosas residencias de veraneo y encierra uno de los paisajes más hermosos de la
    provincia para la práctica del turismo.
    La estatua del Cristo Bendicente que se encuentra en el lugar es obra de Juan Carlos
    Iramain. Cuenta con 28 metros de altura, elevándose entre los cerros.
    San Javier presenta opciones de alojamiento y gastronomía para quienes deciden visitarla
    además de numerosos puestos en donde el turista podrá adquirir artesanías como recuerdo
    del lugar.
    Es un escenario óptimo para múltiples actividades entre las que se destacan mountain bike,
    trekking, cabalgatas, tirolesa y volar en parapente o aladelta.

    ¿Cómo llegar al Cerro San Javier?
    Para acceder desde San Miguel de Tucumán debe dirigirse hacia Yerba Buena, tomar
    avenida Aconquija y recorrerla hasta llegar a la Rotonda de “El Corte”. Continuar por Ruta
    Provincial Nº 338 y luego de aproximadamente 12 kilómetros de ruta montañosa llegará a la
    localidad de San Javier. Link de ubicación: Cristo Bendicente

    *Tirolesa en San Javier
    Tirolesa Cerro San Javier, la más larga de Argentina.
    Ubicación: Cristo Bendicente
    Horario: 10:00 a 18:00
    E-mail: consultas@imanay.com.ar
    Sitio web oficial con información de San Javier: https://www.sanjavierturismo.com.ar/
    `
}