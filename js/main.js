// Write function for onclick of an image, hide gallery and Step One, get src of clicked image and show image, show Step 2 and input field for first line

$().ready(function(){
    $("#selected-picture-box").hide();
    $("#input-box").hide();

    $("img").click(function() {
        $("#gallery-box").css("display","none");
        $(".instruction1").css("display","none");
        imgName = $(this).attr("src");
        var img = document.createElement("img");
        img.style.width = "100%";
        img.setAttribute("src", imgName);
        $("#selected-picture-box").append(img);
        $("#selected-picture-box").show();
        $("#input-box").show();

    })
})

// Write function for onclick of submit button, grab each value from each input and output it to the page in a div with the main image above.
