const APIURL="https://api.github.com/users/"
const form=document.querySelector('form');
const search=document.querySelector('#search');
const main=document.querySelector('#main');

form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const user=search.value
    const userinfo = await getUser(user)
    generateCard(userinfo);
})

const generateCard=(userInfo)=>{
    const cardHTML = userInfo ? `<div class="card">
        <div>
          <img src="${userInfo.avatar_url}" class="avatar" alt="">
        </div>
        <div class="user-info">
          <h2>${userInfo.name}</h2>
          <p>
            ${userInfo.bio}
          </p>
          <ul>
            <li>${userInfo.followers} <strong>Followers</strong></li>
            <li>${userInfo.following} <strong>Following</strong></li>
            <li>${userInfo.public_repos} <strong>repo</strong></li>
          </ul>
          <div id="repos">
            <a href="" class="repo">Repo 1</a>
            <a href="" class="repo">Repo 2</a>
            <a href="" class="repo">Repo 3</a>
          </div>
        </div>
      </div>` : '<p>User not found.</p>'

  main.innerHTML=cardHTML
}

async function getUser(name){
    const {data}=await axios.get(APIURL + name)
    return data    
}


