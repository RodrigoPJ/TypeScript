/* We create a class to create a small pet */
type kind = "fish" | "bird";

class SmallPet {
  name: string;
  kind: kind;
  constructor(name: string, kind: kind) {
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

let dori = new Fish("Dori", "fish");
console.log(dori.laysEggs());
console.log(dori.swim());

let hank = new Bird("Hank", "bird");
console.log(`${hank.name} is ${hank.fly()}`);
console.log(hank instanceof Bird);
// hank.swim();

/* No we create a function that returns the appropriate type of pet using type guards  */

function getSmallPet1(name="name",kind:kind="fish"):Fish|Bird|undefined{
  if (name==="xdet") return undefined;
 switch(kind) {
   case("fish"):
    return new Fish(name,kind);
    break;
   case("bird"):
    return new Bird (name,kind);
   break;
   default:
   return undefined;
 }
}

let tweet = getSmallPet1('Tweety','bird');

//console.log(tweet.fly());

if(tweet instanceof Bird){
  console.log(tweet.fly());
}

let present = getSmallPet1();

console.log(present.swim());
