const loveMe=document.querySelector('.loveMe')
const times=document.querySelector('span')

let clickTime=0;
loveMe.addEventListener('click',(e)=>{
    if(clickTime===0){
        clickTime=new Date().getTime()
    }else{
        if((new Date().getTime()-clickTime)<800){
            createHeart(e)
            clickTime=0
        }
        else{
            clickTime=new Date().getTime()  
        }
    }
})
function createHeart(e){
    const heart=document.createElement('i')
    heart.classList.add('fa-heart');
    heart.classList.add('fas')

    const x=e.clientX
    const y=e.clientY

    const leftOffset=e.target.offsetLeft
    const topOffset=e.target.offsetTop

    const xInside=x-leftOffset
    const yInside=y-topOffset

    heart.style.top=`${yInside}px`
    heart.style.left=`${xInside}px`

    loveMe.appendChild(heart)
}