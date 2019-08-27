let wakeDog = function wakeDog(dogName, dogBreed) {
    let str = `Wake ${dogName} the ${dogBreed}`
    console.log(str)
    return str
}
let leashDog = function leashDog(dogName, dogBreed) {
    let str = `Leash ${dogName} the ${dogBreed}`
    console.log(str)
    return str
}
let walkToPark = function walkToPark(dogName, dogBreed) {
    let str = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(str)
    return str
}
let throwFrisbee = function throwFrisbee(dogName, dogBreed) {
    let str = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(str)
    return str
}
let walkHome = function walkHome(dogName, dogBreed) {
    let str = `Walk home with ${dogName} the ${dogBreed}`
    console.log(str)
    return str
}
let unleashDog = function unleashDog(dogName, dogBreed) {
    let str = `Unleash ${dogName} the ${dogBreed}`
    console.log(str)
    return str
}

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

let results = []

function exerciseDog(dogName,dogBreed) {
   for (let i = 0; i < routine.length; i++){
      let answer = routine[i](dogName,dogBreed)
      results.push(answer)
   }
   return results
}