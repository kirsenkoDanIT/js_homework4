'use strict'

const createNewUser = () => {
    const newUser = {
        firstName: prompt('Enter your name', 'Ivan'),
        lastName: prompt('Enter last name', 'Ivanov'),
        getLogin: function () {
            return (`${this.firstName[0]}${this.lastName}`).toLowerCase();
        },
    };
    return newUser;
};
let newUserOuter = createNewUser();
// console.log(newUserOuter.getLogin());
// console.log(newUserOuter)
console.log(`name: ${newUserOuter.firstName}
last name: ${newUserOuter.lastName}
login: ${newUserOuter.getLogin()}`);