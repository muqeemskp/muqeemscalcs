
function calculateSpeed(distance, time) {
    if (time === 0) {
        throw new Error('Time cannot be zero.');
    }
    return distance / time;
}

function calculateAcceleration(initialVelocity, finalVelocity, time) {
    if (time === 0) {
        throw new Error('Time cannot be zero.');
    }
    return (finalVelocity - initialVelocity) / time;
}

function calculateForce(mass, acceleration) {
    return mass * acceleration;
}

function calculateKineticEnergy(mass, velocity) {
    return 0.5 * mass * velocity * velocity;
}

function calculatePotentialEnergy(mass, height, gravity = 9.81) {
    return mass * height * gravity;
}

function calculateMomentum(mass, velocity) {
    return mass * velocity;
}

function calculateWork(force, distance) {
    return force * distance;
}

function calculatePower(work, time) {
    if (time === 0) {
        throw new Error('Time cannot be zero.');
    }
    return work / time;
}

module.exports = {
    calculateSpeed, calculateAcceleration, calculateForce,
    calculateKineticEnergy, calculatePotentialEnergy, calculateMomentum,
    calculateWork, calculatePower
}