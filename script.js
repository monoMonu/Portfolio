
const modeSwitch = document.querySelector(".mode-switch");
const firstPage = document.querySelector(".firstPage");
const r = document.querySelector(':root');


function changeMode(){
   
   if(modeSwitch.classList.contains("light")){
      r.style.setProperty("--theme1","rgb(175, 175, 183)");
      r.style.setProperty("--theme2", "#22222b");
      r.style.setProperty("--theme3","");
      r.style.setProperty("--trans-theme2","rgba(240, 240, 255, .5)");
      modeSwitch.classList.remove("light");
   }
   else{
      r.style.setProperty("--theme1","#22222b");
      r.style.setProperty("--theme2","rgb(175, 175, 183)");
      r.style.setProperty("--theme3","#0ba284");
      r.style.setProperty("--trans-theme2","rgba(33, 33, 43, .7)");
      modeSwitch.classList.add("light");
   }
}
modeSwitch.addEventListener("click", changeMode);


