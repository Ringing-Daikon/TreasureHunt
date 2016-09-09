const server = 'http://localhost:1337/api/puzzles';

export var retrievePuzzles = (treasureHuntTitle = null, riddleTitle = null, cb = null) => {
  let server = this.server; //create a local instance of server
  if(typeof treaureHuntTitle === 'function')
    cb = treasureHuntTitle, treasureHuntTitle = null;
  if(typeof riddleTitle === 'function')
    cb = riddleTitle, riddleTitle = null;
  if(treasureHuntTitle !== null) {
    server += `/${treasureHuntTitle.replace(/\s/, '%20')}`;
    if(riddleTitle !== null)
      server += `/${riddleTitle.replace(/\s/, '%20')}`;
  }
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
export var createPuzzles = (puzzleArray = [], cb = null) => {
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

export var deletePuzzles = (treasureHuntTitle = null, riddleTitle = null, cb = null) => {
  let server = this.server; //create a local instance of server
  if(typeof treaureHuntTitle === 'function')
    cb = treasureHuntTitle, treasureHuntTitle = null;
  if(typeof riddleTitle === 'function')
    cb = riddleTitle, riddleTitle = null;
  if(treasureHuntTitle !== null) {
    server += `/${treasureHuntTitle.replace(/\s/, '%20')}`;
    if(riddleTitle !== null)
      server += `/${riddleTitle.replace(/\s/, '%20')}`;
  }
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