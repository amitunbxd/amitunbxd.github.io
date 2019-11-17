$(function() {


    var firebaseConfig = {
      apiKey: "AIzaSyB5nHus5t0LzPCfumntUVBvY0gqb0UuUPI",
      authDomain: "apw-unbxd.firebaseapp.com",
      databaseURL: "https://apw-unbxd.firebaseio.com/",
      projectId: "apw-unbxd"
    };

    firebase.initializeApp(firebaseConfig);
    // Get a reference to the database service
    var database = firebase.database();

    // place your code
     $(".my-rating").starRating({
        starSize: 40,
        strokeWidth: 9,
        initialRating: 2.5,
        ratedColor:'#8b3247',
        hoverColor:'#8b3247',
        emptyColor: 'lightgrey',
        starGradient: {
            start: '#d48799',
            end:'#8b3247'
        },
        callback: function(currentRating, $el){
            id = $el.attr("id")

            database.ref().child(id).push({
                "rating":currentRating
            })

        }
    });
});
