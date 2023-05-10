const moviesList = document.querySelector("#movies-list");
const moviesSearch = document.querySelector("#movies-search");

function Movie(id, titulo, genero, minutos, origen, director, calificacion, imagen, descripcion, video) {
  this.id = id;
  this.title = titulo
  this.gender = genero;
  this.minutes = minutos;
  this.origin = origen;
  this.director = director;
  this.qualification = calificacion;
  this.image = imagen;
  this.description = descripcion;
  this.video = video;
}

const movie1 = new Movie(1, "Cuando ellas quieren más", "Comedia", 108, "USA", "Bill Holderman", "ATP", "../img/cuandoellasquierenmas.jpg", "La esperada secuela sigue a nuestras cuatro mejores amigas mientras llevan su club de lectura a Italia para hacer el divertido viaje de chicas que nunca tuvieron. Cuando las cosas se salen de control y se revelan secretos, sus relajantes vacaciones se convierten en una aventura única en la vida.", "https://www.youtube.com/watch?v=7l8f6IjX5ag");
const movie2 = new Movie(2, "Amor a primer mensaje", "Comedia romántica", 104, "USA", "Jim Strouse", "ATP", "../img/amoraprimermensaje.jpg", "¿Qué pasaría si un mensaje de texto al azar te condujera al amor de tu vida? En esta comedia romántica, ante la pérdida de su prometido, Mira Ray envía una serie de mensajes de texto románticos a su antiguo número de teléfono... sin darse cuenta de que el número había sido reasignado al nuevo teléfono del trabajo de Rob Burns. Rob, periodista, queda cautivado por la honestidad de los textos. Cuando le asignan la tarea de escribir un perfil de la megaestrella Celine Dion (interpretándose a sí misma en su primer papel cinematográfico), le pide ayuda para averiguar cómo conocer a Mira en persona... y conquistar su corazón.", "https://youtu.be/XC6ZnoGg3Rg");
const movie3 = new Movie(3, "Cría Siniestra", "Terror", 91, "Finlandia", "Hanna Bergholm", "SAM16", "../img/criasiniestra.jpg", "Una noche, Tinja encontrará un extraño huevo. En lugar de deshacerse de él, lo esconde y mantiene caliente, porque percibe vida dentro de él. Pero ni ella misma podría haber imaginado nunca lo que saldría del cascarón…", "https://youtu.be/ox9jhbW8W7c");
const movie4 = new Movie(4, "Último recurso", "Drama", 79, "Argentina", " Matías Szulanski", "SAM13", "../img/ultimorecurso.jpg", "La llegada de un paquete a la redacción de una revista deportiva venida a menos dispara una investigación que indicaría que el primer Campeonato Mundial de Fútbol se jugó en 1926, lo ganó Argentina y por algún motivo se borró de la historia oficial. Laura y Julia se lanzan al enigma para descifrar qué sucedió realmente y con un poco de ridículo y diversión animar sus monótonas vidas.", "https://youtu.be/04FpTLWNn8o");
const movie5 = new Movie(5, " La Barbarie", "Drama", 90, "Argentina", " Andrew Sala", "SAM13", "../img/labarbarie.jpg", "Nacho (18) huye de la violencia de su casa en Buenos Aires y busca un hogar al amparo de su padre, un estanciero a quien apenas conoce. La estancia viene sufriendo una amenaza: cada cierto tiempo una vaca aparece muerta, sin explicación. Para tratar de obtener la aprobación de su padre, Nacho buscará esclarecer estas muertes. Pero a medida que indague, irá descubriendo una gruesa capa de desconfianza y tensión de clase, que le harán preguntarse qué significa ser patrón.", "https://youtu.be/_OYDluP89-8");
const movie6 = new Movie(6, "El triunfo", "Drama", 105, "Francia", "Emmanuel Courcol", "ATP", "../img/eltriunfo.jpg", "Etienne (Kad Meran) es un entrañable actor que dirige un taller de teatro en un centro penitenciario. Allí reúne a un particular grupo de internos para representar la famosa obra de Samuel Beckett Esperando a Godot. Cuando consigue la autorización para realizar una gira fuera de la cárcel con su pintoresca troupe de actores, a Etienne se le presentará finalmente la ocasión de prosperar.", "https://youtu.be/tjJryOoI35U");
const movie7 = new Movie(7, "La sudestada", "Drama", 86, "Argentina", "Daniel Casabe", "SAM13", "../img/lasudestada.jpg", "Jorge Villafañez es un veterano detective privado, cínico y meticuloso. Tiene la rara habilidad de hacer hablar a los extraños y es capaz de cualquier cosa con tal de resolver un caso. Pero cuando lo contratan para investigar a Elvira Schulz, una renombrada coreógrafa experimental, confunde la distancia entre observador y observado, y comienza a perder el olfato.", "https://youtu.be/hxSzIJi35w4");
const movie8 = new Movie(8, "Guardianes de la Galaxia Vol. 3", "Acción", 149, "USA", "James Gunnl", "SAM13", "../img/guardianes.jpg", "En GUARDIANES DE LA GALAXIA VOL. 3 de Marvel Studios, la querida banda de Guardianes se instala en Knowhere. Pero sus vidas no tardan en verse alteradas por los ecos del turbulento pasado de Rocket. Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en una peligrosa misión para salvar la vida de Rocket, una misión que, si no se completa con éxito, podría muy posiblemente conducir al final de los Guardianes tal y como los conocemos.", "https://youtu.be/qAkCoX760xQ");
const movie9 = new Movie(9, "Misántropo", "Drama, Suspenso", 119, "USA", "Damián Szifron", "SAM16", "../img/misantropo.jpg", "El creador de la mítica serie Los Simuladores y director de la película Relatos salvajes, nominada al Premio Oscar®, ganadora del Premio Bafta® y hasta la fecha, el film nacional más exitoso de la historia, es también autor del guion junto al británico Jonathan Wakeham. Shailene Woodley (Big Little Lies, The Fault in Our Stars, The Divergent Series) protagoniza este implacable thriller junto a Ben Mendelsohn (Rogue One: una historia de Star Wars, Ready Player One, Robin Hood). Baltimore, la noche de año nuevo. Un feroz ataque producido por un único hombre deja un saldo de 29 muertos y ni una sola pista. Eleanor Falco (Shailene Woodley), una retraída pero talentosa mujer policía de bajo rango, es reclutada por el Agente Especial del FBI Geoffrey Lammark (Ben Mendelsohn) para integrar el equipo a cargo de la identificación y captura del asesino en masa.", "https://youtu.be/sGjJhdTqfZc");
const movie10 = new Movie(10, "Vera", "Drama", 115, "Austria", "Tizza Covi", "SAM13", "../img/vera.jpg", "Vera vive a la sombra de su famoso padre. Cansada de su vida y de sus relaciones superficiales, se adentra en la alta sociedad romana. Cuando en los suburbios hiere a un niño de ocho años en un accidente auto movilístico, ella forma una relación intensa con él y con su padre. Pero pronto descubre que también en ese mundo ella es sólo un instrumento para los demás.", "https://youtu.be/S0l4khGYFXc");
const movie11 = new Movie(11, "Rápidos y Furiosos X", "Aventuras, Acción", 141, "USA", "Louis Leterrier", "SAM16", "../img/rapidosyfuriosos.jpg", "Empieza el final del camino. Rápidos y Furiosos X, la décima entrega de la saga Rápidos y Furiosos, presenta los capítulos finales de una de las franquicias mundiales más famosas e históricas del cine, que ahora en su tercera década se mantiene fuerte y con el mismo elenco y los personajes que cuando empezó. A lo largo de muchas misiones y contra imposibles adversidades, Dom Toretto (VIN DIESEL) y su familia han sido más astutos, más motivados y más rápidos y determinados que todos los enemigos que se han cruzado en su camino. Ahora confrontan al oponente más letal al que jamás se han enfrentado: una aterradora amenaza que emerge de las sombras del pasado alimentada por la venganza de sangre, y que está decidida a destrozar esta familia y destruir todo aquello —y a todos— a los que Dom ama, para siempre. En la cinta Rápidos y Furiosos 5in Control de 2011, Dom y su equipo acabaron con el infame capo de la droga brasileño Hernan Reyes y diezmaron su imperio en un puente de Río de Janeiro. Lo que no sabían era que el hijo de Reyes, Dante (JASON MOMOA, protagonista de Aquaman), fue testigo de todo y ha pasado los últimos 12 años ideando un plan maestro para hacer que Dom pague el precio más alto. El plan de Dante esparcirá a la familia de Dom desde Los Ángeles hasta las catacumbas de Roma; desde Brasil, hasta Londres; y desde Portugal hasta la Antártida. Se forjarán nuevos aliados y resurgirán viejos enemigos. Pero todo cambia cuando Dom descubre que su hijo de 8 años (LEO ABELO PERRY, actor de la serie Black-ish) es el objetivo final de la venganza de Dante.", "https://youtu.be/htrcVc_5lQU");
const movie12 = new Movie(12, "Sombras de un crimen", "Drama, Suspenso", 110, "Irlanda", "Neil Jordan", "SAM13", "../img/sombrasdeuncrimen.jpg", "Liam Neeson da vida a Philip Marlowe, un detective privado que está envuelto en malos negocios y una vida solitaria. Su suerte cambiará con la llegada de Clare Cavendish (Diane Kruger), una hermosa mujer que le contratará para encontrar a su ex amante. Este acontecimiento resultará ser sólo una pequeña parte de un gran misterio por resolver.", "https://youtu.be/vm24XO9TCMg");
const movie13 = new Movie(13, "Empieza el baile", "Drama, Comedia", 99, "Argentina", "Marina Seresesky", "SAM13", "../img/empiezaelbaile.jpg", "Carlos y Margarita fueron la pareja de tango más famosa y reconocida de su época. Hoy, poco y nada queda de ese esplendor, de esa pasión que los llevó a compartir, escenarios, viajes y vida... Carlos vive en Madrid, disfrutando de la segunda oportunidad que le ha dado la vida y Margarita vive en Buenos Aires inmersa en la pobreza y el olvido, pero con ese humor socarrón y canalla que siempre la ha caracterizado. Junto a su inseparable amigo Pichuquito, la pareja inicia un viaje en busca de respuestas, que los enfrentará a sus recuerdos, a sus miedos, pero sobre todo a sus verdaderos deseos. En este disparatado viaje se reencontrarán con el pasado que tanto han evadido, pero también con la vida en estado puro.", "https://youtu.be/Td6pDaF5hdQ");
const movie14 = new Movie(14, "Los Caballeros del Zodiaco Saint Seiya - El Inicio", "Acción", 113, "USA", "Tomek Baginski", "SAM13", "../img/loscaballeros.jpg", "Basada en la sensación internacional del anime, Caballeros del Zodiaco por primera vez lleva a la pantalla grande la saga de Saint Seiya en acción real. Seiya (Mackenyu), un testarudo adolescente callejero, pasa el tiempo luchando por dinero mientras busca a su hermana secuestrada. Cuando en una de sus peleas se le revelan poderes místicos que desconocía, Seiya se ve inmerso en un mundo de santos en guerra, antiguos entrenamientos mágicos y una diosa reencarnada que necesita su protección. Si quiere sobrevivir, tendrá que aceptar su destino y sacrificarlo todo para ocupar el lugar que le corresponde entre los Caballeros del Zodiaco.", "https://youtu.be/T-iN3U-RNlM");
const movie15 = new Movie(15, "Evil dead rise: el despertar", "Terror", 96, "Nueva Zelanda", " Lee Cronin", "SAM16", "../img/evildeadrise.jpg", "New Line Cinema y Renaissance Pictures presentan un regreso a la icónica franquicia de terror, Evil Dead: El despertar, del escritor y director Lee Cronin. La película está protagonizada por Lily Sullivan, Alyssa Sutherland, Morgan Davies, Gabrielle Echols y presentando a Nell Fisher . Trasladando la acción fuera del bosque a la ciudad, Evil Dead: El despertar cuenta una historia retorcida de dos hermanas separadas, interpretadas por Sutherland y Sullivan, cuya reunión se ve interrumpida por el surgimiento de demonios que poseen, arrojándolas a una batalla primordial por la supervivencia mientras se enfrentan a la versión más pesadillesca de la familia imaginable.", "https://youtu.be/sJO9M0E6Nhw");
const movie16 = new Movie(16, "El exorcista del Papa", "Terror", 103, "USA", "Julius Avery", "SAM16", "../img/elexorcistadelpapa.jpg", "Inspirada en los archivos reales del Padre Gabriele Amorth, Exorcista Principal del Vaticano (ganador del Premio de la Academia® Russell Crowe), El Exorcista del Papa sigue a Amorth mientras investiga la terrorífica posesión de un niño que termina descubriendo una conspiración que hace siglos fue encubierta de manera desesperada por el Vaticano.", "https://youtu.be/GN0Yi3xNmAU");
const movie17 = new Movie(17, "Air: la historia detrás del logo", "Drama", 112, "USA", " Ben Affleck", "ATP", "../img/air.jpg", "Del galardonado director Ben Affleck, AIR: La historia detrás del logo revela la increíble y revolucionaria asociación entre un entonces novato Michael Jordan y la incipiente división de basketball de Nike que revolucionó el mundo de los deportes y la cultura contemporánea con la marca Air Jordan. Esta conmovedora historia cuenta la apuesta que define la carrera de un equipo poco convencional que tenía todo en juego, la visión intransigente de una madre que conoce el valor del inmenso talento de su hijo y el fenómeno del basketball que se convertiría en la leyenda más grande de todos los tiempos.", "https://youtu.be/ozZkWLa6itA");
const movie18 = new Movie(18, "La extorsión", "Drama", 105, "Argentina", " Martino Zaidelis", "SAM13", "../img/laextorsion.jpg", "Alejandro es un experimentado piloto aeronáutico. Amante de su profesión, esconde un secreto: una condición médica que implicaría su retiro inmediato. Los Servicios de Inteligencia lo descubren y muy pronto lo extorsionarán exigiéndole que transporte unas misteriosas valijas en la ruta Buenos Aires–Madrid sin hacer preguntas. Alerta por el enigmático cargamento que lleva, Alejandro se sumergirá en un universo de intriga y corrupción que lo pondrá en peligro a él y a los que ama mientras intenta escapar con vida a cualquier precio.", "https://youtu.be/ZuM8r6L9RTI");
const movie19 = new Movie(19, "John Wick 4", "Acción", 170, "USA", " Chad Stahelski", "SAM16", "../img/jhonwick.jpg", "John Wick (Keanu Reeves) descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, Wick deberá enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo; y contra las fuerzas que convierten a viejos amigos en enemigos.", "https://youtu.be/BNgEaNZPFCA");
const movie20 = new Movie(20, "Super Mario Bros: la película", "Animación", 93, "USA", "Aaron Horvath", "ATP", "../img/supermariobros.jpg", "De Nintendo e Illumination llega una nueva película animada basada en el mundo de Super Mario Bros. Dirigida por by Aaron Horvath y Michael Jelenic (colaboradores en Los Jóvenes Titanes en acción, Jóvenes Titanes en acción: la película) de un guion de Matthew Fogel (La gran aventura LEGO 2, Minions: Nace un villano), la película es protagonizada por Chris Pratt como Mario, Anya Taylor-Joy como la Princesa Peach, Charlie Day como Luigi, Jack Black como Bowser, Keegan-Michael Key como Toad, Seth Rogen como Donkey Kong, Fred Armisen como Cranky Kong, Kevin Michael Richardson como Kamek y Sebastian Maniscalco como Spike. La película es producida por el CEO y fundador de Illumination Chris Meledandri y por Shigeru Miyamoto de Nintendo. La película es co-financiada por Universal Pictures y Nintendo y estrenada mundialmente por Universal Pictures.", "https://youtu.be/IaqvH0eaYsE");

