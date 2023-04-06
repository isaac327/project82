var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
width = 1;
radius = 10;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouseEvent = "mouseDown";
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Current position of x and y coordinate = ");
        console.log("x = " + current_x + "y = " + current_y);
        ctx.arc(current_x, current_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}