const bodyElm=document.querySelector("body");
bodyElm.addEventListener("mousemove",(event)=>{
   const spanX=event.offsetX;
   const spanY=event.offsetY;
   const spanElm=document.createElement("span");
   spanElm.style.left=spanX+"px";
   spanElm.style.top=spanY+"px";
   const size=Math.random()*100;
   spanElm.style.width=size+"px";
   spanElm.style.height=size+"px";
   bodyElm.appendChild(spanElm);
    setTimeout(()=>{
        spanElm.remove(); 
    },3000);
   
});