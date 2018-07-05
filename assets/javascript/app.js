
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
// geocoder variables
var geoCoder
var marker
var latitude
var longitude
var latlng
var infowindow
var map
// user input variables
var options = {
    enableHighAccuracy: true,
    timeout: 5000
};
// firebase database user object
// dynamic content variables
// API queryURL's
// search parameters variable
// API Key variable

// ---------firebase on value listener--------------//

// ----------button click listeners---------------//
$("#test-btn").on("click", function () {
    restaurantGenerator();
    console.log("working click");
});

$("#currentlocation").on("click", function (event) {

    event.preventDefault();
    
    // initMap();

    getLocation().then(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude)
        console.log(longitude)
        return {latitude: latitude, longitude: longitude}
    }).then(latlng => initMap(latlng))
    //showPosition();
    console.log(position)
})

$("#zipCodeSubmit").on("click", function (event) {
    event.preventDefault();

    // CODE FOR GETTING LOCATION BASED ON ZIP CODE
});


// ----------AJAX Method Google Maps-----------//


// ------------Functions-----------------//


function login() {
    function newLogin(user) {
        if (user) {
            //User signed in
            app(user);
        } else {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }
    }

    firebase.auth().onAuthStateChanged(newLogin);

};

function app(user) {
    $("#username").text(user.displayname);
}

function getLocation(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
    console.log(resolve)
}

function errorHandle(error) {
    console.log(error)
}

//Generate map and call to Google Places API
function initMap(latlong) {
    console.log(latitude);
    console.log(longitude)
    var latlng = new google.maps.LatLng(latlong.latitude, latlong.longitude);
    var myOptions = {
        zoom: 14,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"),
    myOptions);

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: latlng,
      radius: 10000,
      type: ['restaurant'],
      openNow: true

    }, callback);

};

//Callback for handling returned restaurant objectg
function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      //Randomize
      var rng = Math.floor((Math.random() * results.length) + 1);
      var randomRestaurant = results[rng];
      $("#restaurant-name").text("Your suggested restaurant is: " + randomRestaurant.name);
      console.log(randomRestaurant);
      createMarker(randomRestaurant);
    }
  }
  
  //Generate Map Marker for chosen restaurant
function createMarker(place) {
var placeLoc = place.geometry.location;
var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
});

//Listener to display information about map markers  
google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
});
}



//java for dice roll
var roll1 = 0
var roll2 = 0
var totalRoll = (roll1 + roll2)
// devlare images to an array in global scope [roll1 - 1]
$("#dice").click(function() {
    var roll1 = Math.floor((Math.random() * 6) + 1);    
    var roll2 = Math.floor((Math.random() * 6) + 1);
    var totalRoll = (roll1 + roll2)
    console.log(roll1, roll2, totalRoll);
});

window.onload = login;