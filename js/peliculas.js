const moviesList = document.querySelector("#movies-list");
const moviesSearch = document.querySelector("#movies-search");


    function Movie(titulo, anio, genero, imagen, descripcion) {
      this.title = titulo;
      this.year = anio;
      this.gender = genero;
      this.image = imagen;
      this.description = descripcion;
    }

    const movie1 = new Movie("Titanic", 1997, "Romance/Drama", "./asset/img/titanic.jpg",
      "Una joven aristócrata y un artista pobre se enamoran a bordo del famoso barco Titanic durante su viaje inaugural, pero su romance es amenazado por el trágico hundimiento del barco."
    );
    const movie2 = new Movie("La casa de Papel", 1997, "Drama", "../asset/img/casapapel.jpg",
      "Un grupo de ocho delincuentes llevan a cabo el mayor atraco de la historia en la Fábrica Nacional de Moneda y Timbre de España. Los ladrones toman como rehenes a los empleados y se mantienen aislados durante once días mientras imprimen millones de euros."
      );
    const movie3 = new Movie("La La Land", 2016, "Musical/Romance", "../asset/img/lalaland.jpg",
      "Dos artistas, una actriz y un músico de jazz, se enamoran mientras persiguen sus sueños en Los Ángeles. La película es un homenaje a los musicales clásicos de Hollywood, con coreografías elaboradas y canciones originales."
      );
    const movie4 = new Movie("El Padrino", 1972, "Drama/Crimen", "../asset/img/padrino.png",
      "La película sigue la vida de una familia mafiosa italoamericana en Nueva York, centrándose en la transición del patriarca Don Vito Corleone a su hijo Michael como líder de la familia."
    );
    const movie5 = new Movie("El Código Da Vinci", 2006, "Misterio/Suspenso", "../asset/img/codigodavinci.jpg",
      "Basada en la novela de Dan Brown, la película sigue al simbólogo Robert Langdon mientras investiga un complot para destruir la Iglesia Católica."
    );
    const movie6 = new Movie("Psicosis", 1960, "Terror/Suspenso", "../asset/img/psicosis.jpg",
      "Basada en la novela de Dan Brown, la película sigue al simbólogo Robert Langdon mientras investiga un complot para destruir la Iglesia Católica."
    );
    const movie7 = new Movie("El Señor de los Anillos: El Retorno del Rey", 2003, "Fantasía/Aventura",
      "../asset/img/anillos.jpg",
      "El último capítulo de la trilogía de El Señor de los Anillos, en la que la comunidad del anillo se une para enfrentar al señor oscuro Sauron y salvar la Tierra Media."
    );
    const movie8 = new Movie("Blade Runner", 1982, "Ciencia Ficción/Suspenso", "../asset/img/bladerunner.jpg",
      "En un futuro distópico, un ex policía es contratado para retirar androides rebeldes conocidos como replicantes."
    );
    const movie9 = new Movie("El Gran Hotel Budapest", 2014, "Comedia/Drama", "../asset/img/hotelbudapest.jpg",
      "La historia de un conserje y su protegido en un hotel europeo en la década de 1930, y sus aventuras después de que el protegido sea acusado de asesinato."
    );
    const movie10 = new Movie("Harry Potter y la Piedra Filosofal", 2001, "Fantasía/Aventura",
      "../asset/img/harrypotter.jpg",
      "La historia de Simba, un joven león que debe enfrentarse a su tío malvado Scar para reclamar su lugar como rey del orgullo."
    );
    const movie11 = new Movie("El Sexto Sentido", 1999, "Suspenso/Drama", "../asset/img/sextosentido.jpg",
      "Un niño que ve fantasmas se acerca a un psicólogo para tratar su don, mientras investigan la muerte de un paciente anterior del psicólogo."
    );
    const movie12 = new Movie("Volver al Futuro", 1985, "Ciencia Ficción/Aventura", "../asset/img/volveralfuturo.jpg",
      "Un adolescente viaja accidentalmente en el tiempo a 1955 y debe asegurarse de que sus padres se enamoren para que pueda volver al futuro."
    );

    const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10, movie11, movie12];

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
            <h2 class="card-title"><strong>${movie.title}</strong></h2>
            <h4>${movie.year}</h4>
            <p class="card-text">${movie.description}</p>
            <h4>${movie.gender}</h4>
            <a class="btn btn-outline-dark">Ver más</a>
        </div>
    `;
        moviesList.appendChild(contenedorMovie);
    });
}
function renderMoviesLista(movies) {
    moviesList.innerHTML = '';
    movies.forEach(movie => {
        let contenedorMovie = document.createElement('div');
        // contenedorMovie.classList.add('col-12');
        contenedorMovie.innerHTML = `
        <table>
            <tr>
                <td>
                    <img class="imgList" src="${movie.image}" alt="${movie.title}">
                </td>
                <td>
                    <h2 class="card-title"><strong>${movie.title}</strong></h2>
                    <h4>${movie.year} / ${movie.gender}</h4>
                    <p class="card-text">${movie.description}</p>
                    <a class="btn btn-outline-dark">Ver más</a>
                </td>
            </tr>
            <tr><td><br></td></tr>
    `;
    contenedorMovie.innerHTML = contenedorMovie.innerHTML + `</table>`;
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