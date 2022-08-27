
let hr=0;
let min=0;
let sec=0;
let displaysec=0;
let displaymin=0;
let displayhr=0;
let state="stopped";
let interval=null;



function timecycle(){
    sec++;
    if(sec/60===1){
        min++;
        sec=0;
    
    if(min==60){
        hr=hr+1;
        min=0;
        sec=0;
    }
}
    if(sec<10||sec==0){
        displaysec="0"+sec.toString();
    }
    else{
        displaysec=sec;
    }
    if(min<10||min==0){
        displaymin="0"+min.toString();
    }
    else{
        displaymin=min;
    }
    if(hr<10||hr==0){
       displayhr ="0"+hr.toString();
    }
    else{
        displayhr=hr;
    }
    document.getElementById("stopwatch").innerHTML=displayhr+':'+displaymin+':'+displaysec;
 }


function startTimer(){
    if(state==="stopped"){ //off
        //timecycle();
        interval=window.setInterval(timecycle,1000);
      // document.getElementById("start").innerHTML="Started";
        state="started"; //on
        
    }
    
    }
    function pauseTimer(){
if(state==="started"){
    window.clearInterval(interval);
   // document.getElementById("start").innerHTML="Start";
    state="stopped";
}
    }
    function resetTimer(){
       window.clearInterval(interval);
        displayhr=0;
        displaymin=0;
        displaysec=0;
        sec=0;
        min=0;
        hr=0;
        document.getElementById("stopwatch").innerHTML="00:00:00";
        
    }