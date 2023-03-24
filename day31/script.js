
const result=document.getElementById('result');
const lenghtEl=document.getElementById('length')
const upperEl=document.getElementById('uppercase')
const lowertEl=document.getElementById('lowercase')
const numberEl=document.getElementById('numbers')
const symbolsEl=document.getElementById('symbols')
const clipBoard=document.getElementById('clipboard')

const randomFunc=  {   

    lower:getrandomLower,
    upper:getrandomUpper,
    number:getrandomNumber,
    symbols: getrandomSymbols

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

