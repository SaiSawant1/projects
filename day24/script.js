const header=document.getElementById('header')
const title=document.getElementById('title')
const excerpt=document.getElementById('excerpt')
const profile_img=document.getElementById('profile_img')
const authorName=document.getElementById('name')
const date=document.getElementById('date')

const animated_bgs=document.querySelectorAll('.animated-bg')
const animated_bgs_text=document.querySelectorAll('.animated-bg-text')

setTimeout(()=>{
    getData()
},3000)

function getData() {
    header.innerHTML='<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt=""></img>'

    title.innerHTML='Lorem ipsum dolor sit amet.'

    excerpt.innerHTML='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nihil.'

    profile_img.innerHTML='<img src="https://randomuser.me/api/portraits/men/45.jpg" alt=""></img>'

    authorName.innerHTML='Sai sawant'

    date.innerHTML='Oct 08, 2020'

    animated_bgs.forEach(bg=>{
        bg.classList.remove('animated-bg')
    })
    animated_bgs.forEach(bg=>{
        bg.classList.remove('animated-bg-text')
    })
}

