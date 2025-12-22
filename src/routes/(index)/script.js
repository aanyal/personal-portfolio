const coords = { x: 0, y: 0 };                         //mouse coordinates
const circles = document.querySelectorAll(".circle");  //get all the objects that have implemented the .circle class

let inactivityTimer = 0;                                   //timer to make the swoosh dissapear after a period of mouse inactivity
const INACTIVITY_THRESHOLD = 40;                       //make the swoosh dissapear if the mouse is inactive for 40ms

const colors = [                                       //colors for the swoosh
    "#003f5b",
    "#2b4b7d", 
    "#5f5195", 
    "#98509d", 
    "#cc4c91",
    "#f25375", 
    "#ff6f4e",  
    "#ff9913", 
]

let numColor = Math.ceil(circles.length/colors.length);//decide the coloring of the swoosh
let i = 0;                                             //for the coloring of the swoosh

//initializer sort of, sets the x and y or each circle to 0
circles.forEach(function(circle, index) {
    circle.x = 0;
    circle.y = 0;
    
    circle.style.backgroundColor = colors[Math.ceil(index/numColor)];

    if (i%numColor == 0 && index != 0) {
        i+=1;
    }
});

//hides the circles if the mouse has been inactive for 30 ms
function hideElement() {
    circles.forEach(function(circle) {
        circle.style.opacity = 0;
    });
    const p = document.getElementById("hello");
    p.innerHTML = "hello";
}

// window.addEventListener("mousemove", function (e) {
//     coords.x = e.clientX;               //updates the coordinates of the mouse
//     coords.y = e.clientY;

//     clearTimeout(inactivityTimer);      //reset the timer to decide whether to fade out the mouse
//     circles.forEach(function(circle) {
//         circle.style.opacity = 1;       //ensure everything is visible when the mouse is moving
//     });
//     inactivityTimer = setTimeout(hideElement, INACTIVITY_THRESHOLD); //set a 30ms timer
// });

function handleMouseMove(e) {
    coords.x = e.clientX;               //updates the coordinates of the mouse
    coords.y = e.clientY;

    clearTimeout(inactivityTimer);      //reset the timer to decide whether to fade out the mouse
    circles.forEach(function(circle) {
        circle.style.opacity = 1;       //ensure everything is visible when the mouse is moving
    });
    inactivityTimer = setTimeout(hideElement, INACTIVITY_THRESHOLD); //set a 30ms timer
}

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";  //center all the circles to the coordinates of the mouse
        circle.style.top = y + 12 + "px";

        circle.style.scale = (circles.length-index)/circles.length; //change the scale of the circles to fade out

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.2; //move the circles back a little bit
        y += (nextCircle.y - y) * 0.2;
    });

    requestAnimationFrame(animateCircles); //to ensure the animation finishes even if the cursor stops moving or 
    //the cursor goes off screen
}

animateCircles();
