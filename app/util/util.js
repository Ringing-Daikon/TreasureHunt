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
