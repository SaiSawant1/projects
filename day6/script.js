const boxes=document.querySelectorAll('.box')

window.addEventListener('scroll',check);

check()

function check() {
    const trigger=window.innerHeight/5*4;
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top
        if(trigger>boxTop){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}
