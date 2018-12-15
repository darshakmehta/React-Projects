/**
 * 
 * Object Destructuring
 */
const person = {
    name: 'Darshak',
    age: 23,
    location: {
        city: 'Charlotte',
        temp: 96
    }
};

//const name = person.name;
// const age = person.age;
const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city: cityName, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${cityName}.`);    
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penquin'
    }
};
const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);

/***
 * 
 * Array Destructuring
 */

 const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

 const [, city, state = 'New York'] = address;//ordered list of variable names
 console.log(`You are in ${city} ${state}.`);


 const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
 const [itemName, ,mediumPrice] = item;
 console.log(`A medium ${itemName} costs ${mediumPrice} `);