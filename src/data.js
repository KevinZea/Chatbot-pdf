

// function splitTextWithTitles(longText) {
//     const titlePattern = /^#.+$/gm; // Patrón para buscar títulos que comiencen con "#"
//     const titles = longText.match(titlePattern); // Obtener un array de títulos
//     const textWithoutTitles = longText.replace(titlePattern, ''); // Eliminar los títulos del texto
  
//     const paragraphs = textWithoutTitles.split(/\n\s*\n/); // Dividir el texto en párrafos
  
//     const result = [];
//     let currentChunk = '';
    
//     // Recorremos los párrafos y los agregamos a un trozo hasta encontrar un título
//     paragraphs.forEach((paragraph, index) => {
//       currentChunk += paragraph + '\n\n';
  
//       // Si encontramos un título o llegamos al último párrafo, agregamos el trozo al resultado
//       if (titles[index] || index === paragraphs.length - 1) {
//         result.push(currentChunk.trim());
//         currentChunk = '';
//       }
//     });
  
//     return result;
//   }
  
//   const longText = `
//   # El Asesor es un directorio virtual de la ciudad de Yerba Buena.
//   Contacto de El Asesor: https://wa.link/at4y25
//   Teléfono: 3815076319

//   #Centros comerciales en Yerba Buena:
//   *Yerba Buena Shopping
//   Centro comercial:
//   Comercios, gastronomía, supermercado, ropa.
//   Te esperamos todos los días de 8 a 22 hs
//   Locales Comerciales 9:30 a 13:30 y de 17 a 21hs
//   Dirección: Av. Aconquija 1799 - Yerba Buena
//   Sitio web www.yerbabuenashopping.com
//   Cómo llegar: Shopping Yerba Buena
//   Contacto: https://wa.link/tx4lst

//   *Portal Tucuman
//   Portal Tucumán Shopping es el shopping más importante de Tucumán. Cuenta con
//   cocheras de fácil acceso, más de 90 locales con las marcas más importantes, Patio de
//   Comidas, Cines y entretenimientos. Además en Portal Tucumán podrá disfrutar de un
//   Hipermercado Jumbo e Easy
//   HORARIOS: ESTAMOS ABIERTOS TODOS LOS DÍAS DE 10 A 22 HS. PATIO DE
//   COMIDAS: Domingos a Jueves: 8 A 00 HS / Viernes, Sábado y vísperas de feriado y
//   feriados: 8 A 01 HS
//   Sitio web: Portal Tucumán
//   Cómo llegar: Portal Tucumán

//   #Gastronomia en Yerba Buena:
//   *Quates
//   Restaurante de comida mexicana.
//   Menú:Tacos, Quesadillas. Cocteles mexicanos. Tequila, Margaritas.
//   Excelente atención y comida. El mozo Mario, pendiente de lo que necesitábamos, nos
//   recomendaba tragos y comida.
//   La limonada con jengibre y menta es muy buena y refrescante.
//   Los tacos son muy abundantes, y cómo variedad de salsas para agregar. La verdad,
//   todo muy bueno.
//   Direccion: Avenida Juan Domingo Peron Open Plaza
//   *El mariachi
//   Comida mexicana. comida española. restaurante familiar.
//   rabas, tacos, paella, arroz, comidas veganas y vegetarianas.
//   abierto de lunes a lunes desde las 18hs.
//   WhatsApp: https://wa.link/g52vek
//   como llegar: https://goo.gl/maps/rktc1dKxuzPyzHdv8
//   *Pizzeria Legui - La original
//   Variedades en Pizzas
//   Dirección; Av Aconquija 153
//   WhatsApp: https://wa.link/g52vek
//   *Lo del Chato
//   Bar y Envíos a domicilio.
//   Servicios que brindan en comidas: Empanadas, Pizzas, Sándwiches de todo tipo.
//   Servicios que brindan en bebidas: Coctelería y tragos. Cervezas nacionales e
//   importadas.
//   WhatsApp https://wa.link/g52vek
//   *Pizza 8 - Pizzeria
//   Pizzas y empanadas
//   Dirección: Av. Aconquija 2129.
//   Envíos a domicilio.
//   WhatsApp https://wa.link/g52vek
//   Facebook: El Asesor - Multimedios | Yerba Buena
//   *PAQUITO’S
//   carnes, parrillada, empanadas, comida regionales.
//   DIRECCIÓN: Av. Aconquija 1832 - Galeria Edelweis
//   TELÉFONO: 4250450
//   WhtasApp: https://wa.link/g52vek

