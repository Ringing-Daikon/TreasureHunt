const SERVER = 'http://localhost:1337'
const PUZZLES_URL = SERVER + '/api/puzzles';
const USERS_URL =  SERVER + '/api/users';
const STD_HDR = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
//can retrieve a puzzle from a treasure hunt, all puzzles in a treasure hunt, or all puzzles


/***PUZZLE UTILITIES***/

export var retrievePuzzles = (treasureHuntTitle = null, riddleTitle = null, cb) => {
  var serverPath = PUZZLES_URL; //create local server variable that can be modified

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
    headers: STD_HDR
  })
  .then(response => response.json())
  .then(responseJson => cb(responseJson))
  .catch(error => console.error(error));
};

//should take an array of puzzle objects, will then stringify before sending. 
export var createPuzzles = (puzzleArray = [], cb = null) => {
  /*-----------------------------
       Puzzle Schema Reference:
  -------------------------------
  {
    treasureHuntTitle: String,
    next: {
      type: String,
      default: 'null' 
    }, 
    previous: {
      type: String,
      default: 'null' 
    }, 
    location: {
      latitude: Number,
      longitude: Number,
      name: String
    }, 
    radius: {
      type: Number,
      default: 100 
    }, 
    riddleTitle: String, 
    riddleContent: String,
    riddleAnswer: String 
  }
  -----------------------------*/

  //HTTP POST request
  fetch(PUZZLES_URL, {
    method: 'POST',
    headers: STD_HDR, 
    body: JSON.stringify(puzzleArray)
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};

//can delete a puzzle from a treasure hunt, all puzzles in a treasure hunt, or all puzzles
export var deletePuzzles = (treasureHuntTitle = null, riddleTitle = null, cb = null) => {
  var serverPath = PUZZLES_URL; //create local server variable that can be modified

  //check for cb, lets user just put cb instead of nulls infront for riddleTitle and treasureHuntTitle
  if(typeof treasureHuntTitle === 'function')
    cb = treasureHuntTitle, 
    treasureHuntTitle = null;
  if(typeof riddleTitle === 'function')
    cb = riddleTitle, 
    riddleTitle = null;
  if(treasureHuntTitle !== null) {
    path= `/${treasureHuntTitle.replace(/\s/g, '%20')}`;
    if(riddleTitle !== null)
      serverPath += `/${riddleTitle.replace(/\s/g, '%20')}`;
  } 

  //HTTP DELETE request
  fetch(serverPath, {
    method: 'DELETE',
    headers: STD_HDR
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};

/***USER UTILITIES***/

export var retrieveUsers = (username = null, cb) => {
  //check for cb, lets user just put cb instead of nulls infront for riddleTitle and treasureHuntTitle
  if(typeof username === 'function')
    cb = username, 
    username = null;

  //HTTP GET request
  fetch(username === null ? server : `${USERS_URL}/${username}`, {
    method: 'GET',
    headers: STD_HDR
  })
  .then(response => response.json())
  .then(responseJson => cb(responseJson))
  .catch(error => console.error(error));
};

export var createUser = (username, password, cb = null) => {
  //HTTP POST request
  fetch(`${USERS_URL}/${username}`, {
    method: 'POST',
    headers: STD_HDR, 
    body: JSON.stringify({
      username: username, 
      password: password
    })
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};

export var deleteUser = (username, cb = null) => {
  //HTTP DELETE request
  fetch(`${USERS_URL}/${username}`, {
    method: 'DELETE',
    headers: STD_HDR
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};

export var getUserSolvedRiddles = (username, cb) => {
  //HTTP GET request
  fetch(`${USERS_URL}/${username}/riddles`, {
    method: 'GET',
    headers: STD_HDR
  })
  .then(response => response.json())
  .then(responseJson => cb(responseJson))
  .catch(error => console.error(error));
};

export var addUserSolvedRiddle = (treasureHuntTitle, riddleTitle, cb = null) => {
  //HTTP POST request
  fetch(`${USERS_URL}/${username}/riddles`, {
    method: 'POST',
    headers: STD_HDR, 
    body: JSON.stringify({
      treasureHuntTitle: treasureHuntTitle, 
      riddleTitle: riddleTitle
    })
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};

export var checkPassword = (username, password, cb) => {
  //HTTP POST request
  fetch(`${USERS_URL}/${username}/pass`, {
    method: 'GET',
    headers: STD_HDR, 
    body: JSON.stringify({
      password: password
    })
  })
  .then(response => response.json())
  .then(responseJson => cb(responseJson))
  .catch(error => console.error(error));
};

export var updateUsernameOrPassword = (username = null, password = null, cb = null) => {
  let obj = {};
  if(username !== null) 
    obj.username = username;
  if(password !== null) 
    obj.password = password;  
  fetch(`${USERS_URL}/${username}`, {
    method: 'PUT',
    headers: STD_HDR, 
    body: JSON.stringify(obj)
  })
  .then(response => response.json())
  .then(responseJson => cb && cb(responseJson))
  .catch(error => console.error(error));
};
