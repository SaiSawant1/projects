const imgs=document.getElementById("imgs")
const prev=document.getElementById("left")
const next=document.getElementById("right")

let shift=0
setInterval(()=>{
    imgs.style.transform=`translateX(-${shift}px)`
    shift=(shift>=2000) ? 0:shift+=500;
},2000)

prev.addEventListener("click",()=>shift-=1000)
next.addEventListener("click",()=>shift+=500)

