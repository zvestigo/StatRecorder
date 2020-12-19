//Team, Player & Stat Initializations

function createTeam (teamName) {
  var team = {
    name: teamName,
    players: []
  }
  
  function createPlayer (playerNumber, playerName, indexNum) {
    var player = {
      name: playerName,
      number: playerNumber,
      tag: teamName.substr(teamName.length - 1) + (indexNum + 1),

      points: 0,
      fgMade: 0,
      fgAttempts: 0,
      threeMade: 0,
      threeAttempts: 0,
      ftMade: 0,
      ftAttempts: 0,
      defRebounds: 0,
      offRebounds: 0,
      assists: 0,
      blocks: 0,
      steals: 0,
      fouls: 0,
      turnovers: 0
    }; 
    
    console.log(player.name + " on " + team.name + " is number " + player.number);
    console.log(player.tag); 
    
    team.players[indexNum] = player;
  }
  
  createPlayer(1, "Player 1", 0);
  createPlayer(2, "Player 2", 1);
  createPlayer(3, "Player 3", 2);
  createPlayer(4, "Player 4", 3);
  createPlayer(5, "Player 5", 4);
  createPlayer(6, "Player 6", 5);
  createPlayer(7, "Player 7", 6);
  createPlayer(8, "Player 8", 7);
  createPlayer(9, "Player 9", 8);
  createPlayer(10, "Player 10", 9);
  createPlayer(11, "Player 11", 10);
  createPlayer(12, "Player 12", 11);
  
  return team;
}

var teamA = createTeam("Team A");
var teamB = createTeam("Team B");



// Box Score Fill

var boxScoreA = document.getElementById("box-score-A");
var boxScoreB = document.getElementById("box-score-B");