//   #Cafeterias y panaderias en Yerba Buena:
//   *Casapan
//   Panadería, Cafetería.
//   Envíos a domicilio.
//   WIFI gratuito en salón.
//   horarios de 9 a 19 hs todos los dias.
//   Dirección: Av Aconquija 142
//   Tel: 435 2685 - 435 4083
//   pedidos al WhatsApp https://wa.link/g52vek
//   Servicio que brinda: Desayunos, meriendas, cafe, panaderia, dulces, tortas y tartas,
//   sanguchitos. sandwiches.
//   *Aló Tienda & Cafe Yerba Buena
//   Consumo en el lugar
//   Dirección: Av. Aconquija 1591 Local 13
//   Horarios: de 08 a 22 hs todos los días
//   Servicio que brinda: Desayunos, meriendas, café, panadería, dulces, tortas y tartas.
//   Cómo llegar: Aló Tienda & Cafe Yerba Buena

//   #Abogados y estudios jurídicos
//   Estudio jurídico Uno.
//   Consultas al wpp https://wa.link/at4y25

//   #Salud y Belleza en Yerba Buena
//   *ACASSUSO CENTRO MEDICO
//   DIRECCIÓN: Acassuso 75 - Yerba Buena
//   TELÉFONO: 4861872 - 3815729855
//   HORARIOS DE ATENCION: 8 a 13 hs - 16 a 21 hs
//   EMAIL: centromedicoacassuso@gmail.com
//   *MENDEZ COLLADO - Centro medico
//   DIRECCIÓN: Sede CENTRO: Muñecas 444
//   Sede YERBA BUENA: Av. Aconquija 1015
//   TELÉFONO: 3815288527 - 4316900
//   Solicitar turnos a: turnos@mendezcollado.com
//   En ambas sedes brindamos los servicios de Radiología, Mamografía, Densitometría,
//   Tomografía, Resonancia y Ecografía.
//   Horario de atención: de lunes a viernes de 7 a 22 hs y sábado de 8 a 12hs
//   WEB: www.mendezcollado.com
//   Contacto: https://wa.link/at4y25
//   *Summer Solarium
//   Centro de bronceado, Cama Solar, Belleza de manos y pies, Depilación definitiva.
//   Estamos en Av. Aconquija 844
//   Lun a Sáb de 10 a 21 hs.
//   Instagram:Summer #Solarium (@summer_tuc) on Instagram
//   Contacto: https://wa.link/at4y25
//   *Solanas peluquería & Estetica
//   Dirección: Cariola 207 Teléfono: 4356609.
//   Instagram: Solanas Peluquería & Estética (@solanaspeluqueria) • Instagram photos and
//   videos
//   Contacto: https://wa.link/at4y25
//   Servicios que brinda: peluqueria, salon de belleza.

//   #Pet Shops
//   *Cachorros
//   Pet shop - Alimentos para mascotas - Servicios a domicilios.
//   Dirección: Av. Belgrano 4433
//   Teléfono; 4343530

//   #Inmobiliarias
//   *Bernasconi
//   Servicios inmobiliarios
//   ventas y alquiler de propiedades
//   Direccion: Centro comercial Quara
//   Whatsapp: https://wa.link/at4y25

//   #Taxis y remises en Yerba Buena:
//   *Del Rosario Remis:
//   Servicio de taxi y Remis.
//   Servicios empresariales. Servicios dentro y fuera de la provincia.
//   Dirección: Av Aconquija 2154.
//   WhtasApp: https://wa.link/g52vek
//   *Maxi Taxi
//   Servicio de taxi en Yerba buena.
//   Direccion: Camino del peru 24
//   WhatsApp: https://wa.link/g52vek

