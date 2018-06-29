
//Function for API request
function restaurantGenerator() {

    var location = ""; //Take from input
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=PSGz1PJiAkf3KhGbNZhuetNSqqRzmIRN&q=" + animal + "&limit=10&offset=0&rating=G&lang=en"
    var key = "r4tHEAx0_RoSv1YoH333ehyVe30h1Y4QHVtbeMt6HDoKXsalEFLBpwSL7Qw8cXYgtEK4Osk72XJ-qpHUqxT_Jci-gzE2hnunA27YZGGAtgMrCEEdIT_rBO3Q1Wc1W3Yx";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {



    });    
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
// user input variables
// firebase database user object
// dynamic content variables
// API queryURL's
// search parameters variable
// API Key variable

// ---------firebase on value listener--------------//

// ----------button click listeners---------------//


// ----------AJAX Method Yelp---------------//


// ----------AJAX Method Google Maps-----------//


// ------------Functions-----------------//
