function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(x , y) {
    console.log(`Walk to the park with ${x} the ${y}`);
    return `Walk to the park with ${x} the ${y}`
}

function throwFrisbee(x, y){
    console.log(`Throw the frisbee for ${x} the ${y}`);
    return `Throw the frisbee for ${x} the ${y}`
}

function walkHome(x, y) {
    console.log(`Walk home with ${x} the ${y}`);
    return `Walk home with ${x} the ${y}`
}

function unleashDog(x, y) {
    console.log(`Unleash ${x} the ${y}`);
    return `Unleash ${x} the ${y}`
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
   let arr = []
    for(let i = 0; i < routine.length; i++){
        let task = routine[i]
        arr.push(task(dogName, dogBreed))
    }
    return arr
}