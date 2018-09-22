async function getMovie(movieName) {
  const response =  await fetch(`https://www.omdbapi.com/?t=${movieName}&plot=full&apikey=e18f6d40`);
  const data = await response.json();
  renderData(data)
}
function renderData(data) {
  q('.movie-poster').setAttribute("src", data.Poster);
  q('.movie-header_name').textContent = data.Title ;
  q('.movie-header_info').textContent = `${data.Year} ${data.Genre} . ${data.Runtime}`;
  q('.imdb_rate').innerHTML = `${data.imdbRating} <span>imdb</span>`;
  q('.rotten_rate').innerHTML = `${data.Ratings[1].Value} <span>Rotten Tomatoes</span>`;
  q('.metacritic_rate').innerHTML = `${data.Ratings[2].Value} <span>Metacritic</span>`;
  q('.movie_plot').innerHTML = data.Plot;

  q('.movie-detailswraper').innerHTML = `
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
getMovie('interstellar');