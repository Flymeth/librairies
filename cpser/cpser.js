let input_timer=document.querySelector(".timer"),btn_clicker=document.querySelector(".clicker"),btn_starter=document.querySelector(".starter"),btn_restarter=document.querySelector(".restarter"),timer=document.querySelectorAll(".clock"),result=document.querySelectorAll(".result"),clicked=document.querySelectorAll(".clicks"),options={defaultTimerValue:10,minTimerValue:3,maxTimerValue:20,timerSteps:1,resultArrounds:.1},time=0,clicks=0,started=!1,cps=0,timerStarted=!1,canRestart=!1,selector='meta[name="cpserOptions"]';function reload(){let t=document.querySelector(selector);if(t)for(var r in t=document.querySelector(selector).getAttribute("content").split(","),t){if(isNaN(r))return;var i=t[r].split("=")[0].replace(" ","");let e=t[r].split("=")[1].replace(" ","");parseFloat(e)&&(e=parseFloat(e)),options[i]&&(options[i]=e)}else console.log("Can't get the cps game's options. Default options taked !");options.minTimerValue>=options.maxTimerValue&&(options.minTimerValue=options.maxTimerValue-1),options.defaultTimerValue>options.maxTimerValue&&(options.defaultTimerValue=options.maxTimerValue),options.defaultTimerValue<options.minTimerValue&&(options.defaultTimerValue=options.minTimerValue),input_timer.setAttribute("type","number"),input_timer.setAttribute("min",options.minTimerValue),input_timer.setAttribute("max",options.maxTimerValue),input_timer.removeEventListener("change",getTimer),btn_clicker.removeEventListener("click",score),btn_starter.removeEventListener("click",start),btn_restarter.removeEventListener("click",restart),input_timer.addEventListener("change",getTimer),btn_clicker.addEventListener("click",score),btn_starter.addEventListener("click",start),btn_restarter.addEventListener("click",restart),time=options.defaultTimerValue,setTimer(time),setResult(0),reset(),console.log("This website use cpser to display your cps ! Check cpser.tk for more informations !")}function getTimer(){return input_timer.value?(time=input_timer.value,setTimer(checkTimer())):(time=options.defaultTimerValue,setTimer(time))}function setTimer(t){timer.forEach(e=>e.innerHTML=t)}function checkTimer(){return time>options.maxTimerValue&&(time=options.maxTimerValue),time<options.minTimerValue&&(time=options.minTimerValue),time}function score(){timerStarted&&(clicks++,setScore())}function start(){started||(started=!0,document.body.classList.add("cps_started"),btn_restarter.innerHTML="RESTART",startTimer(checkTimer()),btn_starter.classList.contains("clicker")&&setScore(1))}function startTimer(t){let e=setInterval(()=>{if(started){if((t-=options.timerSteps)<=0)return clearInterval(e),setTimer(0),void end();{let e=0;options.timerSteps.toString().split(".")[1]&&(e=options.timerSteps.toString().split(".")[1].split("0").length),setTimer(t.toFixed(e))}timerStarted=!0,canRestart=!0}else clearInterval(e)},1e3*options.timerSteps)}function end(){timerStarted=!1,document.body.classList.replace("cps_started","cps_ended"),cps=+clicks/options.defaultTimerValue,setResult(cps)}function restart(){canRestart&&(started=!1,canRestart=!1,stopTimer(),reset())}function reset(){document.body.classList.remove("cps_ended"),setResult(clicks=0),btn_starter.innerHTML="START",btn_clicker.innerHTML="CLICKER",getTimer()}function stopTimer(){timerStarted=!1}function setScore(e){e&&(clicks=e),clicked.forEach(e=>e.innerHTML=clicks)}function setResult(t){let r=0;options.resultArrounds.toString().split(".")[1]&&(r=options.resultArrounds.toString().split(".")[1].split("0").length),result.forEach(e=>e.innerHTML=t.toFixed(r))}reload();