// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(42 - location)
}


function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264
}

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(distanceFromHqInBlocks, 50));

function distanceTravelledInFeet(pickup, dropoff) {
    return Math.abs(pickup - dropoff) * 264
}



function calculatesFarePrice(pickup, dropoff) {
   let feet = distanceTravelledInFeet(pickup, dropoff)
   if (feet <= 400) {
    return 0
   } else if (400 < feet && feet <= 2000) {
    return (feet - 400) * .02
   } else if (2000 < feet && feet <= 2500) {
    return 25.00
   } else if(feet > 2500) {
    return "cannot travel that far"
   }
}

console.log(calculatesFarePrice(45, 18))