const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie20];

function renderMoviesCuadricula(movies) {
  moviesList.innerHTML = '';
  movies.forEach(movie => {
    let contenedorMovie = document.createElement('div');
    contenedorMovie.classList.add('col-sm-12');
    contenedorMovie.classList.add('col-md-6');
    contenedorMovie.classList.add('col-lg-3');
    contenedorMovie.innerHTML = `
        <div class="card">
        <img class="img-fluid" src="${movie.image}" alt="${movie.title}">
        <div class="card-body">
        <a><h3><i class="fa-sharp fa-solid fa-circle-play"></i>${movie.gender} - ${movie.qualification}</h3></a>
        <h2 class="card-title"><strong>${movie.title}</strong></h2>
        </div>
    `;
    moviesList.appendChild(contenedorMovie);
  });
}

function renderMoviesLista(movies) {
  moviesList.innerHTML = '';
  movies.forEach(movie => {
    let contenedorMovie = document.createElement('div');
    contenedorMovie.classList.add('col-12');
    contenedorMovie.innerHTML = `
        <table>
            <tr>
                <td>
                    <img class="imgList" src="${movie.image}" alt="${movie.title}">
                </td>
                <td>
                    <h2 class="card-title"><strong>${movie.title}</strong></h2>
                    <a><h3><i class="fa-sharp fa-solid fa-circle-play"></i>${movie.gender} - ${movie.qualification}</h3></a>
                </td>
            </tr>
    `;
    contenedorMovie.innerHTML = contenedorMovie.innerHTML + `</table><hr>`;
    moviesList.appendChild(contenedorMovie);
  });
}

function searchMovies(movies) {
  moviesSearch.innerHTML = '';
  let contenedorMovie = document.createElement('form');
  contenedorMovie.classList.add('formBuscar');
  contenedorMovie.innerHTML = `
    <input type="text" id="search-input" size=40 placeholder="Buscar películas"> - <a class="btn btn-outline-dark">Cancelar</a>
    `;
  moviesSearch.appendChild(contenedorMovie);
}



renderMoviesCuadricula(movies);
// setupFilters(movies, filters);
// setupViewModes(viewModes);
// setupSearch(movies, searchInput);
// setupEvents(movies);