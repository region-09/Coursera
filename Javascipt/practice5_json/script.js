document.addEventListener("DOMContentLoaded",
    function () {
        
        // Unobstrusive event binding
        document.querySelector("button")
        .addEventListener("click", function () {

            // Call server to get the name
            $ajaxUtils.sendGetRequest("data/name.json",
            function (res) {
               var message = res.firstName + " " + res.lastName;
               
               if (res.likesFootball) {
                   message += " like Football!.";
               } else {
                   message += " doesn't like Football!.";
               }
               message += " Has already scored ";
               message += res.numberOfGoals;
               message += " goals for Manchester United "
               document.querySelector("#content")
                .innerHTML = "<h2>Hello " + message + "!</h2>";
            });
        });
    }
);
