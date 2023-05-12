const moviesList = document.querySelector("#movies-list");
const moviesSearch = document.querySelector("#movies-search");
const moviesFilter = document.querySelector("#movies-filter");
const movieSinopsis = document.querySelector("#movie-sinopsis");

class Movie {
  constructor (id, titulo, genero, minutos, origen, director, calificacion, imagen, descripcion, video) {
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
}

const movie1 = new Movie(1, "La sirenita", "Fantasía", 135, "USA", "Rob Marshall", "ATP", "../asset/img/lasirenita.jpg", "LA SIRENITA es la querida historia de Ariel, una sirena joven y apasionada con ansias de aventuras. Ella es la más joven y rebelde de las hijas del rey Tritón, y sueña con descubrir el mundo más allá del mar. Mientras visita la superficie, se enamora del distinguido príncipe Eric, y aunque las sirenas tienen prohibido relacionarse con los humanos, Ariel debe seguir a su corazón. Así es como hace un trato con la malvada bruja del mar, Úrsula, que le da la oportunidad de experimentar la vida sobre la tierra, pero finalmente pone su vida, y la corona de su padre, en peligro.?? La película está protagonizada por la cantante y actriz Halle Bailey (Grown-ish) como Ariel; Jonah Hauer-King (Mis huellas a casa) como el príncipe Eric; el ganador del premio Tony® Daveed Diggs (Hamilton) como la voz de Sebastián; Awkwafina (RAYA Y EL ÚLTIMO DRAGÓN) como la voz de Scuttle; Jacob Tremblay (LUCA) como la voz de Flounder; Noma Dumezweni (EL REGRESO DE MARY POPPINS) como la Reina; Art Malik (HOMELAND) como Sir Grimsby; con el ganador del Oscar® Javier Bardem (Sin lugar para los débiles) como el Rey Tritón; y la dos veces nominada al Oscar® Melissa McCarthy (¿PODRÁS PERDONARME?, Damas en guerra) como Úrsula.?", "https://www.youtube.com/embed/LJgYQixw4gI");
const movie2 = new Movie(2, "Cuando ellas quieren más", "Comedia", 108, "USA", "Bill Holderman", "ATP", "../asset/img/cuandoellasquierenmas.jpg", "La esperada secuela sigue a nuestras cuatro mejores amigas mientras llevan su club de lectura a Italia para hacer el divertido viaje de chicas que nunca tuvieron. Cuando las cosas se salen de control y se revelan secretos, sus relajantes vacaciones se convierten en una aventura única en la vida.", "https://www.youtube.com/embed/7l8f6IjX5ag");
const movie3 = new Movie(3, "Amor a primer mensaje", "Comedia romántica", 104, "USA", "Jim Strouse", "ATP", "../asset/img/amoraprimermensaje.jpg", "¿Qué pasaría si un mensaje de texto al azar te condujera al amor de tu vida? En esta comedia romántica, ante la pérdida de su prometido, Mira Ray envía una serie de mensajes de texto románticos a su antiguo número de teléfono... sin darse cuenta de que el número había sido reasignado al nuevo teléfono del trabajo de Rob Burns. Rob, periodista, queda cautivado por la honestidad de los textos. Cuando le asignan la tarea de escribir un perfil de la megaestrella Celine Dion (interpretándose a sí misma en su primer papel cinematográfico), le pide ayuda para averiguar cómo conocer a Mira en persona... y conquistar su corazón.", "https://www.youtube.com/embed/XC6ZnoGg3Rg");
const movie4 = new Movie(4, "Cría Siniestra", "Terror", 91, "Finlandia", "Hanna Bergholm", "SAM16", "../asset/img/criasiniestra.jpg", "Una noche, Tinja encontrará un extraño huevo. En lugar de deshacerse de él, lo esconde y mantiene caliente, porque percibe vida dentro de él. Pero ni ella misma podría haber imaginado nunca lo que saldría del cascarón…", "https://www.youtube.com/embed/ox9jhbW8W7c");
const movie5 = new Movie(5, "Último recurso", "Drama", 79, "Argentina", " Matías Szulanski", "SAM13", "../asset/img/ultimorecurso.jpg", "La llegada de un paquete a la redacción de una revista deportiva venida a menos dispara una investigación que indicaría que el primer Campeonato Mundial de Fútbol se jugó en 1926, lo ganó Argentina y por algún motivo se borró de la historia oficial. Laura y Julia se lanzan al enigma para descifrar qué sucedió realmente y con un poco de ridículo y diversión animar sus monótonas vidas.", "https://www.youtube.com/embed/04FpTLWNn8o");
const movie6 = new Movie(6, " La Barbarie", "Drama", 90, "Argentina", " Andrew Sala", "SAM13", "../asset/img/labarbarie.jpg", "Nacho (18) huye de la violencia de su casa en Buenos Aires y busca un hogar al amparo de su padre, un estanciero a quien apenas conoce. La estancia viene sufriendo una amenaza: cada cierto tiempo una vaca aparece muerta, sin explicación. Para tratar de obtener la aprobación de su padre, Nacho buscará esclarecer estas muertes. Pero a medida que indague, irá descubriendo una gruesa capa de desconfianza y tensión de clase, que le harán preguntarse qué significa ser patrón.", "https://www.youtube.com/embed/_OYDluP89-8");
const movie7 = new Movie(7, "El triunfo", "Drama", 105, "Francia", "Emmanuel Courcol", "ATP", "../asset/img/eltriunfo.jpg", "Etienne (Kad Meran) es un entrañable actor que dirige un taller de teatro en un centro penitenciario. Allí reúne a un particular grupo de internos para representar la famosa obra de Samuel Beckett Esperando a Godot. Cuando consigue la autorización para realizar una gira fuera de la cárcel con su pintoresca troupe de actores, a Etienne se le presentará finalmente la ocasión de prosperar.", "https://www.youtube.com/embed/tjJryOoI35U");
const movie8 = new Movie(8, "La sudestada", "Drama", 86, "Argentina", "Daniel Casabe", "SAM13", "../asset/img/lasudestada.jpg", "Jorge Villafañez es un veterano detective privado, cínico y meticuloso. Tiene la rara habilidad de hacer hablar a los extraños y es capaz de cualquier cosa con tal de resolver un caso. Pero cuando lo contratan para investigar a Elvira Schulz, una renombrada coreógrafa experimental, confunde la distancia entre observador y observado, y comienza a perder el olfato.", "https://www.youtube.com/embed/hxSzIJi35w4");
const movie9 = new Movie(9, "Guardianes de la Galaxia Vol. 3", "Acción", 149, "USA", "James Gunnl", "SAM13", "../asset/img/guardianes.jpg", "En GUARDIANES DE LA GALAXIA VOL. 3 de Marvel Studios, la querida banda de Guardianes se instala en Knowhere. Pero sus vidas no tardan en verse alteradas por los ecos del turbulento pasado de Rocket. Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo en una peligrosa misión para salvar la vida de Rocket, una misión que, si no se completa con éxito, podría muy posiblemente conducir al final de los Guardianes tal y como los conocemos.", "https://www.youtube.com/embed/qAkCoX760xQ");
const movie10 = new Movie(10, "Misántropo", "Drama, Suspenso", 119, "USA", "Damián Szifron", "SAM16", "../asset/img/misantropo.jpg", "El creador de la mítica serie Los Simuladores y director de la película Relatos salvajes, nominada al Premio Oscar®, ganadora del Premio Bafta® y hasta la fecha, el film nacional más exitoso de la historia, es también autor del guion junto al británico Jonathan Wakeham. Shailene Woodley (Big Little Lies, The Fault in Our Stars, The Divergent Series) protagoniza este implacable thriller junto a Ben Mendelsohn (Rogue One: una historia de Star Wars, Ready Player One, Robin Hood). Baltimore, la noche de año nuevo. Un feroz ataque producido por un único hombre deja un saldo de 29 muertos y ni una sola pista. Eleanor Falco (Shailene Woodley), una retraída pero talentosa mujer policía de bajo rango, es reclutada por el Agente Especial del FBI Geoffrey Lammark (Ben Mendelsohn) para integrar el equipo a cargo de la identificación y captura del asesino en masa.", "https://www.youtube.com/embed/sGjJhdTqfZc");
const movie11 = new Movie(11, "Vera", "Drama", 115, "Austria", "Tizza Covi", "SAM13", "../asset/img/vera.jpg", "Vera vive a la sombra de su famoso padre. Cansada de su vida y de sus relaciones superficiales, se adentra en la alta sociedad romana. Cuando en los suburbios hiere a un niño de ocho años en un accidente auto movilístico, ella forma una relación intensa con él y con su padre. Pero pronto descubre que también en ese mundo ella es sólo un instrumento para los demás.", "https://www.youtube.com/embed/S0l4khGYFXc");
const movie12 = new Movie(12, "Rápidos y Furiosos X", "Aventuras, Acción", 141, "USA", "Louis Leterrier", "SAM16", "../asset/img/rapidosyfuriosos.jpg", "Empieza el final del camino. Rápidos y Furiosos X, la décima entrega de la saga Rápidos y Furiosos, presenta los capítulos finales de una de las franquicias mundiales más famosas e históricas del cine, que ahora en su tercera década se mantiene fuerte y con el mismo elenco y los personajes que cuando empezó. A lo largo de muchas misiones y contra imposibles adversidades, Dom Toretto (VIN DIESEL) y su familia han sido más astutos, más motivados y más rápidos y determinados que todos los enemigos que se han cruzado en su camino. Ahora confrontan al oponente más letal al que jamás se han enfrentado: una aterradora amenaza que emerge de las sombras del pasado alimentada por la venganza de sangre, y que está decidida a destrozar esta familia y destruir todo aquello —y a todos— a los que Dom ama, para siempre. En la cinta Rápidos y Furiosos 5in Control de 2011, Dom y su equipo acabaron con el infame capo de la droga brasileño Hernan Reyes y diezmaron su imperio en un puente de Río de Janeiro. Lo que no sabían era que el hijo de Reyes, Dante (JASON MOMOA, protagonista de Aquaman), fue testigo de todo y ha pasado los últimos 12 años ideando un plan maestro para hacer que Dom pague el precio más alto. El plan de Dante esparcirá a la familia de Dom desde Los Ángeles hasta las catacumbas de Roma; desde Brasil, hasta Londres; y desde Portugal hasta la Antártida. Se forjarán nuevos aliados y resurgirán viejos enemigos. Pero todo cambia cuando Dom descubre que su hijo de 8 años (LEO ABELO PERRY, actor de la serie Black-ish) es el objetivo final de la venganza de Dante.", "https://www.youtube.com/embed/htrcVc_5lQU");
const movie13 = new Movie(13, "Sombras de un crimen", "Drama, Suspenso", 110, "Irlanda", "Neil Jordan", "SAM13", "../asset/img/sombrasdeuncrimen.jpg", "Liam Neeson da vida a Philip Marlowe, un detective privado que está envuelto en malos negocios y una vida solitaria. Su suerte cambiará con la llegada de Clare Cavendish (Diane Kruger), una hermosa mujer que le contratará para encontrar a su ex amante. Este acontecimiento resultará ser sólo una pequeña parte de un gran misterio por resolver.", "https://www.youtube.com/embed/vm24XO9TCMg");
const movie14 = new Movie(14, "Empieza el baile", "Drama, Comedia", 99, "Argentina", "Marina Seresesky", "SAM13", "../asset/img/empiezaelbaile.jpg", "Carlos y Margarita fueron la pareja de tango más famosa y reconocida de su época. Hoy, poco y nada queda de ese esplendor, de esa pasión que los llevó a compartir, escenarios, viajes y vida... Carlos vive en Madrid, disfrutando de la segunda oportunidad que le ha dado la vida y Margarita vive en Buenos Aires inmersa en la pobreza y el olvido, pero con ese humor socarrón y canalla que siempre la ha caracterizado. Junto a su inseparable amigo Pichuquito, la pareja inicia un viaje en busca de respuestas, que los enfrentará a sus recuerdos, a sus miedos, pero sobre todo a sus verdaderos deseos. En este disparatado viaje se reencontrarán con el pasado que tanto han evadido, pero también con la vida en estado puro.", "https://www.youtube.com/embed/Td6pDaF5hdQ");
const movie15 = new Movie(15, "Los Caballeros del Zodiaco Saint Seiya - El Inicio", "Acción", 113, "USA", "Tomek Baginski", "SAM13", "../asset/img/loscaballeros.jpg", "Basada en la sensación internacional del anime, Caballeros del Zodiaco por primera vez lleva a la pantalla grande la saga de Saint Seiya en acción real. Seiya (Mackenyu), un testarudo adolescente callejero, pasa el tiempo luchando por dinero mientras busca a su hermana secuestrada. Cuando en una de sus peleas se le revelan poderes místicos que desconocía, Seiya se ve inmerso en un mundo de santos en guerra, antiguos entrenamientos mágicos y una diosa reencarnada que necesita su protección. Si quiere sobrevivir, tendrá que aceptar su destino y sacrificarlo todo para ocupar el lugar que le corresponde entre los Caballeros del Zodiaco.", "https://www.youtube.com/embed/T-iN3U-RNlM");
const movie16 = new Movie(16, "El exorcista del Papa", "Terror", 103, "USA", "Julius Avery", "SAM16", "../asset/img/elexorcistadelpapa.jpg", "Inspirada en los archivos reales del Padre Gabriele Amorth, Exorcista Principal del Vaticano (ganador del Premio de la Academia® Russell Crowe), El Exorcista del Papa sigue a Amorth mientras investiga la terrorífica posesión de un niño que termina descubriendo una conspiración que hace siglos fue encubierta de manera desesperada por el Vaticano.", "https://www.youtube.com/embed/GN0Yi3xNmAU");
const movie17 = new Movie(17, "Air: la historia detrás del logo", "Drama", 112, "USA", " Ben Affleck", "ATP", "../asset/img/air.jpg", "Del galardonado director Ben Affleck, AIR: La historia detrás del logo revela la increíble y revolucionaria asociación entre un entonces novato Michael Jordan y la incipiente división de basketball de Nike que revolucionó el mundo de los deportes y la cultura contemporánea con la marca Air Jordan. Esta conmovedora historia cuenta la apuesta que define la carrera de un equipo poco convencional que tenía todo en juego, la visión intransigente de una madre que conoce el valor del inmenso talento de su hijo y el fenómeno del basketball que se convertiría en la leyenda más grande de todos los tiempos.", "https://www.youtube.com/embed/ozZkWLa6itA");
const movie18 = new Movie(18, "La extorsión", "Drama", 105, "Argentina", " Martino Zaidelis", "SAM13", "../asset/img/laextorsion.jpg", "Alejandro es un experimentado piloto aeronáutico. Amante de su profesión, esconde un secreto: una condición médica que implicaría su retiro inmediato. Los Servicios de Inteligencia lo descubren y muy pronto lo extorsionarán exigiéndole que transporte unas misteriosas valijas en la ruta Buenos Aires–Madrid sin hacer preguntas. Alerta por el enigmático cargamento que lleva, Alejandro se sumergirá en un universo de intriga y corrupción que lo pondrá en peligro a él y a los que ama mientras intenta escapar con vida a cualquier precio.", "https://www.youtube.com/embed/ZuM8r6L9RTI");
const movie19 = new Movie(19, "John Wick 4", "Acción", 170, "USA", " Chad Stahelski", "SAM16", "../asset/img/jhonwick.jpg", "John Wick (Keanu Reeves) descubre un camino para derrotar a La Mesa. Pero antes de poder ganar su libertad, Wick deberá enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo; y contra las fuerzas que convierten a viejos amigos en enemigos.", "https://www.youtube.com/embed/BNgEaNZPFCA");
const movie20 = new Movie(20, "Super Mario Bros: la película", "Animación", 93, "USA", "Aaron Horvath", "ATP", "../asset/img/supermariobros.jpg", "De Nintendo e Illumination llega una nueva película animada basada en el mundo de Super Mario Bros. Dirigida por by Aaron Horvath y Michael Jelenic (colaboradores en Los Jóvenes Titanes en acción, Jóvenes Titanes en acción: la película) de un guion de Matthew Fogel (La gran aventura LEGO 2, Minions: Nace un villano), la película es protagonizada por Chris Pratt como Mario, Anya Taylor-Joy como la Princesa Peach, Charlie Day como Luigi, Jack Black como Bowser, Keegan-Michael Key como Toad, Seth Rogen como Donkey Kong, Fred Armisen como Cranky Kong, Kevin Michael Richardson como Kamek y Sebastian Maniscalco como Spike. La película es producida por el CEO y fundador de Illumination Chris Meledandri y por Shigeru Miyamoto de Nintendo. La película es co-financiada por Universal Pictures y Nintendo y estrenada mundialmente por Universal Pictures.", "https://www.youtube.com/embed/IaqvH0eaYsE");

const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12, movie13, movie14, movie15, movie16, movie17, movie18, movie19, movie20];

