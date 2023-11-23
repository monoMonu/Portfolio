
const modeSwitch = document.querySelector(".mode-switch");
const firstPage = document.querySelector(".firstPage");
const r = document.querySelector(':root');


function changeMode(){
   
   if(modeSwitch.classList.contains("light")){
      r.style.setProperty("--theme1","#edf");
      r.style.setProperty("--theme2","#22222b");
      r.style.setProperty("--theme1","#edf");
   }
   else{
      r.style.setProperty("--theme2", "#22222b");
      r.style.setProperty("--theme1","#edf");
   }
}
modeSwitch.addEventListener("click", changeMode);


