$( document ).ready(function(){
    var Random=Math.floor(Math.random()*(121-19)+19)
    // (Max - min + 1) + min
    // Computer guesses a random number for each game
    // Random number has to be between between 19 - 120
    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber id in the html doc
    //
    var crystal1= Math.floor(Math.random()*(13-1)+1)
    var crystal2= Math.floor(Math.random()*(13-1)+1)
    var crystal3= Math.floor(Math.random()*(13-1)+1)
    var crystal4= Math.floor(Math.random()*(13-1)+1)
    // (Max - min + 1) + min
    // Random number has to be between 1 - 12
    // Each jewel is assigned a random number
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
  $('#winsCounts').text(wins);
  $('#lossesCount').text(losses);
  //function to reset the ame
  function reset(){
        Random=Math.floor(Math.random()*(121-19)+19)
        console.log(Random)
        $('#randomNumber').text(Random);
        var crystal1= Math.floor(Math.random()*(13-1)+1);
        var crystal2= Math.floor(Math.random()*(13-1)+1);
        var crystal3= Math.floor(Math.random()*(13-1)+1);
        var crystal4= Math.floor(Math.random()*(13-1)+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        } 
  //adds the wins to the playerTotal

  function wohoo(){
  alert("You win!");
    wins++; 
    $('#winsCounts').text(wins);
    reset();
  }
  //addes the losses to the playerTotal
  function youLost(){
  alert ("You lost!");
    losses++;
    $('#lossesCount').text(losses);
    reset()
  }
  //on click events for each crystal
    $('#one').on ('click', function(){
      playerTotal = playerTotal + crystal1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            wohoo();
          }
          else if ( playerTotal > Random){
            youLost();
          }   
    })  
    $('#two').on ('click', function(){
      playerTotal = playerTotal + crystal2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            wohoo(); 
          }
          else if ( playerTotal > Random){
            youLost();
          } 
    })  
    $('#three').on ('click', function(){
      playerTotal = playerTotal + crystal3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);

      if (playerTotal == Random){
            wohoo();
          }
          else if ( playerTotal > Random){
            youLost();
          } 
    })  
    $('#four').on ('click', function(){
      playerTotal = playerTotal + crystal4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            wohoo();
          }
          else if ( playerTotal > Random){
            youLost();
          }
    });   
  }); 