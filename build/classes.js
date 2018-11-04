"use strict";
/* We create a class to create a small pet */
// We the mother class
class SmallPet {
    constructor(name, kind) {
        this.name = name;
        this.kind = kind;
    }
}
class Oviparous extends SmallPet {
    laysEggs() {
        return "egg";
    }
}
// the classes act as interfaces
class Bird extends Oviparous {
    fly() {
        return "Flying";
    }
}
class Fish extends Oviparous {
    swim() {
        return "Swimming";
    }
}
let dori = new Fish("Dori", "Fish");
console.log(dori.laysEggs());
console.log(dori.swim());
let hank = new Bird("Hank", "Bird");
console.log(`${hank.name} is ${hank.fly()}`);
console.log(hank instanceof Bird);
// hank.swim();
