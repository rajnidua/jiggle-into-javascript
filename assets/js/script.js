
var counter = 0;
var firstNumber = [] ;
var secondNumber = [];
var realAnswer;
var yourAnswer;
var questionCount=0;
var resultArray = [];
var id=null;

function grow(){
    document.getElementById("box").style.height="250px";
}

function blue(){
    document.getElementById("box").style.backgroundColor = "blue";
}

function fade(){
    document.getElementById("box").style.opacity="0.5";
}

function reset(){
    document.getElementById("box").style.height="150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.opacity = "1";
}

function mOver(obj){
    obj.innerHTML="Start->";
}

function mOut(obj){
    obj.innerHTML="ADDITION";
}


function generateTwoNumbers(){
    var number1,number2;
    var txt;
    number1=Math.floor(Math.random()*100);
    number2=Math.floor(Math.random()*100);
    var number3=number1+number2;
    questionCount=questionCount+1;
    realAnswer=number3;
    
    document.getElementById("answerFromUser").disabled=false;
    document.getElementById("submitButton").disabled=false;
    document.getElementById("demoQues1").disabled=false;
    document.getElementById("answerFromUser").value="";
    document.getElementById("showUsersAnswer").innerHTML="";
    document.getElementById("correctOrIncorrect").innerHTML="";
    document.getElementById("animate2").innerHTML="";
    document.getElementById("tickOrCross").innerHTML=resultArray;

    if(questionCount<=10 && questionCount>0){
        document.getElementById("demoQues").disabled='true';
        document.getElementById("questionCount").innerHTML="Questiont"+questionCount + ":  ";
        document.getElementById("numbersGenerated").innerHTML= + number1 + " + "+number2 + "?";
    }
    else{
        /* document.getElementById("questionCount").innerHTML="You have done 10 questions,press RESET to start all over again";*/
        document.getElementById("demoQues1").disabled=true; 
        alert("You have attempted 10 questions. Press RESET to start again");
    }
}

function answerFromUser(){
    var x;
    var txt;
    x=document.getElementById("answerFromUser").value;
    
    if (isNaN(x) || x < 0 || x=='') {
        alert("Invalid Input");
      } else {
        txt = "Input OK";
        document.getElementById("answerFromUser").disabled='true';
        document.getElementById("submitButton").disabled='true';
        yourAnswer=x;
        document.getElementById("showUsersAnswer").innerHTML="The value that you have enetered is " + x;
      }
    
}
 
function checkYourAnswer(){
    var finalStatement;
    
    if(realAnswer == yourAnswer){

        finalStatement = "Your Answer is CORRECT!!";
        resultArray[questionCount-1] = '<i style="color:darkgreen;" class="fas fa-check fa-2x"></i>';
        document.getElementById("tickOrCross").innerHTML=resultArray;
        document.getElementById("animate2").innerHTML='<i style="color:darkgreen;" class="far fa-smile fa-5x"></i>';
        
        
    }
    else{
        finalStatement = "Your Answer is NOT CORRECT!";
        resultArray[questionCount-1] ='<i style="color:red;" class="fas fa-times fa-2x"></i>';
        document.getElementById("tickOrCross").innerHTML=resultArray;
        document.getElementById("animate2").innerHTML='<i style="color:red;" class="far fa-frown fa-5x"></i>';
        
    }
    document.getElementById("correctOrIncorrect").innerHTML=finalStatement;
    myMove();
    
}

function resetQuestionCount(){
    questionCount=0;
    resultArray = [];  
    document.getElementById("tickOrCross").innerHTML=resultArray;
    document.getElementById("answerFromUser").value="";
    generateTwoNumbers();
}

function myMove(){
    var pos=0;
    clearInterval(id);
    id=setInterval(frame,8);
    function frame(){
        if(pos==200){
            clearInterval(id);
        }
        else{
            pos++;
            document.getElementById("animate2").style.bottom=pos+"px";
            document.getElementById("animate2").style.centre=pos+"px";
            
        }
    }

}
