
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).ready(function () {
    $(window).load('on', function () {
        // executes when complete page is fully loaded, including all frames, objects and images
        setTimeout(function () {
            $('#wrapper').fadeIn('slow');
            $('#imageTextWrapper').height($(this).height());
        }, 1000);
    });

    $(window).resize('on', function () {
        $('#imageTextWrapper').height($(this).height());
    });
})