//   #Educacion:
//   *COLEGIO LOS ARCOS
//   Nivel PRIMARIO - SECUNDARIO: Italia 2872
//   DIRECCIÓN: Nivel INICIAL: Pedro Maderuelo 162
//   TELÉFONO: 4255513 - 3813516035
//   Contacto directo: https://wa.link/g52vek
//   *Cámara de comercio de Yerba buena
//   Dirección: Av. Aconquija 2343, Local 6, Galería Gala.
//   Telefono: 3815694187
//   WhatsApp https://wa.link/gnuboj
//   Email: camaracomercioyerbabuena@hotmail.com
//   Facebook: Camaradecomercioyerbabuena
//   Instagram: Cámara de Comercio Yerba Buena (@camaradecomercio.yb) on Instagram
//   *Municipalidad de Yerba Buena
//   Dirección: Av. Aconquija 1991
//   Cómo llegar: Municipality of Yerba Buena
//   Sitio web: Municipalidad de Yerba Buena

//   #Yerba Buena y San Javier: Información turística:
//   Yerba Buena se ubica estratégicamente a 10 minutos de la capital de Tucumán y es paso
//   obligado para acceder a San Javier.
//   Es la zona residencial de Tucumán por excelencia, en donde está ubicada la mayoría de los
//   countries, barrios cerrados e importantes casonas.
//   Funciona como centro de vida social de un importante sector de la población de San Miguel
//   de Tucumán y de sus propios habitantes.
//   Clima: es subtropical con veranos cálidos y lluviosos, inviernos templados y húmedos y
//   primaveras cálidas y secas. Es un lugar ideal para vacacionar prácticamente durante todo el
//   año.
//   Gastronomía: cuenta con una gran variedad de gastronomía, desde restaurantes gourmets
//   hasta establecimientos más sencillos como cafés.
//   Atractivos: Cuenta con una cuantiosa variedad de atractivos naturales y arquitectónicos.
//   Se encuentra a 1h 10 min del Aeropuerto Benjamín Matienzo.
//   Población: Cuenta con un crecimiento del 5% anual, hoy en día habitan aproximadamente
//   110.000 habitantes.
//   Detalles de la Actividades:
//   Yerba Buena Tucumán, Centro turístico en constante expansión, donde la infraestructura
//   hotelera crece constantemente para recibir a los turistas que deseen combinar la
//   naturaleza, tranquilidad y cercanía con la capital tucumana
//   Durante el día Yerba Buena se transforma en un lugar repleto de actividades deportivas
//   como mountain bike, trekking, cabalgatas, parapente y golf, entre otras.
//   También se presentan opciones gastronómicas, con la característica comida regional como
//   así también contemporánea y vanguardista.
//   Por las noches los bares, pubs y cervecerías abren sus puertas para recibir a todos aquellos
//   que deseen pasar un tiempo con amigos, tomar unos tragos y divertirse.
//   En Yerba Buena podremos realizar múltiples actividades, la mayoría de ellas tendrán que
//   ver con actividades al aire libre, en contacto con la naturaleza y sus inmensos atractivos.
  
