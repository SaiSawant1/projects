const leftArrow=document.querySelector(".left-arrow")
const rightArrow=document.querySelector(".right-arrow")
const slides=document.querySelectorAll('.slide ')
const body=document.querySelector('body')

rightArrow.addEventListener('click',()=>{
    let lastIndex=0
    slides.forEach((slide,indx)=>{
        if(slide.classList.contains('active')){
            slide.classList.remove('active');
            lastIndex=indx
        }
    })
    const nextSlide=slides[(lastIndex+1)%slides.length]
    nextSlide.classList.add('active')
    body.style.backgroundImage=nextSlide.style.backgroundImage

})
leftArrow.addEventListener('click',()=>{
    let lastIndex=0
    slides.forEach((slide,indx)=>{
        if(slide.classList.contains('active')){
            slide.classList.remove('active');
            lastIndex=indx
        }
    })
    if(lastIndex==0){
        lastIndex=slides.length
    }
    const nextSlide=slides[(lastIndex-1)%slides.length]
    nextSlide.classList.add('active')
    body.style.backgroundImage=nextSlide.style.backgroundImage

})