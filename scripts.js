function compute() {

    let inputAmount = document.getElementById("principal").value;

    if (inputAmount <= 0) {
        alert("Dude!? Enter a positive Number!")
        inputAmount.focus()
    } 

    let slider = document.getElementById("rate").value;

    let numOfYears = document.getElementById("years").value;
    let yearlyInterest = ((inputAmount * slider * numOfYears) / 100);

    
    
    document.getElementById("amount").innerHTML = inputAmount;
    document.getElementById("rangeValue").innerHTML = slider;
    document.getElementById("finalAmount").innerHTML = yearlyInterest;

    var year  = new Date().getFullYear();
    var month = new Date().getMonth();
    var day   = new Date().getDate();

    var yearsFromToday  = new Date(year + parseFloat(numOfYears), month, day);
    var justYear = yearsFromToday.getFullYear();

    document.getElementById("numYears").innerHTML = justYear;
}

var slider = document.getElementById("rate");
var output = document.getElementById("interest");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
