const server = 'http://localhost:1337/api/puzzles';
//can retrieve a puzzle from a treasure hunt, all puzzles in a treasure hunt, or all puzzles

export var retrievePuzzles = (treasureHuntTitle = null, riddleTitle = null, cb = null) => {
  var serverPath = server; //create local server variable that can be modified

  //check for cb, lets user just put cb instead of nulls infront for riddleTitle and treasureHuntTitle
  if(typeof treasureHuntTitle === 'function')
    cb = treasureHuntTitle, 
    treasureHuntTitle = null;
  if(typeof riddleTitle === 'function')
    cb = riddleTitle, 
    riddleTitle = null;
  if(treasureHuntTitle !== null) {
    serverPath += `/${treasureHuntTitle.replace(/\s/g, '%20')}`;
    if(riddleTitle !== null)
      serverPath += `/${riddleTitle.replace(/\s/g, '%20')}`;
  } 

  //HTTP GET request
  fetch(serverPath, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};

//should take an array of puzzle objects, will then stringify before sending. 
export var createPuzzles = (puzzleArray = [], cb = null) => {
  //HTTP POST request
  fetch(server, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}, 
    body: JSON.stringify(puzzleArray)
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};

//can delete a puzzle from a treasure hunt, all puzzles in a treasure hunt, or all puzzles
export var deletePuzzles = (treasureHuntTitle = null, riddleTitle = null, cb = null) => {
  var serverPath = server; //create local server variable that can be modified

  //check for cb, lets user just put cb instead of nulls infront for riddleTitle and treasureHuntTitle
  if(typeof treasureHuntTitle === 'function')
    cb = treasureHuntTitle, 
    treasureHuntTitle = null;
  if(typeof riddleTitle === 'function')
    cb = riddleTitle, 
    riddleTitle = null;
  if(treasureHuntTitle !== null) {
    serverPath += `/${treasureHuntTitle.replace(/\s/g, '%20')}`;
    if(riddleTitle !== null)
      serverPath += `/${riddleTitle.replace(/\s/g, '%20')}`;
  } 

  //HTTP DELETE request
  fetch(serverPath, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};