function renderMovies(movies, view) {
  moviesList.innerHTML = '';
  if (view === 0) { //LISTA
    movies.forEach(movie => {
      let contenedorMovie = document.createElement('div');
      contenedorMovie.classList.add('col-12');
      contenedorMovie.innerHTML = `
      <div class="media border p-3">
        <img src="${movie.image}" alt="${movie.title}" class="mr-3 mt-3">
          <div class="media-body">
          <h4>${movie.gender} - ${movie.qualification}</h4>
          <h2><strong>${movie.title}</strong></h2>
          <a onclick="showMovie(${movie.id});" href="#sinopsis"><h3>Sinopsis <i class="fa-sharp fa-solid fa-circle-play"></i></h3></a>
          </div>
      </div>
      `;
      contenedorMovie.innerHTML = contenedorMovie.innerHTML + `</table><hr>`;
      moviesList.appendChild(contenedorMovie);
    });
  } else { //CUADRICULA
    movies.forEach(movie => {
      let contenedorMovie = document.createElement('div');
      contenedorMovie.classList.add('col-sm-12');
      contenedorMovie.classList.add('col-md-6');
      contenedorMovie.classList.add('col-lg-3');
      contenedorMovie.innerHTML = `
        <div class="card">
        <img class="img-fluid" src="${movie.image}" alt="${movie.title}">
        <div class="card-body">
          <h4>${movie.gender} - ${movie.qualification}</h4>
          <h2><strong>${movie.title}</strong></h2>
          <a onclick="showMovie(${movie.id});" href="#sinopsis"><h3>Sinopsis <i class="fa-sharp fa-solid fa-circle-play"></i></h3></a>
        </div>
    `;
      moviesList.appendChild(contenedorMovie);
    });
  }
}

