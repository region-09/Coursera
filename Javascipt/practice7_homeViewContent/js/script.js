/********* For using Blur ****************/
$(function () {// Same as document.addEventListener("DOMContentLoaded"...)

    // Same as document.querySelector("#navbarToggle").addEventListener("blur, ...")
    $("#navbarToggle").blur(function (event) {
       var screenWidth = window.innerWidth;
       if (screenWidth < 768) {
           $("#collapsable-nav").collapse('hide');
       } 
    });
});
/********* End For using Blur ****************/

(function (global) {
    
    var dc = {};

    var homeHtml = "snippets/home-snippet.html";

    // Convenience function for inserting innerHtml for 'select'
    var insertHtml = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHtml = html;
    };
    // Show loading icon inside element identified by 'selector'.
    var showloading = function (selector) {
        var html = "<div class='text-center'";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };

    // On page load (before images or CSS)
    document.addEventListener("DOMContentLoaded", function (event) {
    // On first load, show home view
    showloading("#main-content");
    $ajaxUtils.sendGetRequest(
        homeHtml,
        function (responseText) {
            document.querySelector("#main-content")
            .innerHTML = responseText;
        },
        false);
    });

    global.$dc = dc;

})(window);