function sayHello () {
    /* 1 Possible outcome:*/

    // var name = document.getElementById("name").value;
    // var message = "Hello " + name + "!";

    // document.getElementById("content").textContent = message;

    /* 2 Possible outcome: */

    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "!</h2>";

    document.getElementById("content").textContent = message;
    document.getElementById("content").innerHTML = message;

    /* Part 2 */
    if (name === "student") {
        // "h1" also true
        var title = document.querySelector("#title").textContent; 
        title += " & Lovin' it!";
        document.querySelector("h1").textContent = title;
    }
}