function searchMovies(movies, criterio) {
  if (criterio === "nombre") { //busqueda por nombre
    let respuesta = prompt("Ingrese el nombre de la pelicula que quiere encontrar: ");
    let resultado = movies.filter((foundMovies) => foundMovies.title.includes(respuesta));
  } else {
    let respuesta= prompt("Ingrese el nombre del género de película que quiere encontrar: ");
    let resultado = movies.filter((foundMovies) => foundMovies.gender.includes(respuesta));
  }
  if (resultado) {
    alert(`
      Peliculas que coinciden con la búsqueda: ${resultado}
      `);
  } else {
    alert(`No hubo coincidencias con la búsqueda`);
  }
}



function showMovie(id) {
  let foundMovie = movies.find((movie) => {
    return movie.id === id;
  })
  if (foundMovie) {
    alert(`
      DATOS PARA ACTUALIZAR SINOPSIS
      Película: ${foundMovie.title}
      Género: ${foundMovie.gender}
      Calificación: ${foundMovie.qualification}
      Minutos: ${foundMovie.minutes}
      Descripción: ${foundMovie.description}
      `);
    movieSinopsis.innerHTML = '';
    let contenedorMovie = document.createElement('div');
    contenedorMovie.classList.add('col-12');
    contenedorMovie.innerHTML = `  
      <div class="card">
        <div class="card-header">
          <h3><strong>${foundMovie.gender}</strong></h3>  
          <h2>${foundMovie.title}</h2>
        </div>
          <img src="${foundMovie.image}">
        <div class="card-body">
          <p><strong>Minutos: </strong>${foundMovie.minutes} minutos.<br>
          <strong>Calificación: </strong>${foundMovie.qualification}<br> 
          <strong>Origen: </strong>${foundMovie.origin}<br>
          <strong>Director:</strong>${foundMovie.director}<br></p>
          <p>${foundMovie.description}</p>
          <button href="./pages/entradas.html">ENTRADAS</buttom>
        </div>
        <div class="card-footer">
        <iframe src="${foundMovie.video}" title="${foundMovie.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      `;
    movieSinopsis.appendChild(contenedorMovie);
  }
}

$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
});

renderMovies(movies, 1);
// setupFilters(movies, filters);
// setupViewModes(viewModes);
// setupSearch(movies, searchInput);
// setupEvents(movies);