// Get canvas element
var canvas = document.getElementById("asteroids");
// Get context
var context = canvas.getContext("2d");
draw_grid(context, 10, 50, '#00FF00', '#009900');
draw_ship(context, 200, 200, 150, {
    guide: true
});
//# sourceMappingURL=script.js.map