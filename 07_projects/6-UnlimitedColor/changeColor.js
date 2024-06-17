//generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color
}

let intervalId
const startChangeColor = function () {
    if(intervalId == null){ //for clean code if condition
        intervalId = setInterval(bgColorChange, 1000)
    }
    function bgColorChange() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangeColor = function () {
    clearInterval(intervalId);
    intervalId = null;      //flushing the value 
}

document.getElementById('start').addEventListener('click', startChangeColor)
document.getElementById('stop').addEventListener('click', stopChangeColor)

