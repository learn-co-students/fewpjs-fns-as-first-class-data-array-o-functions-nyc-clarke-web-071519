function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(a, b) {
    console.log(`Walk to the park with ${a} the ${b}`);
    return `Walk to the park with ${a} the ${b}`
}

function throwFrisbee(a, b){
    console.log(`Throw the frisbee for ${a} the ${b}`);
    return `Throw the frisbee for ${a} the ${b}`
}

function walkHome(a, b) {
    console.log(`Walk home with ${a} the ${b}`);
    return `Walk home with ${a} the ${b}`
}

function unleashDog(a, b) {
    console.log(`Unleash ${a} the ${b}`);
    return `Unleash ${a} the ${b}`
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


