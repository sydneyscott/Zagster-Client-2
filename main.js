const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateGraph)

function updateView() {
  $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
  numberOfRides = data.count
  $("h2#rideCount").html(numberOfRides)
}

function updateGraph(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','November','December'],
        datasets: [{
            label: 'Rides By Month 2017',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [20, 31, 79, 88, 156, 301, 405, 287, 401, 353, 113, 79 ]
        }]
    },

    // Configuration options go here
    options: {}
});
}