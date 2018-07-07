
//Initialize Firebase
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
var localUser
var restaurantName
var restaurantAddress
var randomRestaurant

// user input variables
var options = {
    enableHighAccuracy: true,
    timeout: 5000
};

// ---------firebase on value listener--------------//

//Firebase watcher and initial loader
firebase.database().ref("/users/testUser").on("child_added", function (snapshot) {
    
    restaurantName = snapshot.val().restaurantName;
    restaurantAddress = snapshot.val().restaurantAddress;
    newListItem = $("<li class='card-text'>");
    newRestaurantLink = $("<a class='card-link' target='_blank'>");
    var q = restaurantName + " " + restaurantAddress;
    var googleSearch = "http://google.com/search?q="
    newRestaurantLink.attr("href", googleSearch + q);
    newRestaurantLink.text(restaurantName);
    newListItem.append(newRestaurantLink);
    $("#tryLater").append(newListItem);
   

    $(".card-link").on("click", function () {
        window.open('http://google.com/search?q=' + q);
    });
}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

// ----------button click listeners---------------//

//Event handler for current location
$("#currentlocation").on("click", function (event) {

    event.preventDefault();

    // initMap();

    getLocation().then(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude)
        console.log(longitude)
        return { latitude: latitude, longitude: longitude }
    }).then(latlng => initMap(latlng))
    //showPosition();
   
});

//Event handler for map modal
$("#mapModal").on("show.bs.modal", function (){
    
    getLocation().then(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        return { latitude: latitude, longitude: longitude }
    }).then(latlng => initMap(latlng))
});

//Event handler to show map
$("#buttonChoice1").on("click", function () {
    $("#mapModal").modal('show')
    
});

//Event handler to add restaurant to list
$("#buttonChoice2").on("click", function () {
    // newRestaurantLink.text(randomRestaurant.name);
    // newListItem.append(newRestaurantLink);
    // $("#tryLater").append(newListItem);

    //Function to push restaurant name and address to Firebase
    restaurantName = randomRestaurant.name;
    restaurantAddress = randomRestaurant.vicinity;

    firebase.database().ref("/users/testUser").push({
        restaurantName: restaurantName,
        restaurantAddress: restaurantAddress,

    });
});

$(".choice").on("click", function () {

    event.preventDefault();

    getLocation().then(position => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        console.log(latitude)
        console.log(longitude)
        return { latitude: latitude, longitude: longitude }
    }).then(latlng => initMap(latlng))
    //showPosition();
    

})

$("#zipCodeSubmit").on("click", function (event) {

    event.preventDefault();

    // CODE FOR GETTING LOCATION BASED ON ZIP CODE
    zipCode = parseInt($("#zipCode").val())
    console.log($("#zipCode").val())
    geoCode();

   
});

//Event handler to logout
$("#logout-btn").on("click", function () {
    logout();
});


// ------------Functions-----------------//

//login function
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

//logout function
function logout() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log("log out success");
    }).catch(function (error) {
        // An error happened.
    });
};

//function to grap users display name
function app(user) {
    $("#username").text(user.displayName);
    
    localUser = user.email;
};


//function to get users location
function getLocation(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
        
    });
}

//error handling
function errorHandle(error) {
    console.log(error)
}

//Generate map and call to Google Places API
function initMap(latlong) {
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

//Callback for handling returned restaurant object
function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK && results.length != 0) {
        //Randomize
        var rng = Math.floor((Math.random() * results.length) + 1);
        randomRestaurant = results[rng];
        $("#restaurant-name").text("Your suggested restaurant is: " + randomRestaurant.name);
        createPhotoMarker(randomRestaurant);
        google.maps.event.trigger(map, 'resize')
        map.setCenter(results[0].geometry.location);


    } else if (results.length === 0) {
        $('#errorModal').modal('show');
    }
    //Add restaurant to sidebar when "Maybe another time." button is clicked
    newListItem = $("<li class='card-text'>");
    newRestaurantLink = $("<a class='card-link'>");


};

//Generate Map Marker for chosen restaurant
function createPhotoMarker(place) {
    var photos = place.photos;
    if (!photos) {
      return;
    }
  
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      title: place.name,
      
    });
    
    $("#carousel-1").attr("src", photos[0].getUrl({'maxWidth': 1000, 'maxHeight': 1800}));
   
    
  }

// function zipLocation() {
//     var geoCoder = new google.maps.Geocoder();
//     var address = $("#zipCode").val().trim()
//     geoCoder.geocode({ 'address': address},(results, status) => {
//         if (status === google.maps.GeocoderStatus.OK) {
//             latitude = results[0].geometry.location.lat();
//             longitude = results[0].geometry.location.lng();
//             console.log(latitude)
//             console.log(longitude)
//         }
//         else {
//             alert("unsuccessful because: " + status )
//         };
//     });
// };

function geoCode() {

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            componentRestrictions: {
                postalCode: zipCode

            },
            key: 'AIzaSyByVBnGeFonjpCvf6sWFqbaBr9A3RidvsA'
        }
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
}

window.onload = login;