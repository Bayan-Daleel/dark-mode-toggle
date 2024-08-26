const bodyElm=document.querySelector("body");
const inputElm=document.querySelector(".input");

inputElm.checked =JSON.parse(localStorage.getItem("mode"));
updatebody();

inputElm.addEventListener("input",()=>{
    updatebody();
    updateLocalstorge();
    
});
function updatebody(){
   if(inputElm.checked){
     bodyElm.style.background="black";
   }
   else{
    bodyElm.style.background="white";
   }
}

function updateLocalstorge(){
    localStorage.setItem("mode",JSON.stringify(inputElm.checked));
}