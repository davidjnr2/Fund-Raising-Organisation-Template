
// The chart script 

var raisePercentage = document.getElementById('percentage');

var amountRaised = document.getElementById('money');

var myPercentage = new Chart(raisePercentage, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [25, 75], 
            backgroundColor: [
                'rgb(245, 245, 245)',
                'rgb(228, 72, 72)',
            ],
        }]
    }
});

var myPercentage = new Chart(amountRaised, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [20, 80], 
            backgroundColor: [
                'rgb(245, 245, 245)',
                'rgb(228, 72, 72)',
            ],
        }]
    }
});



$(document).ready(function(){
    $('.mySlider').slick({
        dots:true,
        accessibility:true,
        autoplay:true,
        infinite: true
    });
});
          
