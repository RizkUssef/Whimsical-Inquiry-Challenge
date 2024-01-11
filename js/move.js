let yes = document.getElementById('yes_btn');
let no = document.getElementById('no_btn');
let btn_container = document.getElementById('btn_container');
let label = document.getElementById('label');



// Function to move the element randomly within the window
function moveElementRandomly() {
    // get the height and width for the window
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
  
    // Calculate random positions
    let randomTop = Math.floor(Math.random() * (windowHeight - 100)); // Adjust 100 as needed
    let randomLeft = Math.floor(Math.random() * (windowWidth - 100)); // Adjust 100 as needed
  
    // Apply the random positions to the elements
    no.style.position= "absolute";
    no.style.top = randomTop + 'px';
    no.style.left = randomLeft + 'px';
  }

  function admitIt() {
    label.innerText = "i know it"
    btn_container.remove();
  }

  no.addEventListener('mouseenter',moveElementRandomly);
  yes.addEventListener('click',admitIt);