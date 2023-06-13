function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue)
    return blocks * 264
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        const farePrice = (distance - 400) * 0.02
        return farePrice
    
    
    } else if (distance <= 2500) {
        return 25;
    }
    else if (distance >= 2500) {

        return 'cannot travel that far';
    }
}

 
