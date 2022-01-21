/****** Blur function   **********/
$(function () {
    
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});
/****** End of Blur Function *******/

