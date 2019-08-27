var wakeDog = function(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`
}
const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed) {
    return routine.map(func => func(dog, breed))
}

