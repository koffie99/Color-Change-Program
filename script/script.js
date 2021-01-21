const container = document.getElementById("container");
const  button = document.getElementById("button");

const colors = ['dodgerblue', 'tomato', 'orange', 'mediumseagreen', 'black', 'pink', 'violet'];

// add event listener
button.addEventListener('click', () => {

    let changeColor = Math.floor(Math.random() * colors.length);

    // initializing the color change
    container.style.backgroundColor = colors[changeColor];

})