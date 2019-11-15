$(function() {
    // place your code
     $(".my-rating").starRating({
        starSize: 25,
        strokeWidth: 9,
        strokeColor: 'green',
        initialRating: 2.5,
        starGradient: {
            start: '#93BFE2',
            end: '#228b22'
        },
        callback: function(currentRating, $el){
        // make a server call here
        }
    });
});
