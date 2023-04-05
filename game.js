// butten colours 
var buttonColors =["red","blue","yellow","green"];
// gamePatten
var gamePattern=[];
var userClickedPattern =[];
var level =0;
var started = false;

// create a random color 
function nextSequence(){
    userClickedPattern =[];
    level++
    $("h1").text("level " +level)
    var randomNumber = Math.floor( Math.random()*4);
    var randomChosenColour =buttonColors[randomNumber];
    // push to gamePatten
    gamePattern.push(randomChosenColour);
    console.log(gamePattern)
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}
// play sound
function playsound(name){
   var audio = new Audio("sounds/"+name+".mp3");
   audio.play();
}
// click function 
$("button").click(function () { 
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playsound(userChosenColour);
    animepress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
}); 
// animation for butten press
function animepress(currentColor) {
    $("#"+currentColor).addClass("pressed");
setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
},100)
}
// initial keyword
$(document).keypress(function () { 
if(!started){
$("h1").text("level " +level)
nextSequence()
started = true;
}});
$(document).on("touchstart", function() {
if(!started){

$("h1").text("level " +level)

nextSequence()

started = true;

}
  // handle touch start event

});
function checkAnswer(currentlevel){
  if (gamePattern[currentlevel]===userClickedPattern[currentlevel]) {
  if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function () { nextSequence() },1000
  )}}
  
  else{
    playsound("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {$("body").removeClass("game-over");}, 200);
    startOver() 
}}
function startOver() {
        level = 0;
        gamePattern = [];
        started = false;
 }
      
