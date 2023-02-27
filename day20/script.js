const buttons=document.querySelectorAll('.ripple');
 buttons.forEach(button=>{
    button.addEventListener('click',function (e){
        const x=e.clientX
        const y=e.clientY
        const buttonTop = e.target.offsetTop
        const buttonLeft=e.target.offsetLeft

        const Xinside=x-buttonLeft
        const Yinside=y-buttonTop

        const circle=document.createElement('span')
        circle.classList.add('circle');
        circle.style.top=Yinside + 'px'
        circle.style.left=Xinside + "px"

        this.appendChild(circle)

        setTimeout(()=>circle.remove,500)
    })
 })

