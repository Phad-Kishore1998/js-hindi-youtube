const clock = document.getElementById('clock')
//const clock = document.querySelector('#clock') //using id and query selector

setInterval(function(){
    //everysecond value
    let date = new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)
