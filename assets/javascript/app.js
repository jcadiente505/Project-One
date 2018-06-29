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