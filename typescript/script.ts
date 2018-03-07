// Get canvas element
var canvas = < HTMLCanvasElement > document.getElementById("asteroids");
// Get context
var context = canvas.getContext("2d");
var minor = 10;
var major = minor * 5;
var stroke = "#00FF00";
var fill = "#009900";

draw_grid(context, minor, major, stroke, fill);

let x, y, angle = 0;
let w = context.canvas.width,
    h = context.canvas.height
for (y = h / 20; y < h; y += h / 10) {
    for (x = w / 20; x < w; x += w / 10) {
        context.save();
        context.translate(x, y);
        context.rotate(angle);
        draw_ship(context, w / 30, {
            guide: true,
            lineWidth: 1
        });
        context.restore();
        angle = (angle + 0.0075 * Math.PI);
    }
}