type color = string;

let red: color = "red";
let blue: color = "blue";

console.log(`Roses are ${red}, Violets are ${blue}`);

/* We create two kinds of small pets */
function layEggs() {
  console.log("An egg");
}
function fly() {
  console.log("Flying...");
}
function swim() {
  console.log("Swimming...");
}

interface Bird {
  name: string;
  kind: string;
  layEggs();
  fly();
}

interface Fish {
  name: string;
  kind: string;
  layEggs();
  swim();
}

function getSmallPet(name: string, kind: string): Fish | Bird {
  if (kind === "fish") {
    return <Fish>{
      name,
      kind,
      layEggs,
      swim
    };
  } else if (kind === "bird") {
    return <Bird>{
      name,
      kind,
      layEggs,
      fly
    };
  }
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

let myPet = getSmallPet("Hank", "fish");
myPet.layEggs();

// myPet.fly();

move(myPet);

let woody = getSmallPet("Woody", "bird");

// woody.fly();

move(woody);
