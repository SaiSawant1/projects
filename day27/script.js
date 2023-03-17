const btn=document.getElementById('button')
const toasts=document.getElementById('toasts')
btn.addEventListener('click',()=>notificationGenerator())

let count=0;

const notificationGenerator=()=>{
    count++;
    const div =document.createElement('div');
    div.classList.add('toast')
    colorSelct(div)
    div.innerText=`notification ${count}`
    toasts.appendChild(div)
    
    
    setTimeout(()=>{
        toasts.innerHTML=``;
        count=0;
    },3000)
}

const colorSelct=(div)=>{
    let num=Math.floor(Math.random()*3)
    if(num===0){
        return div.classList.add('red')
    }
    else if(num===1){
        return div.classList.add('green')
    }
    else{
        return div.classList.add('white')
    }

}

