const textArea=document.querySelector('#textarea')
const tagEl=document.querySelector('#tag')

textArea.focus()

textArea.addEventListener('keyup',(e)=>{
    createTag(e.target.value)
    if(e.key ==='Enter'){
        setTimeout(() => {
            e.target.value=''
        }, 10);

        randomSelect()
    }
    
})

function createTag(input){
    const tags=input.split(',').filter(tag=>tag.trim() !== '').map(tag=>tag.trim());

    tagEl.innerHTML=''
    tags.forEach(tag => {
        let span=document.createElement('span')
        span.innerText=tag
        span.classList.add('generated')
        tagEl.appendChild(span)
    });  
    
}

function randomSelect() {
    const times=30

    const interval=setInterval(() => {
        const randomTag=pickRnadomTag()

        highlight(randomTag)
        setTimeout(() => {
            removeHighlight(randomTag)
        }, 100);
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag=pickRnadomTag()
            highlight(randomTag)  
        }, 100);
        
    }, times*100);

}

function pickRnadomTag(){
    const generated=document.querySelectorAll('.generated')
    return generated[Math.floor(Math.random()*generated.length)]
}
function highlight(e){
    e.classList.add('winner')
}
function removeHighlight(e){
    e.classList.remove('winner')
}
