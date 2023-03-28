const addBtn=document.getElementById('add')

addBtn.addEventListener('click',()=>{
    addNewNote()
})

const addNewNote=(text="hellow")=>{
    const note=document.createElement('div')
    note.classList.add('note')
    note.innerHTML=`<div class="tool">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
        </div>
        <div class="main ${text? "":"hidden"}"></div>
        <textarea class="${text? "hidden":""}"></textarea>`
    
    const editBtn=note.querySelector(".edit")
    const deleteBtn=note.querySelector(".delete")
    const main=note.querySelector(".main")
    const textArea=note.querySelector("textarea")
    
    textArea.value=text
    main.innerHTML=marked(text)

    deleteBtn.addEventListener('click',()=>{
        note.remove()
    })

    editBtn.addEventListener('click',()=>{
        main.classList.toggle('hidden')
        text.classList.toggle('hidden')
    })

    document.body.appendChild(note)
}
