// a memory location that never changes 
const BASE_URL = "https://zagster-service.herokuapp.com"

// jQuerry comand. wait till the web page loads call funtion
//whoes name is in parantheses
//funtion call means run the code
$(updateGraph)

//call funtion add (use it - make it run)
add(2,3);
//greater is the funtion identifer. Name is the funtions
//argument (ifo it needs to do its job)
function add(num1, num2){ 
  answer = num1 + num2;
   console.log("the answer is: " + answer); 
  return answer }



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