//Player and Stat Initializations


function createPlayer(playerNumber, playerName, playerTeam) {
    var player = {};
    player.name = playerName;
    player.number = playerNumber;
    player.team = playerTeam;
    
    console.log(player.name + " is number " + player.number + " on " + player.team);
    
    player.points = 0;
    player.fgAttempts = 0;
    player.fgMade = 0;
    player.fgPercentage = Math.round(player.fgMade / player.fgAttempts * 100) + "%";
    player.threeAttempts = 0;
    player.threeMade = 0;
    player.threePercentage = Math.round(player.threeMade / player.threeAttempts * 100) + "%";
    player.ftAttempts = 0;
    player.ftMade = 0;
    player.ftPercentage = Math.round(player.ftMade / player.ftAttempts * 100) + "%";
    player.assists = 0;
    player.defRebounds = 0;
    player.offRebounds = 0;
    player.totalRebounds = player.defRebounds + player.offRebounds;
    player.blocks = 0;
    player.steals = 0;
    player.fouls = 0;
    player.turnover = 0;
    
    return player;
  }
  
  var playerA1 = createPlayer(0, "Damian Lillard", "Team A");
  var playerA2 = createPlayer(2, "PlayerA2", "Team A");
  var playerA3 = createPlayer(3, "PlayerA3", "Team A");
  var playerA4 = createPlayer(4, "PlayerA4", "Team A");
  var playerA5 = createPlayer(5, "PlayerA5", "Team A");
  var playerA6 = createPlayer(6, "PlayerA6", "Team A");
  var playerA7 = createPlayer(7, "PlayerA7", "Team A");
  var playerA8 = createPlayer(8, "PlayerA8", "Team A");
  var playerA9 = createPlayer(9, "PlayerA9", "Team A");
  var playerA10 = createPlayer(10, "PlayerA10", "Team A");
  var playerA11 = createPlayer(11, "PlayerA11", "Team A");
  var playerA12 = createPlayer(12, "PlayerA12", "Team A");
  
  var playerB1 = createPlayer(1, "PlayerB1", "Team B");
  var playerB2 = createPlayer(2, "PlayerB2", "Team B");
  var playerB3 = createPlayer(3, "PlayerB3", "Team B");
  var playerB4 = createPlayer(4, "PlayerB4", "Team B");
  var playerB5 = createPlayer(5, "PlayerB5", "Team B");
  var playerB6 = createPlayer(6, "PlayerB6", "Team B");
  var playerB7 = createPlayer(7, "PlayerB7", "Team B");
  var playerB8 = createPlayer(8, "PlayerB8", "Team B");
  var playerB9 = createPlayer(9, "PlayerB9", "Team B");
  var playerB10 = createPlayer(10, "PlayerB10", "Team B");
  var playerB11 = createPlayer(11, "PlayerB11", "Team B");
  var playerB12 = createPlayer(12, "PlayerB12", "Team B");
  
  
  
  
  // Stat Actions
  
  function recordEvent(event, player) {
     
     player = playerA1
       
     switch (event) {
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
         break;  */
         
     }
    
  }
  
  