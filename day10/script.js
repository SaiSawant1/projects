const button=document.getElementById('jokeBtn')
const jokeElement=document.getElementById('joke')

button.addEventListener('click',generateJoke)

generateJoke()



async function generateJoke(){
    const config={headers:{
        'Accept':'application/json'
    }}
    const res= await fetch('https://icanhazdadjoke.com',config)

    let data=await res.json()

    jokeElement.innerText=data.joke
   
}