//   #*Turismo Aventura desde Yerba Buena
//   Para los amantes del turismo aventura, Yerba Buena se presenta como un lugar cercano a
//   la capital tucumana que nos permite realizar actividades turísticas diferentes, no solo podrán
//   recorrer un destino rico en su arquitectura sino que también podrán disfrutar del contacto
//   con la naturaleza y de actividades para toda la familia.
//   *DEPORTES DE COMPETENCIA: Mountain Bike, Enduro, Golf, Rugby y Jockey son
//   algunos de los deportes que se practican en nuestra ciudad y participan todos los años de
//   competencias a nivel mundial, como el ya característico trasmontaña que se realiza en
//   nuestros cerros.
//   *PARAPENTE: Tanto para lanzamientos profesionales, como personas que desean
//   aprender sobre el vuelo, la Sierra San Javier es el punto de encuentro para el despegue.
//   Loma Bola suele ser un punto panorámico y de encuentro inigualable desde el cual se
//   pueden ver la belleza del paisaje y los parapentistas que alzan vuelo.
//   *TREKKING: Esta actividad es la elegida por los turistas que visitan Yerba Buena , donde se
//   desarrollan Caminatas tranquilas observando la naturaleza desde un aspecto más que
//   cercano y tangible y desde hace un par de años la ya característica” Caminata Nocturna
//   Lunita Tucumán”.
//   *CABALGATAS: Una opción para recorrer el pedemonte de la Yunga son las cabalgatas
//   guiadas por expertos de la zona. Diferentes programas organizados de acuerdo a las
//   posibilidades de cada grupo: cabalgatas nocturnas, de día completo o medio día.
//   *MOUNTAIN BIKE: Se puede practicar las modalidades, descenso, cross country y rally
//   trasmontaña. En Horco Molle dentro del Parque Sierra San Javier hay un circuito señalizado
//   entre bosques y por el valle de Potrerillo atraviesa cada año, el internacional “rally
//   trasmontaña” de Mountain bike, que se larga desde San Javier. Hay una senda de descanso
//   desde San Javier que llega a la Rinconada.
//   *GOLF: La mayor cantidad de canchas de Golf de Tucumán se hallan en Yerba Buena, por
//   lo que se puede optar entre diversos links que se ofrecen tradicionales y destacados clubes
//   de la zona.
//   *RUGBY Y HOCKEY: Los principales clubes desarrollan sus actividades en esta ciudad con
//   campeonatos a nivel nacional.

