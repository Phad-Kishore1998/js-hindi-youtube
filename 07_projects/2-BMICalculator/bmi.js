const form = document.querySelector('form')
//form when submitted(get or post) then values goes to url or to server
// to stop this there is a method in event e.preventDefault

/* 
        This use case gives empty value
let height document.querySelector('#height').value 

if we take height before event listenser then we will get the value as empty
As when page loaded it will be executed and not on the eventlistener
*/

form.addEventListener('submit', function(e){
    e.preventDefault(); //stopping the submit

    //document.querySelector('#height').value //string value when asked
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value) 
    let result = document.querySelector('#results')
    // some checks for validation
    if(height === '' || height < 0 || isNaN(height) ) {
        result.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight < 0 || isNaN(weight) ) { //old way of NaN is weight != NaN
        result.innerHTML = `Please give a valid weight ${weight}`
    }else {
        const bmi = (weight/((height*weight)/10000)).toFixed(2)
        //to show result
        let weightIs = ""
        if(bmi < 18.6){
            weightIs = "Under Weight"
        }else if(bmi>= 18.6 && bmi<24.9) {
            weightIs ="Normal Range"
        }else if(bmi>24.9) {
            weightIs = "OverWeight"
        }
        result.innerHTML = `<span>${bmi}</span><br>${weightIs}`
    }

})