
const result=document.getElementById('result');
const lenghtEl=document.getElementById('length')
const upperEl=document.getElementById('uppercase')
const lowerEl=document.getElementById('lowercase')
const numberEl=document.getElementById('numbers')
const symbolsEl=document.getElementById('symbols')
const clipBoard=document.getElementById('clipboard')
const generateBtn=document.querySelector('.btn-large')

const randomFunc=  {   

    lower:getrandomLower,
    upper:getrandomUpper,
    number:getrandomNumber,
    symbols: getrandomSymbols

}
generateBtn.addEventListener('click',()=>{
    const length= +lenghtEl.value
    const hasLower=lowerEl.checked
    const hasUpper=upperEl.checked
    const hasNumber=numberEl.checked
    const hasSymbol=symbolsEl.checked 

    result.innerText=generatePasswrd(hasLower,hasUpper,hasNumber,hasSymbol,length) 
      

})

function generatePasswrd(lower,upper,number,symbols,length){
    let generatePassword=""

    const typesCount=lower+upper+number+symbols

    const types=[{lower},{upper},{number},{symbols}].filter(item=>Object.values(item)[0])

    if(typesCount===0){
        return ""
    }

    for(let i=0;i<length;i+=typesCount){

        types.forEach(type=>{
            const funcName=Object.keys(type)[0]
            generatePassword += randomFunc[funcName]()
         })
    }
    const finalPassword=generatePassword.slice(0,length)
    return finalPassword
}



function getrandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97); 
}

function getrandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65); 
}

function getrandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48); 
}

function getrandomSymbols(){
    const symbols= "!@#$%^&*(){}[]=<>/,."
    return symbols[Math.floor(Math.random()*symbols.length)]
}