//   #Yerba Buena Escenario Natural:
//   La naturaleza ha dotado a esta región de paisajes hermosos para disfrutar en paseos
//   recreativos, actividades deportivas y de esparcimiento. Este es el motivo por el que se
//   conoce a Yerba Buena con el nombre de “Ciudad Jardín”.
//   * Parque Sierra San Javier: La zona aledaña a Yerba Buena y comprendida dentro del
//   Parque Sierra San Javier, cuenta con senderos diferenciados por duración y dificultad, para
//   abarcar e incluir a la mayoría de las personas deseosas de adentrarse en la vegetación
//   autóctona. Con la posibilidad de pasar el día en familia, áreas para acampar, picnic y áreas
//   de río o lagunas internas.
//   *Jardín Botánico: El Jardín Botánico Horco Molle está ubicado en la Reserva Experimental
//   Horco Molle, y ambos dependen de la Facultad de Ciencias Naturales e IML – Universidad
//   Nacional de Tucumán.
//   La creación de un Jardín botánico estuvo presente desde el año 1999 por parte de las
//   autoridades de nuestra universidad, pero su existencia y consolidación se está realizando
//   luego de quince años, con el trabajo constante de docentes e investigadores de nuestra
//   unidad académica.
//   · Un espacio de recuperación constante de la selva pedemontana, donde a partir de la
//   producción e investigación científica se pueda generar de forma paulatina un proceso de
//   restauración de la misma. La restauración ecológica es el fundamento donde cada acción
//   se enmarca en un contexto técnico-científico y social.
//   El jardín botánico horco molle recibe permanentemente delegaciones estudiantiles, ONGS,
//   centros de día, entre otras instituciones que buscan sorprenderse y aprender mucho más
//   acerca de las riquezas que existen en nuestras yungas tucumanas
//   *Parque Percy Hill: Uno de los últimos reductos de la Selva Pedemontana que se desarrolla
//   en Tucumán están enmarcados dentro del Parque Percy Hill. Podremos recorrer hoy,
//   apenas 2,2 hectáreas de un ecosistema que supo tener un tamaño tal que abarcaba la
//   actual Capital y Yerba Buena.
//   Gracias al espacio rescatado por el inglés Percy Hill, en honor al cual se nombra este
//   parque, podremos conocer un ambiente naturalmente selvático; donde los colosales árboles
//   son los dueños de cada rincón y donde la tupida vegetación simulan baldosas a nuestro
//   paso.
//   Como así también permite deleitar el avistaje de Aves
//   *EL CRISTO: Comenzamos nuestro recorrido por el boulevard del cruce Av. Aconquija y
//   Camino del Perú, allí encontraremos la obra de Santiago Chiérico. La imagen del Cristo y su
//   cruz, creada en base al modelo original que se crearía para colocar en la Cordillera de los
//   Andes (proyecto inconcluso).
//   Luego, podremos continuar el recorrido por alguno de los tantos puntos de interés religioso:
//   - Parroquia de San José: Camino del Perú n°1351 y fundada en 1931.
//   - Capilla María del Rosario de San Nicolás: ubicada en la intersección de las calles Salas y
//   Valdez. Creada originalmente en el año 1988, supo ser una gruta construida por un vecino
//   que cumplía una promesa.
//   Hacia 1995 pudo transformarse la pequeña gruta en la actual capilla y a partir de ese
//   momento se realizan mejoras permanentes gracias al aporte de la comunidad.
//   - Capilla Ntra. Señora del Carmen: ubicada en la Plaza Vieja de La Rinconada, con más de
//   170 años de historia, la capilla fue construida durante la década de 1840
//   - Parroquia de San José: Camino del Perú n°1351
//   - Oratorio Sagrado Corazón Eucarístico de Jesús: en Av. Aconquija al 400, su construcción
//   comenzó en el año 2004.
//   *LA VIRGENCITA: Es una imagen de María Auxiliadora réplica de la misma imagen
//   ubicada en el Colegio homónimo en San Miguel de Tucumán. Ubicada en Av. Aconquija al
//   800.
//   *CRISTO BENDICENTE DE SAN JAVIER:
//   Obra del artista tucumano Juan Carlos Iramain, ubicado en la cumbre del Cerro San Javier.
//   Impecables tanto la fotografía que podrán obtener del Cristo como la vista panorámica que
//   obtendrán desde lo alto del Cerro.
//   Parque Provincial Aconquija
//   Se trata de una Reserva Forestal de 500 has creada en 1936, constituyendo en ese
//   momento la 1° área natural provincial protegida a nivel nacional. De esta forma Tucumán se
//   convertía en la primer provincia que preservaba un área natural, su ecosistema y la
//   biodiversidad.
//   La función del Parque es la de preservar una franja de Yungas, complementando las áreas
//   naturales de Horco Molle y Parque Sierra San Javier. Actividades recreativas como pesca
//   deportiva, canotaje, trekking, montañismo, paseos en bici y senderismo.
//   Reserva Experimental Horco Molle
//   Reserva creada en 1986, cuenta con un área protegida de 200 has de Yungas o Selva
//   Subtropical de Montaña.
//   El objetivo principal de su creación es la de preservar y mostrar al público la flora y fauna
//   autóctona, aparte de conformar el área de laboratorio de campo (investigación y docencia)
//   de la Facultad de Ciencias Naturales y el Instituto Lillo.
//   También está destinado para que los turistas, niños de escuelas y colegios, ciudadanos en
//   general puedan pasar el día y conocer la flora y fauna característica de la región. Poseen
//   asadores y lugares para acampar.
//   Para los amantes del turismo aventura, Yerba Buena se presenta como un lugar cercano a
//   la capital tucumana que nos permite realizar actividades turísticas diferentes, no solo podrán
//   recorrer un destino rico en su arquitectura sino que también podrán disfrutar del contacto
//   con la naturaleza y de actividades para toda la familia.
//   Conocida como “Ciudad Jardín”, a tan sólo 12 kilómetros de San Miguel de Tucumán, crece
//   año tras año combinando el aire puro de la cercanía del cerro con la movida de bares, pubs,
//   shoppings y restaurantes.
//   *La naturaleza ha dotado a esta región de paisajes hermosos para disfrutar de paseos
//   recreativos, actividades deportivas y de esparcimiento.
//   Los turistas podrán disfrutar de actividades como mountain bike, trekking, senderismo y
//   cabalgatas.
//   Centros comerciales, bares, pubs y discotecas, sedes bancarias, restaurantes de todo tipo y
//   alojamientos, entre otros, han hecho que Yerba Buena sea un destino destacado en la
//   provincia de Tucuman.
//   *Un paseo imperdible en Yerba Buena, es la Reserva de Horco Molle perteneciente a la
//   Universidad Nacional de Tucumán. Quien la visite podrá conocer especies autóctonas de
//   flora y fauna. La reserva es ideal para compartir un día en familia; cuenta con merenderos,
//   quinchos, asadores y sanitarios.
//   Dentro de la Reserva de Horco Molle se encuentra el Jardín Botánico Horco Molle.
//   *Otro atractivo de la “Ciudad Jardín” es el Parque Percy Hill, donde el visitante podrá
//   conocer más de 80 especies de aves en una magnífica porción de las yungas, la selva
//   tucumana.
//   *Sendero El Funicular: Ubicado en la Sierra de San Javier, el sendero El Funicular es uno
//   de los más visitados en las cercanías de la ciudad de San Miguel de Tucumán. El sendero
//   inicia en Horco Molle, se encuentra señalizado y puede combinarse con otros dos senderos
//   para hacer un recorrido más amplio o circular. También cuenta con carteles informativos que
//   cuentan la historia del antiguo ferrocarril y datos de algunas de las especies de flora que es
//   posible encontrar. Es una excelente manera de disfrutar de la naturaleza que forma el
//   ecosistema de las yungas.
//   *El sendero Puerta del Cielo: Ubicado en Horco Molle, es considerado uno de los más
//   lindos de Tucumán. Se sumerge en la naturaleza a través de un abundante bosque y
//   asciende por las colinas que forman parte de la Sierra de San Javier. Su dificultad es
//   moderada, sin embargo, la humedad puede hacer que la caminata se sienta más pesada.
//   En épocas lluviosas, también hay bastante barro. Desde la cima se tienen lindas vistas,
//   especialmente de la ciudad de San Miguel de Tucumán.
//   La duración del circuito es de una hora y treinta minutos aproximadamente. Llevar agua
//   abundante es necesario.
//   Senderos para hacer senderismo en Yerba Buena:
//   *SENDERO EL FUNICULAR: Inmerso en la yunga tucumana y mimetizado con la
//   vegetación abundante del lugar. El recorrido comprende parte de lo que supo ser el
//   proyecto de conexión San Javier - Horco Molle.
//   La obra se basaba en la construcción de una red ferroviaria eléctrica de 3km y 6 viaductos
//   que salvarían los desniveles de la geografía y conectarían 2 sectores universitarios
//   importantes del Circuito Yungas.
//   El trekking comprende un trayecto ida y vuelta de 5 horas aproximadas y se puede arribar
//   hasta el 2° viaducto, donde se encuentra la construcción abandonada del funicular.
//   *SENDERO ANTA YACU: Un trayecto de dificultad menor y una duración aproximada de 1
//   hora y media
//   *SENDERO LAS YUNGAS: Un recorrido sin dificultad, a través del cual podrán conocer el
//   interior de la selva basal característica que rodea la Universidad de Horco Molle y el Arroyo
//   Las Cañas.
//   *SENDERO LA CASCADA: Junto al trayecto del Río Los Noques realizaremos nuestra
//   caminata, hasta arribar a un salto de agua natural que da nombre a dicho sendero.
//   *SENDERO PUERTA DEL CIELO: En este recorrido se conocerán los 2 estratos selváticos
//   que constituyen la Yunga Tucumana
//   • selva basal (hasta los 800 m.s.n.m)
//   • selva de Mietáceas (hasta los 1200 m.s.n.m)
//   En dicho trayecto podrán acceder a puntos panorámicos desde los cuales se observa la
//   ciudad de San Miguel de Tucumán en su totalidad. El recorrido total abarca 3 horas
//   salvando una distancia de 2 kms., hasta arribar a la localidad de San Javier.

