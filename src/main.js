
const Game = Backbone.Model.extend();

const Games = Backbone.Collection.extend({
  model: Game
});

const GameView = Backbone.View.extend({

  events: {
    "mouseover .list-group-item": "onHover",
    "click": "onAllClicks",
    "click button.bookmark": "onClickBookmark",
    "click #let-me-solo-this": "onClickSoloItThen",
    "dblclick": "open",
    "contextmenu ": "showMenu",
  },

  onAllClicks: function(){

  },

  onHover: function() {
    console.log(this.$e);
  },

  render: function () {
    // this.$el.html(this.model.get("title"));
    // this.$el.attr("id", this.model.id);

    this.model.on('change', this.render, this);

    return this;
  }
});

const GamesView = Backbone.View.extend({

  initialize: async function () {
    this.model.on("add", this.onGameAdded, this);
    this.model.on("remove", this.onGameRemoved, this);
  },

  onGameAdded: function (game) {
    const gameView = new GameView({ model: game });
    this.$el.append(gameView.render().$el);
  },

  onGameRemoved: function (game) {
    this.$(`li#${game.id}`).remove();
  },

  render: function () {

    const templateFn = _.template($('#gameTemplate').html()); // returns a function
    // console.log(this.model);
    this.model.each( (game, i) => {
      const html = templateFn(this.model.toJSON()[i]);
      this.$el.append(html);
    });

  }
});



const renderDbData = async () => {

  try {
    const res = await fetch('http://localhost:3000/games', {
      method: 'GET' // Or any other HTTP method (GET, PUT, DELETE, etc.)
    });

    const dbGames = await res.json();

    const gamesModel = new Games(dbGames.map((game) => new Game(game)));

    // console.log(gamesModel);

    const gamesView = new GamesView({ el: "#games", model: gamesModel });

    gamesView.render();

  } catch (error) {
    console.log(error);
  }


}

renderDbData();
