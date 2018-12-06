var nameVar = 'Darshak';
nameVar = 'Mike'; //reassign is allowed
var nameVar = 'Mehta'; //redefined is allowed
console.log('nameVar', nameVar);

let nameLet = 'Let';
nameLet = 'Relet'; //We can reassign
//let nameLet = 'error';   //We cannot redefine (babel gives error)
console.log('nameLet', nameLet);

const nameConst = 'Frank'; //you cannot reassign
//const nameConst = 'Babel Error'; // you cannot redefine or reassign

console.log('nameConst', nameConst);


function getPetName() {
    var petName = 'Cat';
    return petName;
}
console.log(petName); //==> error
getPetName();

//Block Scoping
const fullName = 'Darshak Mehta';
let firstName; //therefore defined outsided
if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

//console.log(firstName); //for const and let we cant work because its inside block

console.log(firstName); //now this will not give error