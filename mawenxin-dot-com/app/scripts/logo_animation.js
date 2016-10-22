/* Variables */

var canvas, ctx, center,
    grid = 6,
    duration = 2000,
    start = new Date().getTime() + 1000;

window.addEventListener('load', initialize, false);

/* Functions */

function initialize() {
    // canvas = document.createElement('canvas');
    canvas = document.getElementById('m_logo');
    ctx = canvas.getContext('2d');

    prepare();
    render();
}

function prepare() {
    document.body.appendChild(canvas);
}

function render() {
    requestAnimationFrame(render);

    var now = Math.max(0, Math.min(duration, new Date().getTime() - start));
    var t = Easing.InOutQuad(now, 0, 1, duration);
    var height = grid * 5;

    ctx.save();

    ctx.clearRect(canvas.width, canvas.height, 0, 0);
    ctx.translate(80, 20);
    ctx.fillStyle = '#333';

    // |
    ctx.fillRect(-6 * grid , 0, grid, height);
    ctx.fillRect(-6 * grid , 0, 0, 0);

    // -|
    ctx.fillRect(-3 * grid, 0, grid, height);
    ctx.fillRect(-3* grid + -3 * grid * t, 0, 3 * grid * t, grid);

    // -|
    ctx.fillRect(0, 0, grid, height);
    ctx.fillRect(0, 0, -3 * grid * t + grid, grid);

    ctx.restore();
}

/* Objects, constants and such */

var Vector2 = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
};

var Easing = {
    InOutQuad: function (t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
};

/* RequestAnimationFrame polyfill */
if(!window.requestAnimationFrame) {
    window.requestAnimationFrame = (
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
}