
var octopus = {
  init: function() {
    model.currentActor = model.cast[0];
      castListView.init();
      actorView.init();
  },
  getCurrentActor: function() {
    return model.currentActor;
  },
  setCurrentActor: function(actor) {
    model.currentActor = actor;
},

  getCast: function() {
      return model.cast;
  }

};

var actorView = {

  init: function() {
    this.actorphotosWraper = document.getElementById('actor-photos');
    this.actorName = document.getElementById('actor-name');
    this.actorBio = document.getElementById('actor-bio');
    this.actorDetails = document.getElementById('actor-deatils');
    this.actorInput = document.getElementById('actor-input');

    this.render();
  },

render: function() {
    // update the DOM elements with values from the current cat
    var currentActor = octopus.getCurrentActor();
    var actorPhotos = currentActor.photos;
    var images = " ";
    actorPhotos.forEach(function(url) {
      img = `<img src="${url}" />`;
      images += img;
    });
    this.actorInput.value = currentActor.name;
    this.actorphotosWraper.innerHTML = images;
    this.actorName.textContent = currentActor.name;
    this.actorBio.textContent = currentActor.bio;
    this.actorDetails.innerHTML = `
    <li>Spouse: <span>${currentActor.spouse}</span></li>
    <li>Height: <span>${currentActor.Height}</span></li>
    <li>Upcoming movie: <span>${currentActor.upcomingmovie}</span></li>
    <li>Children: <span>${currentActor.children}</span></li>
    `;
  }
};

var castListView = {

  init: function() {
      this.castListElem = document.getElementById('castList');
      this.render();
  },

  render: function() {
      var cast, elem, i;
      var cast = octopus.getCast();
      this.castListElem.innerHTML = '';
      for (i = 0; i < cast.length; i++) {
          actor = cast[i];
          elem = document.createElement('div');
          elem.classList.add("movie-cast_actor");
          elem.innerHTML = `
            <a href="javascript:;">
              <div><img src="${actor.imgSrc}" alt="${actor.name}"></div>
              <span class="movie-cast_actorname">${actor.name}</span>
              <span class="movie-cast_caractername">${actor.character}</span>
            </a> `
          elem.addEventListener('click', (function(actorCopy) {
              return function() {
                  octopus.setCurrentActor(actorCopy);
                  actorView.render();
              };
          })(actor));
          this.castListElem.appendChild(elem);
      }
  }
};


octopus.init();
