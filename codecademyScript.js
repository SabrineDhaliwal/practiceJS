
//building an object with getter and setter
const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string"){
        return this._meal = mealToCheck;
      }else{
        console.log("Please enter a meal description")
      }
    },
  
    set price(priceToCheck){
      if(typeof priceToCheck === 'number'){
        return this._price = priceToCheck
      }else {
        console.log("Please enter a price")
      }
    },
  
    get todaysSpecial(){
      if(this._meal && this._price){
        return `Today's meal is ${this._meal} for ${this._price}`
      }else {
        return 'Meal or price not set correctly'
      }
    }
  }
  
  menu.meal ="tuna sandwhich";
  menu.price = 8;
  
  console.log(menu.todaysSpecial)
  
  // Building stats and objects, adding objects to arrays within an object.
   
  const team = {
    _players:[
      {
        firstName:'Julie',
        lastName:'D',
        age:'20'
      },
      {
        firstName:'Dave',
        lastName:'G',
        age:'25'
      },
      {
        firstName:'Pete',
        lastName:'L',
        age:'23'
      }
    ],
    _games: [
      {
        opponent: 'Stars',
        teamPoints: 76,
        opponentPoints:75
      },
      {
        opponent: 'Leaves',
        teamPoints: 58,
        opponentPoints:60
      },
      {
        opponent: 'Twigs',
        teamPoints:90,
        opponentPoints:89
      }
    ],
  
    get players(){
        return this._players
    },
  
    get games(){
      return this._games
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this.players.push(player);
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76),
  
  console.log(team.players);
  
  team.addGame('Titans', 100, 98),
  
  console.log(team.games);