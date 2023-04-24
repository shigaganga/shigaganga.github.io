window.onload=function(){
    var seconds=00;
    var tens=00;
    var appendTens=document.getElementById("Tens");
    var appendSeconds=document.getElementById("Seconds");
   var startButton=document.getElementById("Start");
   var stopButton=document.getElementById("Stop");
   var resetButton=document.getElementById("Reset");
   var interval;
   startButton.onclick=function(){
    interval=setInterval(startTimer,2);
   }
   stopButton.onclick=function(){
    clearInterval(interval);
   }
   resetButton.onclick=function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendTens.innerHTML=tens;
    appendSeconds.innerHTML=seconds;
   }
   function startTimer(){
    tens++;
    if(tens<=9){
        appendTens.innerHTML="0"+tens;
       // console.log(tens+"one");
    }
    if(tens>=9){
        appendTens.innerHTML=tens;
        //console.log(tens+"Two");
    }
    if(tens>=99){
    seconds++;
    appendSeconds.innerHTML="0"+seconds;
   // console.log(tens+"Three");
    tens=0;
    appendTens.innerHTML="0"+0;
   }
   if(seconds<=9){
    appendSeconds.innerHTML="0"+seconds;
   }if(seconds>9){
    appendSeconds.innerHTML=seconds;
   }
   }
   }