//   #Jardín Botánico Parque Percy Hill
//   Ubicación: calle Perú 1100 – altura Avenida Aconquija 1100
//   Percy Hill Park
//   Horario: 08:00 a 18:00 todos los días
//   Reserva Horco Molle (visitas guiadas)
//   Reserva Experimental Horco Molle
//   Horario: 09:00 a 19:00 – todos los días
//   Jardín Botánico Horco Molle (visitas guiadas)
//   Horario: 09:00 a 19:00 – todos los días
//   Botánico Horco Molle
//   Senderos “Puerta del Cielo” y “El Funicular”:
//   Horarios: 9:00 a 18:00 hs. Sin Guiado
//   Puerta del Cielo
//   Sendero Cascada del Río Noque – Cerro San Javier
//   Horario: 09:00 a 18:00 hs. Sin Guiado
//   Noque River Waterfall Trail
//   Centro de Interpretación Cristo Bendicente San Javier
//   Horario: 09:30 a 18:20
//   Cristo Bendicente

//   #Más info y contacto oficial de Yerba Buena:
//   Información de la municipalidad de Yerba Buena y cuenta oficial de Turismo de la
//   municipalidad de Yerba Buena.
//   Instagram: Turismo Yerba Buena 🛬🍲󰣑🏕 (@turismoyb) • Instagram photos and videos
//   Email: Turismoenyerbabuena2020@gmail.com
//   Sitio web de municipalidad de Yerba Buena: Municipalidad de Yerba Buena

