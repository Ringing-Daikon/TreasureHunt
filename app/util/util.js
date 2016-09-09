const server = 'http://localhost:1337/api/puzzles';

export var retrievePuzzles = function(cb) {
  fetch(server, 
  {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(responseJson => {
    cb && cb(responseJson);
  })
  .catch(error => {
    console.error(error);
  });
};
//should take an array of puzzle objects, will then stringify before sending. 
export var createPuzzles = function(puzzleArray, cb) {
  fetch(server, 
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(puzzleArray)
  })
  .then(response => response.json())
  .then(responseJson => {
    cb && cb(responseJson);
  })
  .catch(error => {
    console.error(error);
  });
};

export var deletePuzzles = function(puzzleArray, cb) {
  fetch(server, 
  {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(responseJson => {
    cb && cb(responseJson);
  })
  .catch(error => {
    console.error(error);
  });
};

export var initializeDemo = function(cb) {
  fetch(server, 
  {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    /***Demo Data***/
    body: [
      {
        "next": "Advent",
        "treasureHuntTitle":"Market Mystery",
        "location":{
          "latitude":37.784991,
          "longitude":-122.406624
        },
        "riddleTitle":"Talking Points",
        "riddleContent":"Feeling chatty.",
        "riddleAnswer":"converse"
      },
      {
        "next":"Das Spiel",
        "previous": "Talking Points",
        "treasureHuntTitle":"Market Mystery",
        "location":{
          "latitude":37.784613,
          "longitude":-122.407617
        },
        "riddleTitle":"Advent",
        "riddleContent":"Birth of a man memorialized in song.",
        "riddleAnswer":"1836"
      },
      {
        "previous": "Advent",
        "treasureHuntTitle":"Market Mystery",
        "location":{
          "latitude":37.783523,
          "longitude":-122.4091
        },
        "riddleTitle":"Das Spiel",
        "riddleContent":"Find the cellar.",
        "riddleAnswer":"mikkeller"
      }
    ]
  })
  .then(response => response.json())
  .then(responseJson => {
    cb && cb(responseJson);
  })
  .catch(error => {
    console.error(error);
  });
};


