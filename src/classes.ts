/* We create a class to create a small pet */
// We the mother class
class SmallPet {
  name: string;
  kind: string;
  constructor(name: string, kind: string) {
    this.name = name;
    this.kind = kind;
  }
}
class Oviparous extends SmallPet {
  
  laysEggs() {
    console.log("An egg...");
  }
}
// the classes act as interfaces
class Bird extends Oviparous {
 
  fly() {
    console.log("Flying");
  }
}

class Fish extends Oviparous {
  swim() {
    console.log("Swimming");
  }
}

let dori = new Fish("Dori","Fish");
dori.laysEggs();
dori.swim();

let hank = new Bird("Hank","Bird")
hank.fly();
console.log(hank instanceof Bird)
// hank.swim();