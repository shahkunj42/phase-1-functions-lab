function distanceFromHqInBlocks(blockNumber) {
    let hq = 42;
    return Math.abs(blockNumber - hq);
}

function distanceFromHqInFeet(blockNumberStart){
    return 264 * distanceFromHqInBlocks(blockNumberStart);
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264;
}
function calculatesFarePrice(start, end){
    let feet = distanceTravelledInFeet(start, end)
    if (feet < 400){
        return 0;
    }
    else if (feet < 2000){
        return 0.02 * (feet - 400)
    }
    else if(feet < 2500){
        return 25
    }
    else 
    return 'cannot travel that far'
}