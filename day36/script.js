const smallBoxes=document.querySelectorAll(".small-box")

const rand=()=>(Math.floor(Math.random()*255))

smallBoxes.forEach(box=>{
    box.addEventListener("mouseenter",()=>{
        box.style.backgroundColor=`rgb(${rand()},${rand()},${rand()})`
    })
    box.addEventListener("mouseleave",()=>{
        setTimeout(()=>{
            box.style.backgroundColor=`rgb(62, 59, 59)`
        },2000)
        
    })
})
