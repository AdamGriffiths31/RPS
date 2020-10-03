import React from 'react';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Rock Paper Scissors
        </p>
        <div>
        <div  id="Heart"><img alt="Heart" src="Images/Heart.png"></img><span id="Lives">5</span></div>
        </div>
      <div className="Scoreboard">
        <span className="BadgeUser">User</span>
        <span className="BadgeComputer">Comp</span>
        <span id="UserScore" >0</span>
        <span >:</span>
        <span id="ComputerScore">0</span>

      </div>
      <div className="Options">
      <div className="IndividualOption" id="Rock"><img alt="Rock" src="Images/Rock.png"></img></div>
      <div className="IndividualOption" id="Paper"><img alt="Paper" src="Images/Paper.png"></img></div>
      <div className="IndividualOption" id="Scissors"><img alt="Scissors" src="Images/Scissors.png"></img></div>
      </div>
      <div id="Result">Pick an Options</div>
      </header>
    </div>
  );
}
document.addEventListener('DOMContentLoaded', function () {
  const PaperDiv=document.getElementById("Paper");
  const RockDiv=document.getElementById("Rock");
  const ScissorsDiv=document.getElementById("Scissors");
  
  PaperDiv.addEventListener('click',function(){
    CalculateResult("Paper")
  })
  RockDiv.addEventListener('click',function(){
    CalculateResult("Rock")
  })
  ScissorsDiv.addEventListener('click',function(){
    CalculateResult("Scissors")
  })
});
  let userScore=0;
  let computerScore=0;

  function GetComputerOption(){
    const Options =["Rock","Paper","Scissors"];
    return Options[Math.floor(Math.random() * Options.length)];
  }

  function CalculateResult(UserOption){
    var ComputerOption=GetComputerOption();
    console.log(UserOption +' - '+ComputerOption)
    switch(UserOption+ComputerOption){
      case "PaperRock":
      case "RockScissors":
      case "ScissorsPaper":
        win(UserOption,ComputerOption);
      break;
      case"RockPaper":
      case"PaperScissors":
      case"ScissorsRock":
        Lose(UserOption,ComputerOption);
        break;
      case "RockRock":
      case"PaperPaper":
      case"ScissorsScissors":
        Draw()
        break;
    }
  }
  function Draw(){
    document.getElementById('Result').innerHTML = "It's a Draw.";
  }
  function win(UserOption,ComputerOption){
  userScore++;
  document.getElementById('UserScore').innerHTML = userScore;
  document.getElementById('Result').innerHTML = UserOption +" beats "+ComputerOption+", you win!";
  }
  function Lose(UserOption,ComputerOption){
  computerScore++;
  document.getElementById('ComputerScore').innerHTML = computerScore;
  document.getElementById('Result').innerHTML = ComputerOption +" beats "+UserOption+", you lose!";
  console.log("lose")
  UpdateScore(1)
  }
  function UpdateScore(value){
    console.log(document.getElementById('Lives').innerHTML)
    document.getElementById('Lives').innerHTML=document.getElementById('Lives').innerHTML-value;
    if(document.getElementById('Lives').innerHTML== 0){
      document.getElementById('Result').innerHTML ="You scored: "+document.getElementById('UserScore').innerHTML;
      document.getElementById('UserScore').innerHTML=0;
      document.getElementById('ComputerScore').innerHTML=0;
      document.getElementById('Lives').innerHTML=5;
      userScore=0;
      computerScore=0;
    }
  
  }
export default App;
