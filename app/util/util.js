const server = 'http://localhost:1337/api/puzzles';
//can retrieve a puzzle from a treasure hunt, all puzzles in a treasure hunt, or all puzzles
export var retrievePuzzles = (treasureHuntTitle = null, riddleTitle = null, cb = null) => {
  var serverPath = server; //create a local instance of server
  if(typeof treasureHuntTitle === 'function')
    cb = treasureHuntTitle, treasureHuntTitle = null;
  if(typeof riddleTitle === 'function')
    cb = riddleTitle, riddleTitle = null;
  if(treasureHuntTitle !== null) {
    serverPath += `/${treasureHuntTitle.replace(/\s/g, '%20')}`;
    if(riddleTitle !== null)
      serverPath += `/${riddleTitle.replace(/\s/g, '%20')}`;
  } fetch(serverPath, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}})
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));};
//should take an array of puzzle objects, will then stringify before sending. 
export var createPuzzles = (puzzleArray = [], cb = null) => {
  fetch(server, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}, 
    body: JSON.stringify(puzzleArray)})
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));};
//can delete a puzzle from a treasure hunt, all puzzles in a treasure hunt, or all puzzles
export var deletePuzzles = (treasureHuntTitle = null, riddleTitle = null, cb = null) => {
  var serverPath = server; //create a local instance of server
  if(typeof treasureHuntTitle === 'function')
    cb = treasureHuntTitle, treasureHuntTitle = null;
  if(typeof riddleTitle === 'function')
    cb = riddleTitle, riddleTitle = null;
  if(treasureHuntTitle !== null) {
    serverPath += `/${treasureHuntTitle.replace(/\s/g, '%20')}`;
    if(riddleTitle !== null)
      serverPath += `/${riddleTitle.replace(/\s/g, '%20')}`;
  } fetch(serverPath, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'}})
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));};