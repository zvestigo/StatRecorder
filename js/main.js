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
      
    team.players[indexNum] = player;
  }
  
  createPlayer(0, "Damian Lillard", 0);
  createPlayer(2, "Player2", 1);
  createPlayer(3, "Player3", 2);
  createPlayer(4, "Player4", 3);
  createPlayer(5, "Player5", 4);
  createPlayer(6, "Player6", 5);
  createPlayer(7, "Player7", 6);
  createPlayer(8, "Player8", 7);
  createPlayer(9, "Player9", 8);
  createPlayer(10, "Player10", 9);
  createPlayer(11, "Player11", 10);
  createPlayer(12, "Player12", 11);
  
  return team;
}

var teamA = createTeam("Team A");
var teamB = createTeam("Team B");



// Stat Actions

function recordEvent(action, selectedPlayer) {
     
     player = selectedPlayer;
  
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
    
  }




// ---------- TESTING ------------

recordEvent("2ptMade", teamA.players[2]); //player3 makes 2pointer
recordEvent("3ptMade", teamA.players[2]); //player3 makes 3pointer
recordEvent("2ptMissed", teamA.players[2]); //player 3 misses 2pointer

console.log(teamA.players[2].points); //returns 5
console.log(teamA.players[2].fgMade); //returns 2
console.log(teamA.players[2].fgAttempts); //return 3

recordEvent("ftMade", teamA.players[2]); //player3 makes FT
recordEvent("ftMissed", teamA.players[2]); //player3 misses FT
recordEvent("ftMissed", teamA.players[2]); //player3 misses FT

console.log(teamA.players[2].points); //returns 6
console.log(teamA.players[2].ftMade); //returns 1
console.log(teamA.players[2].ftAttempts); //return 3

console.log("test8");



