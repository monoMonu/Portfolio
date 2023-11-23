const modeSwitch = document.querySelector(".mode-switch");
const firstPage = document.querySelector(".firstPage");

document.write(9);

modeSwitch.addEventListener("click", changeMode());
function changeMode(){
   let root = document.querySelector(":root");
   let rv = getComputedStyle(root);
   document.write(9);
   if(modeSwitch.classList.contains("light")){
      rv.style.setProperty("--theme1","#edf");
      rv.style.setProperty("--theme2","#22222b");
      rv.style.setProperty("--theme1","#edf");
   }
   else{
      rv.style.setProperty("--theme1","#22222b");
      rv.style.setProperty("--theme2","#edf");
   }
}