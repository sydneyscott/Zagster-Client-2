// a memory location that never changes 
const BASE_URL = "https://zagster-service.herokuapp.com"

// jQuerry comand. wait till the web page loads call funtion
//whoes name is in parantheses
//funtion call means run the code
$(updateGraph)
//ARRAYS 
let year = []
let months2016= []
let months2017=[]
let months2018=[]

function updateView(){
  $.getJason(Base_URL + "/rides/count", updateRideCount)

  $.when($.getJason(Base_URL + "/rides/count/per_month", perYear),
  ).then(updtaeChart);
}

function perYear(data){
  for (var index = 0, month=9; index <= 3, month<=12;++index, ++month){
    months2016.push(data[2016] [index] [month])
  }
  console.log("2016 data by months is easy " +months2016)
}

function perYear(data){
  for (var index = 0, month=11; index <= 1, month<=12;++index, ++month){
    months2017.push(data[2016] [index] [month])
  }
  console.log("2017 data by months is easy " +months2017)
}

function perYear(data){
  for (var index = 0, month=1; index <= data.length, month<=10;++index, ++month){
    months2018.push(data[2016] [index] [month]);
  }
  console.log("2018 data by months is easy " +months2018)
}


//call funtion add (use it - make it run)
//add(2,3);
//greater is the funtion identifer. Name is the funtions
//argument (ifo it needs to do its job)
//function add(num1, num2){ 
  //answer = num1 + num2;
   //console.log("the answer is: " + answer); 
  //return answer }

//function greeter(name){
 // alert("welcome to " + name + " data visualization")
//}

//greeter("Sydney Scott's")

var person = { name: "Sydney", age: 18, car: {model: "Volvo, year: 2004"}} 
console.log ("My name is " + person.name) 
console.log("My age is "+ person.age)
console.log("My car model is " + person.car.model)

if (person.age > 17){
alert("OK BOOMER")
}

//var data = {"2016": [{"9":220}, {"10":141}, {"11":89}, {"12":16}]}
//var year_list = data[2016]
//console.log('year list is '+ year_list)

//console.log(year_list[0][9])
//console.log(year_list[1][10])
//console.log(year_list[2][11])
//console.log(year_list[3][12])


//IMPORTANT GRAPH
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