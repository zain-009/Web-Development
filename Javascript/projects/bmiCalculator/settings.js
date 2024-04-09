const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector("#result");
    const range = document.querySelector("#range");
    
    if(height === "" || height < 1 || isNaN(height)){
        result.innerHTML = "Please Enter a Valid Height"
    } else if(weight === "" || weight < 1 || isNaN(weight)){
        result.innerHTML = "Please Enter a Valid Weight"
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = bmi;
        if (bmi < 18.6) {
            range.innerHTML = "Under Weight"
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            range.innerHTML = "Normal Range"
        } else if (bmi > 24.9) {
            range.innerHTML = "Overweight"
        } else {}
    }

})