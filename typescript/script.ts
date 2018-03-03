var canvas = <HTMLCanvasElement> document.getElementById("asteroids");
var context = canvas.getContext("2d");
context.strokeStyle = 'dimgrey';
context.lineWidth = 5;
context.rect(75, 75, 250, 250);
context.stroke();