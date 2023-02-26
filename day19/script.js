const hour=document.querySelector('.hour')
const min=document.querySelector(".minute")
const sec=document.querySelector('.second')

const time=document.querySelector('.time')
const date=document.querySelector('.date')

const html=document.querySelector('html')

const darkMode=document.querySelector('.toggle')

setInterval(() => {
    clockWork()
},1000);


darkMode.addEventListener('click',()=>{
    html.classList.toggle('dark')
    if(html.classList.contains("dark")){
        darkMode.innerText='Ligth Mode'
    }
    else{
        darkMode.innerText='Dark Mode'
    }
})

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function clockWork(){
    const currentTime = new Date();

    rotateClockHands(currentTime)

    changeDates(currentTime)
    

}

function rotateClockHands(currentTime){
    const hours = currentTime.getHours().toString().padStart(2, '0') % 12;
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');

    min.style.transform=`translate(-50%,-100%) rotate(${scale(minutes,0,60,0,360)}deg)`
    sec.style.transform=`translate(-50%,-100%) rotate(${scale(seconds,0,60,0,360)}deg)`
    hour.style.transform=`translate(-50%,-100%) rotate(${scale(hours,0,12,0,360)}deg)`

    time.innerText=`${hours}:${minutes}:${seconds}`;
}

function changeDates(currentTime){
    const month=currentTime.getMonth()
    const day=currentTime.getDay()
    const today=currentTime.getDate()
    
    

    
    date.innerHTML=`${days[day]}, ${months[month]} <span class="circle">${today}</span>`
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}