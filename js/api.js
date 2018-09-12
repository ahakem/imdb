
function getMovie(movieName) {
  fetch(`http://www.omdbapi.com/?t=${movieName}&plot=full&apikey=e18f6d40`)
      .then(response => response.json())
      .then(addData)
}

function addData(data) {
  const title = document.querySelector('.movie-header_name');
  const type = document.querySelector('.movie-header_info');
  const poster = document.querySelector('.movie-poster');
  const imdb = document.querySelector('.imdb_rate');
  const rotten = document.querySelector('.rotten_rate');
  const metacritic = document.querySelector('.metacritic_rate');
  const plot = document.querySelector('.movie_plot');
  const details = document.querySelector('.movie-details');

  
  poster.setAttribute("src", data.Poster);
  title.textContent = data.Title;
  type.textContent = `${data.Year} ${data.Genre} . ${data.Runtime}`;
  imdb.innerHTML = `${data.imdbRating} <span>imdb</span>`;
  rotten.innerHTML = `${data.Ratings[1].Value} <span>Rotten Tomatoes</span>`;
  metacritic.innerHTML = `${data.Ratings[2].Value} <span>Metacritic</span>`;
  plot.textContent = data.Plot;

  details.innerHTML = `
    <ul class="movie-deatils">
      <li>Director: <span>${data.Director}</span></li>
      <li>Language: <span>${data.Language}</span></li>
      <li>Production: <span>${data.Production}</span></li>
      <li>Rated: <span>${data.Rated}</span></li>
      <li>Released: <span>${data.Released}</span></li>
      <li>Year: <span>${data.Year}</span></li>
    </ul>
  `;
  
}
getMovie('inception');