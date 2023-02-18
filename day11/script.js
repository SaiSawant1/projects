const insertkey=document.querySelector('.insert')

window.addEventListener('keydown',(e)=>{
    insertkey.innerHTML=` <div id="key" class="key">
    ${e.key===' '? 'space':e.key} 
    <small>event.key</small>
  </div>
  <div id="keyCode" class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div id="code" class="key">
    ${e.code}
    <small>event.code</small>
  </div>`   

})

