const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');
const increase=document.getElementById('increase')
const decrease=document.getElementById('decrease')
const sizeSpan=document.getElementById('size')
let size=20;
let color='black'

let x
let y
let isPressed=false;

increase.addEventListener('click',()=>{
    size+=1;
    sizeSpan.innerHTML=`${size}`
})

decrease.addEventListener('click',()=>{
    size-=1;
    sizeSpan.innerHTML=`${size}`
})

canvas.addEventListener('mousedown',(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2=e.offsetX;
        const y2=e.offsetY;
      
        drawCricle(x2,y2);

        drawLine(x,y,x2,y2)

        x=x2;
        y=y2;
        
    }
})

canvas.addEventListener('mouseup',(e)=>{
    isPressed=false;
    x=undefined
    y=undefined;
})

function drawCricle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2,true);
    ctx.fillStyle=color;
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=size*2;
    ctx.stroke();

}

