//Muqeem Calc

const {cos, tan, sec, sin, cot, csc} = require('./trigonometry');
const {add, subtract, multiply, solveQuadratic, divide} = require('./math');
const { calculateSpeed, calculateAcceleration, calculateForce,
        calculateKineticEnergy, calculatePotentialEnergy, calculateMomentum,
        calculateWork, calculatePower } = require('./physics')

module.exports = {
    sin,
    cos,
    tan,
    sec,
    csc,
    cot,
    solveQuadratic,
    subtract,
    divide,
    add,
    multiply,
    calculateSpeed,
    calculateAcceleration,
    calculateForce,
    calculateKineticEnergy,
    calculatePotentialEnergy,
    calculateMomentum,
    calculateWork,
    calculatePower
};

