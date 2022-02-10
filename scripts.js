
document.addEventListener("DOMContentLoaded", function () {
    let newDiv = document.createElement('header-container'); //creates header container
    let newHeader = document.createElement("h1"); //creates h1
    let headerText = document.createTextNode("This is an h1"); //text element
    newHeader.appendChild(headerText); //puts the text node into h1
    newDiv.appendChild(newHeader); //appends deader 1 to the new div
    document.body.appendChild(newDiv);
});