//   #*San javier:
//   El cerro de San Javier está ubicado en el departamento de Yerba Buena.
//   Desde las sierras de San Javier, el turista podrá tener una vista panorámica y perfecta de
//   toda la ciudad de San Miguel de Tucumán y la ciudad de Yerba Buena.
//   Esta pequeña campiña serrana de ondulantes lomadas cubiertas de verde, cuenta con
//   numerosas residencias de veraneo y encierra uno de los paisajes más hermosos de la
//   provincia para la práctica del turismo.
//   La estatua del Cristo Bendicente que se encuentra en el lugar es obra de Juan Carlos
//   Iramain. Cuenta con 28 metros de altura, elevándose entre los cerros.
//   San Javier presenta opciones de alojamiento y gastronomía para quienes deciden visitarla
//   además de numerosos puestos en donde el turista podrá adquirir artesanías como recuerdo
//   del lugar.
//   Es un escenario óptimo para múltiples actividades entre las que se destacan mountain bike,
//   trekking, cabalgatas, tirolesa y volar en parapente o aladelta.
//   ¿Cómo llegar al Cerro San Javier?
//   Para acceder desde San Miguel de Tucumán debe dirigirse hacia Yerba Buena, tomar
//   avenida Aconquija y recorrerla hasta llegar a la Rotonda de “El Corte”. Continuar por Ruta
//   Provincial Nº 338 y luego de aproximadamente 12 kilómetros de ruta montañosa llegará a la
//   localidad de San Javier. Link de ubicación: Cristo Bendicente
//   *Tirolesa en San Javier
//   Tirolesa Cerro San Javier, la más larga de Argentina.
//   Ubicación: Cristo Bendicente
//   Horario: 10:00 a 18:00
//   E-mail: consultas@imanay.com.ar
//   Sitio web oficial con información de San Javier: https://www.sanjavierturismo.com.ar/
// `;

// const textChunks = splitTextWithTitles(longText);
// console.log(textChunks)

// async function toEmbeddings(textChunks){
//     const apikey = "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"
//     const { Configuration, OpenAIApi } = require("openai");
//     const configuration = new Configuration({
//       apiKey: apikey,
//     });
//     const openai = new OpenAIApi(configuration);
//     const response = await openai.createEmbedding({
//       model: "text-embedding-ada-002",
//       input: textChunks,
//     });
//     return response
// }
