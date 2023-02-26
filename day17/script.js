


const apiKey = '4f89ec34213170623d1df052b61d7e12';
const api_url= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4f89ec34213170623d1df052b61d7e12&page=1'
const IMG_URL= 'https://image.tmdb.org/t/p/w1280'
const search_url='https://api.themoviedb.org/3/search/movie?api_key=4f89ec34213170623d1df052b61d7e12&query='
const main=document.querySelector('#main');
const form=document.querySelector('#form')
const search=document.querySelector('#search') 

getMovies(api_url)

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    query=search.value;
    console.log(query)
    if(query===""){
        main.innerHTML=''
        getMovies(api_url) 
    }
    else{
        const new_url=`${search_url+query}`
        main.innerHTML=''
        getMovies(new_url)
    }
    
})

async function getMovies(url){
    const res=await fetch(url)
    const data=await res.json()
    data.results.forEach(element => {
        generateMovie(element)
    });
      
}

const ratingColor=(element)=>{
    const rating=element.vote_average
    if(rating<3){
        return 'red';
    }
    else if(rating>4 && rating<6){
        return 'orange'
    }
    else{
        return 'green'
    }
}

const generateMovie=(element)=>{
    const ratingClass=ratingColor(element);
    const movie=document.createElement('div')
    movie.classList.add('movie');
    movie.innerHTML=`<img src=${IMG_URL+element.poster_path} alt="" srcset="">
    <div class="movie-info">
      <h3>${element.original_title}</h3>
      <span class=${ratingClass}>${element.vote_average}</span>
    </div>
    <div class="overview">
      <h3>overview</h3>
      ${element.overview}
    </div>`
    main.appendChild(movie);
}