function fillStats() {

  function fixPercent(stat) {
    if (stat.innerText == "NaN%") {
      stat.innerText = "n/a";
    } else {
      stat.innerText = stat.innerText;
    }
  }
  
  function fillBoxScoreA() {
    for (var x = 0; x < 12; x++) {
    var playerObj = teamA.players[x];

    var boxScoreRow = boxScoreA.insertRow(x + 1);
    var boxScoreNumber = boxScoreRow.insertCell(0);
    boxScoreNumber.innerText = playerObj.number;
    var boxScoreName = boxScoreRow.insertCell(1);
    boxScoreName.innerText = playerObj.name;
    var boxScorePoints = boxScoreRow.insertCell(2);
    boxScorePoints.innerText = playerObj.points;
    var boxScoreFGM = boxScoreRow.insertCell(3);
    boxScoreFGM.innerText = playerObj.fgMade;
    var boxScoreFGA = boxScoreRow.insertCell(4);
    boxScoreFGA.innerText = playerObj.fgAttempts;
    var boxScoreFGPercent = boxScoreRow.insertCell(5);
    boxScoreFGPercent.innerText = Math.round(playerObj.fgMade / playerObj.fgAttempts * 100) + "%";
    var boxScore3PM = boxScoreRow.insertCell(6);
    boxScore3PM.innerText = playerObj.threeMade;
    var boxScore3PA = boxScoreRow.insertCell(7);
    boxScore3PA.innerText = playerObj.threeAttempts;
    var boxScore3PPercent = boxScoreRow.insertCell(8);
    boxScore3PPercent.innerText = Math.round(playerObj.threeMade / playerObj.threeAttempts * 100) + "%";
    var boxScoreFTM = boxScoreRow.insertCell(9);
    boxScoreFTM.innerText = playerObj.ftMade;
    var boxScoreFTA = boxScoreRow.insertCell(10);
    boxScoreFTA.innerText = playerObj.ftAttempts;
    var boxScoreFTPercent = boxScoreRow.insertCell(11);
    boxScoreFTPercent.innerText = Math.round(playerObj.ftMade / playerObj.ftAttempts * 100) + "%";
    var boxScoreDReb = boxScoreRow.insertCell(12);
    boxScoreDReb.innerText = playerObj.defRebounds;
    var boxScoreOReb = boxScoreRow.insertCell(13);
    boxScoreOReb.innerText = playerObj.offRebounds;
    var boxScoreReb = boxScoreRow.insertCell(14);
    boxScoreReb.innerText = playerObj.defRebounds + playerObj.offRebounds;
    var boxScoreAst = boxScoreRow.insertCell(15);
    boxScoreAst.innerText = playerObj.assists;
    var boxScoreBlk = boxScoreRow.insertCell(16);
    boxScoreBlk.innerText = playerObj.blocks;
    var boxScoreStl = boxScoreRow.insertCell(17);
    boxScoreStl.innerText = playerObj.steals;
    var boxScoreFl = boxScoreRow.insertCell(18);
    boxScoreFl.innerText = playerObj.fouls;
    var boxScoreTO = boxScoreRow.insertCell(19);
    boxScoreTO.innerText = playerObj.turnovers;
    
    fixPercent(boxScoreFGPercent);
    fixPercent(boxScore3PPercent);
    fixPercent(boxScoreFTPercent);
    }
  }
  fillBoxScoreA();

  function fillBoxScoreB() {
    for (var x = 0; x < 12; x++) {
    var playerObj = teamB.players[x];

    var boxScoreRow = boxScoreB.insertRow(x + 1);
    var boxScoreNumber = boxScoreRow.insertCell(0);
    boxScoreNumber.innerText = playerObj.number;
    var boxScoreName = boxScoreRow.insertCell(1);
    boxScoreName.innerText = playerObj.name;
    var boxScorePoints = boxScoreRow.insertCell(2);
    boxScorePoints.innerText = playerObj.points;
    var boxScoreFGM = boxScoreRow.insertCell(3);
    boxScoreFGM.innerText = playerObj.fgMade;
    var boxScoreFGA = boxScoreRow.insertCell(4);
    boxScoreFGA.innerText = playerObj.fgAttempts;
    var boxScoreFGPercent = boxScoreRow.insertCell(5);
    boxScoreFGPercent.innerText = Math.round(playerObj.fgMade / playerObj.fgAttempts * 100) + "%";
    var boxScore3PM = boxScoreRow.insertCell(6);
    boxScore3PM.innerText = playerObj.threeMade;
    var boxScore3PA = boxScoreRow.insertCell(7);
    boxScore3PA.innerText = playerObj.threeAttempts;
    var boxScore3PPercent = boxScoreRow.insertCell(8);
    boxScore3PPercent.innerText = Math.round(playerObj.threeMade / playerObj.threeAttempts * 100) + "%";
    var boxScoreFTM = boxScoreRow.insertCell(9);
    boxScoreFTM.innerText = playerObj.ftMade;
    var boxScoreFTA = boxScoreRow.insertCell(10);
    boxScoreFTA.innerText = playerObj.ftAttempts;
    var boxScoreFTPercent = boxScoreRow.insertCell(11);
    boxScoreFTPercent.innerText = Math.round(playerObj.ftMade / playerObj.ftAttempts * 100) + "%";
    var boxScoreDReb = boxScoreRow.insertCell(12);
    boxScoreDReb.innerText = playerObj.defRebounds;
    var boxScoreOReb = boxScoreRow.insertCell(13);
    boxScoreOReb.innerText = playerObj.offRebounds;
    var boxScoreReb = boxScoreRow.insertCell(14);
    boxScoreReb.innerText = playerObj.defRebounds + playerObj.offRebounds;
    var boxScoreAst = boxScoreRow.insertCell(15);
    boxScoreAst.innerText = playerObj.assists;
    var boxScoreBlk = boxScoreRow.insertCell(16);
    boxScoreBlk.innerText = playerObj.blocks;
    var boxScoreStl = boxScoreRow.insertCell(17);
    boxScoreStl.innerText = playerObj.steals;
    var boxScoreFl = boxScoreRow.insertCell(18);
    boxScoreFl.innerText = playerObj.fouls;
    var boxScoreTO = boxScoreRow.insertCell(19);
    boxScoreTO.innerText = playerObj.turnovers;
    
    fixPercent(boxScoreFGPercent);
    fixPercent(boxScore3PPercent);
    fixPercent(boxScoreFTPercent);
    }
  }
  fillBoxScoreB();
}

fillStats();

