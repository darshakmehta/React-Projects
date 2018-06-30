const square = function(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

//Challenge

const getFirstNameRegular = (fullName) => {
    return fullName.split(' ')[0];
}

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameRegular('Mehta Darshak'));
console.log(getFirstNameArrow('Darshak Mehta'));