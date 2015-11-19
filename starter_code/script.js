var userPoint = 0;
var aiPoint = 0;

function getAISelection() {
     var options= ["rock", "paper", "scissors"];
     var number= Math.floor(Math.random() * 3);
     return options[number];
}

// This function picks the winner (done)

function pickWinner(userValue, aiValue) {
    var winner= "draw";
    if (aiValue=="rock" && userValue=="scissors"){
        winner = "ai";
    } else
    if(aiValue== "paper" && userValue== "scissors"){
        winner = "user";
    } else  
    if(aiValue== "scissors" && userValue== "rock"){
        winner= "user";
    } else
    if(userValue== "paper" && aiValue== "rock"){
        winner= "user";
    } else
    if(userValue== "rock" && aiValue== "paper"){
        winner= "ai";
    } else
    if(userValue== "paper" && aiValue== "scissors"){
        winner= "ai";
    }
//TODO: pick the correct winner: user or ai (done)
    //TODO: Add one point for the winner
    
    return winner;
}

// This function sets the scoreboard with the correct points
function setScore() {
 $("#userPoint").text(userPoint);
 $("#aiPoint").text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    userPoint= userPoint + 1
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    aiPoint= aiPoint + 1
    }
    setScore()
}

// This function runs on page load (done)
$(document).ready(function(){
$(".token").click(evaluate) 
});
// Done with the game!!!! Style it tomorrow.