function refreshStats() {
  
  function fixPercent(stat) {
    if (stat.innerText == "NaN%") {
      stat.innerText = "n/a";
    } else {
      stat.innerText = stat.innerText;
    }
  }
  
  function refreshBoxScoreA() {
    for (var x = 0; x < 12; x++) {
    var playerObj = teamA.players[x];
    
    var boxScoreRow = boxScoreA.rows[x + 1];
    var boxScoreNumber = boxScoreRow.cells[0];
    boxScoreNumber.innerText = playerObj.number;
    var boxScoreName = boxScoreRow.cells[1];
    boxScoreName.innerText = playerObj.name;
    var boxScorePoints = boxScoreRow.cells[2];
    boxScorePoints.innerText = playerObj.points;
    var boxScoreFGM = boxScoreRow.cells[3];
    boxScoreFGM.innerText = playerObj.fgMade;
    var boxScoreFGA = boxScoreRow.cells[4];
    boxScoreFGA.innerText = playerObj.fgAttempts;
    var boxScoreFGPercent = boxScoreRow.cells[5];
    boxScoreFGPercent.innerText = Math.round(playerObj.fgMade / playerObj.fgAttempts * 100) + "%";
    var boxScore3PM = boxScoreRow.cells[6];
    boxScore3PM.innerText = playerObj.threeMade;
    var boxScore3PA = boxScoreRow.cells[7];
    boxScore3PA.innerText = playerObj.threeAttempts;
    var boxScore3PPercent = boxScoreRow.cells[8];
    boxScore3PPercent.innerText = Math.round(playerObj.threeMade / playerObj.threeAttempts * 100) + "%";
    var boxScoreFTM = boxScoreRow.cells[9];
    boxScoreFTM.innerText = playerObj.ftMade;
    var boxScoreFTA = boxScoreRow.cells[10];
    boxScoreFTA.innerText = playerObj.ftAttempts;
    var boxScoreFTPercent = boxScoreRow.cells[11];
    boxScoreFTPercent.innerText = Math.round(playerObj.ftMade / playerObj.ftAttempts * 100) + "%";
    var boxScoreDReb = boxScoreRow.cells[12];
    boxScoreDReb.innerText = playerObj.defRebounds;
    var boxScoreOReb = boxScoreRow.cells[13];
    boxScoreOReb.innerText = playerObj.offRebounds;
    var boxScoreReb = boxScoreRow.cells[14];
    boxScoreReb.innerText = playerObj.defRebounds + playerObj.offRebounds;
    var boxScoreAst = boxScoreRow.cells[15];
    boxScoreAst.innerText = playerObj.assists;
    var boxScoreBlk = boxScoreRow.cells[16];
    boxScoreBlk.innerText = playerObj.blocks;
    var boxScoreStl = boxScoreRow.cells[17];
    boxScoreStl.innerText = playerObj.steals;
    var boxScoreFl = boxScoreRow.cells[18];
    boxScoreFl.innerText = playerObj.fouls;
    var boxScoreTO = boxScoreRow.cells[19];
    boxScoreTO.innerText = playerObj.turnovers;

    fixPercent(boxScoreFGPercent);
    fixPercent(boxScore3PPercent);
    fixPercent(boxScoreFTPercent);
    }
  }
  refreshBoxScoreA();

  function refreshBoxScoreB() {
    for (var x = 0; x < 12; x++) {
    var playerObj = teamB.players[x];

    var boxScoreRow = boxScoreB.rows[x + 1];
    var boxScoreNumber = boxScoreRow.cells[0];
    boxScoreNumber.innerText = playerObj.number;
    var boxScoreName = boxScoreRow.cells[1];
    boxScoreName.innerText = playerObj.name;
    var boxScorePoints = boxScoreRow.cells[2];
    boxScorePoints.innerText = playerObj.points;
    var boxScoreFGM = boxScoreRow.cells[3];
    boxScoreFGM.innerText = playerObj.fgMade;
    var boxScoreFGA = boxScoreRow.cells[4];
    boxScoreFGA.innerText = playerObj.fgAttempts;
    var boxScoreFGPercent = boxScoreRow.cells[5];
    boxScoreFGPercent.innerText = Math.round(playerObj.fgMade / playerObj.fgAttempts * 100) + "%";
    var boxScore3PM = boxScoreRow.cells[6];
    boxScore3PM.innerText = playerObj.threeMade;
    var boxScore3PA = boxScoreRow.cells[7];
    boxScore3PA.innerText = playerObj.threeAttempts;
    var boxScore3PPercent = boxScoreRow.cells[8];
    boxScore3PPercent.innerText = Math.round(playerObj.threeMade / playerObj.threeAttempts * 100) + "%";
    var boxScoreFTM = boxScoreRow.cells[9];
    boxScoreFTM.innerText = playerObj.ftMade;
    var boxScoreFTA = boxScoreRow.cells[10];
    boxScoreFTA.innerText = playerObj.ftAttempts;
    var boxScoreFTPercent = boxScoreRow.cells[11];
    boxScoreFTPercent.innerText = Math.round(playerObj.ftMade / playerObj.ftAttempts * 100) + "%";
    var boxScoreDReb = boxScoreRow.cells[12];
    boxScoreDReb.innerText = playerObj.defRebounds;
    var boxScoreOReb = boxScoreRow.cells[13];
    boxScoreOReb.innerText = playerObj.offRebounds;
    var boxScoreReb = boxScoreRow.cells[14];
    boxScoreReb.innerText = playerObj.defRebounds + playerObj.offRebounds;
    var boxScoreAst = boxScoreRow.cells[15];
    boxScoreAst.innerText = playerObj.assists;
    var boxScoreBlk = boxScoreRow.cells[16];
    boxScoreBlk.innerText = playerObj.blocks;
    var boxScoreStl = boxScoreRow.cells[17];
    boxScoreStl.innerText = playerObj.steals;
    var boxScoreFl = boxScoreRow.cells[18];
    boxScoreFl.innerText = playerObj.fouls;
    var boxScoreTO = boxScoreRow.cells[19];
    boxScoreTO.innerText = playerObj.turnovers;

    fixPercent(boxScoreFGPercent);
    fixPercent(boxScore3PPercent);
    fixPercent(boxScoreFTPercent);
    }
  }
  refreshBoxScoreB();
}

