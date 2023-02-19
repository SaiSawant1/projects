const btns=document.querySelectorAll('.btn')
const faqs=document.querySelectorAll('.faq')

btns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        faqs[idx].classList.toggle('active');
    })
})

