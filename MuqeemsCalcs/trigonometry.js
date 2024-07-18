function sin(degrees) {
    const radians = degrees * (Math.PI / 180);
    return Math.sin(radians);
}

function cos(degrees) {
    const radians = degrees * (Math.PI / 180);
    return Math.cos(radians);
}

function tan(degrees) {
    const radians = degrees * (Math.PI / 180);
    return Math.tan(radians);
}

function sec(degrees) {
    const radians = degrees * (Math.PI / 180);
    return 1 / Math.cos(radians);
}

function csc(degrees) {
    const radians = degrees * (Math.PI / 180);
    return 1 / Math.sin(radians);
}

function cot(degrees) {
    const radians = degrees * (Math.PI / 180);
    return 1 / Math.tan(radians);
}

module.exports = {
    sin, cos, tan, sec, csc, cot
}