const fill=document.querySelector('.fill');

const empties=document.querySelectorAll('.empty');

empties.forEach(empty=>{
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
    empty.addEventListener('dragover',dragOver)
})

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

function dragStart(){
    this.className+=" hold"
    setTimeout(()=>this.className="invisible",0)
}
function dragEnd(){
    this.className="fill"
    
}
function dragEnter(){
    e.preventDefault()
}
function dragLeave(){
    this.className="empty"
}
function dragDrop(){
    this.className='empty';
    this.append(fill)
    
}
function dragOver(e){
    e.preventDefault();
    this.className+=" hovered"

}