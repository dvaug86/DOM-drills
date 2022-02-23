
document.addEventListener("DOMContentLoaded", function () {
    let div1 = document.createElement('header-container'); //creates header container
    document.body.appendChild(div1); //puts the div to body   
    
    let H1 = document.createElement("h1"); //creates h1
    H1.className = 'H1';
    let header1Text = document.createTextNode("This is an h1"); //text element
    H1.appendChild(header1Text); //puts the text node into h1
    div1.appendChild(H1); //appends deader 1 to the new div
    
    let H2 = document.createElement("h2");
    H2.className = 'H2';
    let H2Text = document.createTextNode("This is an h2");
    H2.appendChild(H2Text);
    div1.appendChild(H2);

    let H3 = document.createElement("h3");
    H3.className = 'H3';
    let H3Text = document.createTextNode("This is an h3");
    H3.appendChild(H3Text);
    div1.appendChild(H3);

    let H4 = document.createElement("h4");
    H4.className = 'H4';
    let H4Text = document.createTextNode("This is an h4");
    H4.appendChild(H4Text);
    div1.appendChild(H4);

    let H5 = document.createElement("h5");
    H5.className = 'H5';
    let H5Text = document.createTextNode("This is an h5");
    H5.appendChild(H5Text);
    div1.appendChild(H5);

    let H6 = document.createElement("h6");
    H6.className = 'H6';
    let H6Text = document.createTextNode("This is an h6");
    H6.appendChild(H6Text);
    div1.appendChild(H6);

    

    function randColorSelector(h) {
        let colors = ["Purple", "Green", "brown", "Red", "Orange", "Teal", "Tomatoe", "Gray"];
        let randomColor = colors[Math.floor(Math.random() * 9)];
        //by multiplying by 9 we are expecting 0 -8
        h.target.style.color = randomColor
    };

    H1.addEventListener("dblclick", randColorSelector);
    H2.addEventListener('dblclick', randColorSelector);
    H3.addEventListener("dblclick", randColorSelector);
    H4.addEventListener("dblclick", randColorSelector);
    H5.addEventListener("dblclick", randColorSelector);
    H6.addEventListener("dblclick", randColorSelector);

  
    
    let button = document.createElement('button');
    let buttonText = document.createTextNode('click to add list item');
    button.appendChild(buttonText);
    div1.appendChild(button);

    let ul = document.createElement('ul');
    div1.appendChild(ul);

    let list = 1;

    button.addEventListener('click', function(){
        let li = document.createElement('li');
        let liText = document.createTextNode('This is item ' + list);
        li.appendChild(liText);
        ul.appendChild(li);
        list++;
        li.addEventListener('click', randColorSelector)
            
        
    
        li.addEventListener('dblclick', function(){
            li.remove();
        })
    

})


})

