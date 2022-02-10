
document.addEventListener("DOMContentLoaded", function () {
    let div1 = document.createElement('header-container'); //creates header container
    let H1 = document.createElement("h1"); //creates h1
    H1.className= 'H1'
    let header1Text = document.createTextNode("This is an h1"); //text element
    H1.appendChild(header1Text); //puts the text node into h1
    div1.appendChild(H1); //appends deader 1 to the new div
   
    document.body.appendChild(div1);

    let H2 = document.createElement("h2");
    H2.className= 'H2'
    let H2Text = document.createTextNode("This is an h2");
    H2.appendChild(H2Text);
    div1.appendChild(H2);

    let H3 = document.createElement("H3");
    H3.className= 'H3'
    let H3Text = document.createTextNode("This is an H3");
    H3.appendChild(H3Text);
    div1.appendChild(H3);

    let H4 = document.createElement("H4");
    H4.className= 'H4'
    let H4Text = document.createTextNode("This is an H4");
    H4.appendChild(H4Text);
    div1.appendChild(H4);


    let H5 = document.createElement("H5");
    H5.className= 'H5'
    let H5Text = document.createTextNode("This is an H5");
    H5.appendChild(H5Text);
    div1.appendChild(H5);

    let H6 = document.createElement("H6");
    H6.className= 'H6'
    let H6Text = document.createTextNode("This is an H6");
    H6.appendChild(H6Text);
    div1.appendChild(H6);


});

