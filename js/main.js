// Write function for onclick of an image, hide gallery and Step One, get src of clicked image and show image, show Step 2 and input field for first line

$().ready(function(){
    $("#selected-picture-box").hide();
    $("#input-box").hide();
    $("#poem-display").hide();

    $("img").click(function() {
        $("#gallery-box").css("display","none");
        $("#instruction1").css("display","none");
        imgName = $(this).attr("src");
        var img = document.createElement("img");
        img.style.width = "100%";
        img.setAttribute("class", "main-image");
        img.setAttribute("src", imgName);
        $("#selected-picture-box").append(img);
        $("#selected-picture-box").show();
        $("#input-box").show();
    })
})

// Write function for onclick of submit button, grab value from input and output it to the page in a div with the main image above.

var poemInput = document.getElementById("poem-input"); //first line entered by user
var submitButton = document.getElementsByTagName("button")[0]; //button
var poemToDisplay; //first line to display to page

submitButton.onclick = function() {
    if (poemInput.value == 0) {
        document.getElementById("poem-display").innerHTML = "You did not enter a poem. Please write your poem below.";
        $("#poem-display").show();
    } else {
    $("#input-box").hide();
    poemToDisplay = poemInput.value;
    // console.log(poemToDisplay);
    document.getElementById("poem-display").innerHTML = poemToDisplay;
    $("#poem-display").show();}
    }