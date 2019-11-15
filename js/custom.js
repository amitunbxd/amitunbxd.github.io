$(function() {
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
        // make a server call here
        }
    });
});
