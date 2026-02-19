var calculator = document.getElementById('Calculator');
var result = document.getElementById('result');

calculator.addEventListener('click' , function bill() {
    var Price = +document.getElementById('Price').value;
    var Tax = +document.getElementById('Tax').value;
    if (Price <= 0 || isNaN(Price) || Tax < 0 || isNaN(Tax) || Price === "" || Tax === "" ) {
        result.innerHTML = `Enter valid numbers`
    }else{
        var total =Price+(Price * (Tax/100))
        result.innerHTML =`Final Price with Tax = ${ total.toFixed(2) }`;

    }
})