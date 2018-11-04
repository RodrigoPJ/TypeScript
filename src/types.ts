type color = string;

let red: color = "red";
let blue: color = "blue";

console.log(`Roses are ${red}, Violets are ${blue}`);

/* We create the animals and basis */
function layEggs():string {
  return "An egg";
}
function fly():string {
  return "Flying...";
}
function swim() {
  return "Swimming...";
}

interface Bird {
  name: string;
  kind: string;
  layEggs():string;
  fly():string;
}

interface Fish {
  name: string;
  kind: string;
  layEggs(): string;
  swim():string;
}

function getSmallPet(name: string, kind: string): Fish | Bird | undefined{
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
 // return 
}

function isFish(pet: Fish | Bird | undefined ): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}

function move(pet: Fish | Bird| undefined):string {
  if(pet === undefined){return 'does not move'}
  let displacement:string;
  if (isFish(pet)) {
   displacement =  pet.swim();
  } else {
   displacement =  pet.fly();
  }
  return displacement;
}

let myPet = /* <Fish | Bird> */ getSmallPet("Hank", "fish");
console.log((<Fish | Bird> myPet).layEggs());
// console.log(myPet.swim())
console.log(move(<Fish>myPet));

// console.log(myPet.fly());

console.log(move(<Fish>myPet));

let woody =/*  <Bird> */ getSmallPet("Woody", "bird");

// console.log( woody.fly());

console.log(move(woody));
