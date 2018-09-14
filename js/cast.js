
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
    // store pointers to our DOM elements for easy access later
    this.actorElem = document.getElementById('actor');
    this.actorNameElem = document.getElementById('actor-name');
    this.actorImageElem = document.getElementById('actor-img');

    // render this view (update the DOM elements with the right values)
    this.render();
  },

render: function() {
    // update the DOM elements with values from the current cat
    var currentActor = octopus.getCurrentActor();
    var actorPhotos = currentActor.photos;
    // this.countElem.textContent = actorPhotos;
    this.actorNameElem.textContent = currentActor.name;
    this.actorImageElem.src = currentActor.imgSrc;
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
            <a href="castDetails.html">
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
