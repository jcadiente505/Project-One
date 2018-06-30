
//Function for API request
function restaurantGenerator() {

    var location = ""; //Take from input
    var queryURL = "https://api.yelp.com/v3/businesses/search/location=" + location + "";

    // Creating an AJAX call for the specific movie button being clicked
    // $.ajax({
    //   url: queryURL,
    //   method: "GET",
    //   headers: {
    //     authorization: "Bearer r4tHEAx0_RoSv1YoH333ehyVe30h1Y4QHVtbeMt6HDoKXsalEFLBpwSL7Qw8cXYgtEK4Osk72XJ-qpHUqxT_Jci-gzE2hnunA27YZGGAtgMrCEEdIT_rBO3Q1Wc1W3Yx"
        
        
    //   }
    // }).then(function(response) {

    //     console.log(response);

    // });    
    console.log("working function call");
}

var config = {
    apiKey: "AIzaSyCIahuUvE2G9jVP5xRCXDA6gmyMVEHp7xo",
    authDomain: "food-finder-app-ee43f.firebaseapp.com",
    databaseURL: "https://food-finder-app-ee43f.firebaseio.com",
    projectId: "food-finder-app-ee43f",
    storageBucket: "food-finder-app-ee43f.appspot.com",
    messagingSenderId: "796735217041"
  };
  firebase.initializeApp(config);

database = firebase.database();

// --------------create variables----------------//
var x = document.getElementById("location");
// user input variables
// firebase database user object
// dynamic content variables
// API queryURL's
// search parameters variable
// API Key variable

// ---------firebase on value listener--------------//

// ----------button click listeners---------------//
$("#test-btn").on("click", function(){
    restaurantGenerator();
    console.log("working click");
});

// ----------AJAX Method Yelp---------------//


// ----------AJAX Method Google Maps-----------//


// ------------Functions-----------------//

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}


































































