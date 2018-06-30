// arguments object - no longer bound with arrow function

const add = function(a, b) {
    console.log(arguments); //only in es5
    return a + b;
}

console.log(add(55,1));

const addArrow = (a,b) => a + b;

// this keyword - no longer bound with arrow function

const user = {
    'name':'Darshak',
    'cities': ['Mumbai','Charlotte', 'Bangalore'],
    printPlacesLived: function() {  //for this use es5 function because we want to access cities
        //console.log(this.name);
        //console.log(this.cities);    
        this.cities.forEach(function(city) {
            //console.log(this.name + ' has lived in ' + city); //error
        });  
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
        
    },
    printPlacesLivedes6() {
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLivedes6());
//user.printPlacesLived();


//Challenge area

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());