const counters= document.querySelectorAll('.counter')

counters.forEach(counter => {

    counter.innerText='0'
    function updateCounter() {
        const target = +counter.getAttribute('data-target');
        const c=+counter.innerText

        const increment=target/1000

        if(c<target){
            counter.innerText=`${Math.ceil(c+increment)}`
            setTimeout(updateCounter,2)
        }

    }

    updateCounter()
});

