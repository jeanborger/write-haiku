// Create an array of objects containing src and alt info for a gallery of images for user to choose from in writing their poem. Output the images to the page in a gallery box.

var imageObject = [
{
    src: "img/apple-blossom.jpg",
    alt: "Apple blossoms in bloom in the morning sun"
},
{
    src: "img/peony-closeup.jpeg",
    alt: "Large white peony with shadows in the background"
},
{
    src: "img/teasel-sky.jpeg",
    alt: "Tops of dried teasel plants standing against a blue sky"
},
{
    src: "img/dried-flower-snow.jpeg",
    alt: "Dried flowers standing against a background of sparkling snow"
},
{    
    src: "img/fern.jpeg",
    alt: "Sensitive fern closeup in the golden morning sun"
},
{
    src: "img/bird-tree.jpeg",
    alt: "Bird in a tree silhouetted against a purple-brown sky"
},
{
    src: "img/dandelion.jpeg",
    alt: "Dandelion seed globes silhouetted against black in the golden morning light"
},
{
    src: "img/sunflower.jpeg",
    alt: "Large yellow sunflower turned downward in profile in front of a bright blue sky"
},
{
    src: "img/joe-pye.jpeg",
    alt: "Queen Anne's Lace and Joe Pye Weed growing in garden with a background of soft green"
}
];

function createListItems (arr) {
    var items = "";
    for (let i = 0; i < arr.length; i++) {
        items += `<img src="${arr[i].src}" alt="${arr[i].alt}">`
    }
    document.getElementById("gallery-box").innerHTML = items;
}
createListItems(imageObject);

// Write function for onclick of an image, hide gallery and Step One, get src of clicked image and show image, show Step 2 and text area

$().ready(function(){
    $("#selected-picture-box").hide();
    $("#input-box").hide();
    $("#poem-display").hide();
    $("img").click(function(){
        $("#gallery-box").css("display","none");
        $("#instruction1").css("display","none");
        imgName = $(this).attr("src");
        var img = document.createElement("img");
        img.setAttribute("class", "main-image");
        img.setAttribute("src", imgName);
        $("#selected-picture-box").append(img);
        $("#selected-picture-box").show();
        $("#input-box").show();
    })
})

// Write function for onclick of submit button, grab value from input and output it to the page under the main image. If no poem is entered, return message to write poem in the box below.

var poemInput = document.getElementById("poem-input"); //poem entered by user
var submitButton = document.getElementsByTagName("button")[0]; //button
var poemToDisplay; //poem to display to page

submitButton.onclick = function() {
    if (poemInput.value == 0) {
        document.getElementById("poem-display").innerHTML = "You did not enter a poem. Please write your poem in the box below and then click the button underneath it to see your poem.";
        $("#poem-display").show();
    } else {
    $("#input-box").hide();
    poemToDisplay = poemInput.value;
    document.getElementById("poem-display").innerHTML = poemToDisplay;
    $("#poem-display").show();}
    }