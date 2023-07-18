let i = 0;
let j = 0;
const body = document.getElementsByTagName("body")[0];
const letters = document.getElementsByTagName("h3");
const loadingTitle = document.getElementById("loading-title");
const menu = document.getElementById("menu");


const mainInterval = setInterval(() => {
  if (j == 6){
    menu.className = "visible";
  }
  j++;
}, 1000);


const loadingTitleInterval = setInterval(() => {
  if (i >= letters.length){
    if (i >= letters.length + 9){
      loadingTitle.className = "--scroll-to-nav"
      clearInterval(loadingTitleInterval);
      loadShadows();
    }
  } else {
    letters[i].style.opacity = 1;
  }

  i ++;
}, 100);

function loadShadows(){
  for (letter of letters){
    letter.style.textShadow = "5px 5px #e96161, 10px 10px #e96161";
  }
}

function test(){
 console.log("IT WORKDEDD") 
}
