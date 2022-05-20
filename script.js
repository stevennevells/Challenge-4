
var startBtn = document.createElement("button");
var crct = document.createElement("correctAnswers");
var incrct = document.createElement("incorrectAnswers");

startBtn.innerHTML = "Begin Quiz";
startBtn.onclick = function () {
        alert("Let's begin!");
        window.location.href = "question1.html";
};

document.body.appendChild(startBtn);


function crctans(){
    alert("That is correct!!");
    
    location.href="question2.html";

    };



 function incrctans(){
    alert("Sorry, that is incorrect");
        location.href="question2.html";
    
 };

 

function crctans2(){
    alert("That is correct!!");
    
    location.href="question3.html";

    };



 function incrctans2(){
    alert("Sorry, that is incorrect");
        location.href="question3.html";
    
 };



 function crctans3(){
    alert("That is correct!!");
    
    location.href="scoreboard.html";

    };



 function incrctans3(){
    alert("Sorry, that is incorrect");
        location.href="scoreboard.html";
    
 };




