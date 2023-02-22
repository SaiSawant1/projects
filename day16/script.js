const smallCups=document.querySelectorAll('.cup-small');
const liters=document.querySelector('#liters');
const percentage=document.querySelector('#percentage');
const remained=document.querySelector('#remained');


smallCups.forEach((cup,indx)=>{
    cup.addEventListener('click',()=>{
        if(cup.classList.contains('full')){
            smallCups.forEach(cup=>{
                cup.classList.remove('full');
            })
        }
        for (let index = 0; index <= indx; index++) {
          smallCups[index].classList.add('full');
           updateValue();
        }
    })
});

const updateValue=()=>{
    const fullCups=document.querySelectorAll('.full').length;
    const totalCups=smallCups.length;

    if(fullCups==0){
        percentage.style.visibility='hidden';
        percentage.style.height="0";
    }
    else{
        percentage.style.visibility="visible"
        percentage.style.height=`${(fullCups/totalCups)*330}px`
        percentage.innerText=`${fullCups/totalCups*100}%`
        liters.innerText=`${(2000-(250*fullCups))/1000}L`
    }
    if(fullCups===totalCups){
        remained.style.visibility="hidden"
        remained.style.height='0'
    }
    else{
        remained.style.visibility="visible"
    }
}