function checkPlayer() {
  selectedPlayer = document.querySelector('input[name = "player"]:checked').value;
  
  for (var i = 0; i < 12; i++) {
    if (teamA.players[i].tag == selectedPlayer) {
      return teamA.players[i];
    }
   }
  for (var j = 0; j < 12; j++) {
    if (teamB.players[j].tag == selectedPlayer) {
      return teamB.players[j];
    }
   }
  }

function recordEvent() {   
  event.preventDefault();

  player = checkPlayer();
  var action = document.querySelector('input[name = "action"]:checked').value;

  switch (action) {
    case "2ptMade":
      player.points += 2;
      player.fgMade += 1;
      player.fgAttempts += 1;
      break;
    case "2ptMissed":
      player.fgAttempts += 1;
      break;
    case "3ptMade":
      player.points += 3;
      player.fgMade += 1;
      player.threeMade += 1;
      player.fgAttempts += 1;
      player.threeAttempts += 1;
      break;
    case "3ptMissed":
      player.fgAttempts += 1;
      player.threeAttempts += 1;
      break;
    case "ftMade":
      player.points += 1;
      player.ftMade += 1;
      player.ftAttempts += 1;
      break;
    case "ftMissed":
      player.ftAttempts += 1;
      break;
    case "Assist":
      player.assists += 1;
      break;
    case "defRebound":
      player.defRebounds += 1;
      break;
    case "offRebound":
      player.offRebounds += 1;
      break;
    case "block":
      player.blocks += 1;
      break;
    case "steal":
      player.steals += 1;
      break;
    case "foul":
      player.fouls += 1;
      break;
    case "turnover":
      player.turnovers += 1;
      break;
  
      /* 
    case "team turnover":
      break; 
      
    Add in tallying team totals
    Add in tallying shooting %s
      */
      
  }

  refreshStats();
}

var recordBtn = document.getElementById("recordBtn");

recordBtn.addEventListener('click', recordEvent);



// ---------- TESTING ------------



