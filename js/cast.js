var model = {
  currentActor: null,
  cast: [
      {
        name : 'Matthew McConaughey',
        character : 'Copper',
        imgSrc : 'images/cast/matthew.jpg'
      },
      {
        name : 'Anne Hathaway',
        character : 'Brand',
        imgSrc : 'images/cast/anne.jpg'
      },
      {
        name : 'Jessica Chastainy',
        character : 'Murph',
        imgSrc : 'images/cast/jessica.jpg'
      },
      {
        name : 'Michael Caine',
        character : 'Professor Brand',
        imgSrc : 'images/cast/michel.jpg'
      },
      {
        name : 'Mackenzie Foy',
        character : 'Murph',
        imgSrc : 'images/cast/Mackenzie.jpg'
      },
      {
        name : 'Matt Damon',
        character : 'Mann',
        imgSrc : 'images/cast/matt.jpg'
      },
      {
        name : 'Casey Affleck',
        character : 'Tom',
        imgSrc : 'images/cast/casey.jpg'
      },
      {
        name : 'Timothee Chalamet',
        character : 'Tom',
        imgSrc : 'images/cast/timothee.jpg'
      },
      {
        name : 'Wes Bentely',
        character : 'Doyle',
        imgSrc : 'images/cast/wes.jpg'
      },
      {
        name : 'topher Grace',
        character : 'Getty',
        imgSrc : 'images/cast/topher.jpg'
      },
      {
        name : 'Ellen Burstyn',
        character : 'Murph',
        imgSrc : 'images/cast/elean.jpg'
      },
      {
        name : 'John Lithgow',
        character : 'Donald',
        imgSrc : 'images/cast/john.jpg'
      },
      
  ]
};

var octopus = {
  init: function() {
      castListView.init();
  },

  getCast: function() {
      return model.cast;
  }

};


var castListView = {

  init: function() {
      this.castListElem = document.getElementById('castList');
      this.render();
  },

  render: function() {
      var cast, elem, i;
      // get the cats we'll be rendering from the octopus
      var cast = octopus.getCast();
      this.castListElem.innerHTML = '';
      // loop over the cast
      for (i = 0; i < cast.length; i++) {
          // this is the actor we're currently looping over
          actor = cast[i];
          elem = document.createElement('div');
          elem.classList.add("movie-cast_actor");
          elem.innerHTML = `
            <a href="javascript'">
              <div><img src="${actor.imgSrc}" alt="${actor.name}"></div>
              <span class="movie-cast_actorname">${actor.name}</span>
              <span class="movie-cast_caractername">${actor.character}</span>
            </a> `
          this.castListElem.appendChild(elem);
      }
  }
};


octopus.init();
