
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
var map
var marker
// user input variables
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

$("#currentlocation").on("click", function (location) {
    event.preventDefault();
    getLocation();
    //showPosition();
    console.log("test")
})

// ----------AJAX Method Yelp---------------//


// ----------AJAX Method Google Maps-----------//
var geocoderURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=AIzaSyByVBnGeFonjpCvf6sWFqbaBr9A3RidvsA"
var latitude
var longitude
$.ajax({
    url: geocoderURL,
    method: "GET"
}).then(function (response) {

})

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
    console.log(user.displayname);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(storeLocation);
    } else {
        console.log("error")
    }
}
function storeLocation(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
}

function initMap() {
    map = new google.maps.Map($("#map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 15
    });
};

// ============DIFFERENT APPROACH=======================

// simpleGoogleMapsApiExample.map = function (mapDiv, latitude, longitude) {
//     var createMap = function (mapDiv, coordinates) {
//         var mapOptions = {
//             center: coordinates,
//             mapTypeId: google.maps.MapTypeId.ROADMAP,
//             zoom: 15
//         };
//         return new google.maps.Map(mapDiv, mapOptions);
//     };
//     var initialize = function (mapDiv, latitude, longitude) {
//         var coordinates = new google.maps.LatLng(latitude, longitude);
//         createMap(mapDiv, coordinates);
//     };
//     initialize(mapDiv, latitude, longitude);
// };
window.onload = login;











































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

