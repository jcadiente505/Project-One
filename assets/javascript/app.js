
//Function for API request
function restaurantGenerator() {

    var location = ""; //Take from input
    var queryURL = "https://api.yelp.com/v3/businesses/search/location=" + location + "";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET",
      headers: {
        authorization: "Bearer xxxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxx_xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        
        
      }
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
