
const modeSwitch = document.querySelector(".mode-switch");
const firstPage = document.querySelector(".firstPage");
const filler = document.querySelector("#filler");
const r = document.querySelector(':root');


function changeMode(){
   // Explosion 
   filler.classList.add("explode");
   setTimeout(() => filler.classList.remove("explode"), 550);
   setTimeout(()=>{
      modeSwitch.classList.toggle("bi-brightness");
      modeSwitch.classList.toggle("bi-moon");

      if(modeSwitch.classList.contains("light")){
         r.style.setProperty("--theme1","#22222b");
         r.style.setProperty("--theme2","rgb(175, 175, 183)");
         r.style.setProperty("--theme3","#0ba284");
         r.style.setProperty("--trans-theme1","rgba(33, 33, 43, .7)");
         r.style.setProperty("--trans-theme2","rgba(240, 240, 255, .9)");
         modeSwitch.classList.remove("light");
      }
      else{
         r.style.setProperty("--theme1","rgb(175, 175, 183)");
         r.style.setProperty("--theme2", "#22222b");
         r.style.setProperty("--theme3","rgb(225, 48, 86)");
         r.style.setProperty("--trans-theme1","rgba(240, 240, 255, .5)");
         r.style.setProperty("--trans-theme2","rgba(33, 33, 43, .9)");
         modeSwitch.classList.add("light");
      }
   },100)
}
modeSwitch.addEventListener("click", changeMode);


const techStackBtn = document.querySelector("#techStackBtn");
const techStack = document.querySelector(".techStack");
const logos = document.querySelectorAll(".techStack img");
techStackBtn.addEventListener("click", showTechStack);
function showTechStack(){
   if(!techStack.classList.contains("showTechStack")){
     techStack.classList.add("showTechStack");
     logos.forEach((el, i)=>{
        setTimeout(()=>{
           el.style.opacity = 1;
           el.style.marginLeft = "0";
        },(i+1)*200);
     })
   }
   else{
     logos.forEach((el, i, arr)=>{
        setTimeout(()=>{
           el.style.opacity = 0;
           el.style.marginLeft = "1rem";
        },(arr.length-i)*200);
     })
     setTimeout(()=>techStack.classList.remove("showTechStack"),(logos.length+1)*200);
   }
}

// copy site Url
const copyLinkBtn = document.querySelector(".copyLinkBtn");
const copyTooltip = document.querySelector("#copyTooltip");
copyLinkBtn.addEventListener("click", copySiteUrl);
function copySiteUrl(){
  const urlField = document.querySelector("#urlField");
  urlField.value = window.location.href;
  urlField.select();
  navigator.clipboard.writeText(urlField.value);
  copyTooltip.style.display = "inline-block";
  setTimeout(()=>{
   copyTooltip.style.display = "none";
  },3000);
}
