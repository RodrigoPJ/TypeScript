"use strict";
let red = "red";
let blue = "blue";
console.log(`Roses are ${red}, Violets are ${blue}`);
/* We create the animals and basis */
function layEggs() {
    return "An egg";
}
function fly() {
    return "Flying...";
}
function swim() {
    return "Swimming...";
}
function getSmallPet(name, kind) {
    if (kind === "fish") {
        return {
            name,
            kind,
            layEggs,
            swim
        };
    }
    else if (kind === "bird") {
        return {
            name,
            kind,
            layEggs,
            fly
        };
    }
    return;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    let displacement;
    if (isFish(pet)) {
        displacement = pet.swim();
    }
    else {
        displacement = pet.fly();
    }
    return displacement;
}
let myPet = /* <Fish> */ getSmallPet("Hank", "fish");
console.log(myPet.layEggs());
// console.log(myPet.swim())
console.log(move(myPet));
// console.log(myPet.fly());
console.log(move(myPet));
let woody = /*  <Bird> */ getSmallPet("Woody", "bird");
console.log(woody.fly());
console.log(move(woody));
