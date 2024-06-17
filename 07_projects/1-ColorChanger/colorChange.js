const buttons = document.querySelectorAll('.button')
        const body = document.querySelector("body")
        console.log(buttons); //NodeList for all the buttons
        buttons.forEach(function(btn){
            // const colorBtn = btn.getAttribute('id');
            // console.log(colorBtn); 
            // if(colorBtn === 'yellow'){
            //     body.style.backgroundColor = colorBtn
            // }
            btn.addEventListener('click',function(e){
                console.log(e);
                console.log(e.target);
                const colorBtn = e.target.getAttribute('id');
                console.log(colorBtn); 
                    body.style.backgroundColor = colorBtn
            })
        })


/*
Other way to do and Chai Aur Code way:

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
*/