const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  let newlist = [];
  let youngPeople = people.filter((element) => element.age <= 25).forEach(element => {
    let newElement = {
        name: `${element.firstName} ${element.lastName}`,
        age: element.age
    };
    newlist.push(newElement);
  });
  console.log(newlist);


const numbers = [2, -30, 50, 20, -12, -9, 7];
console.log(numbers.filter((element) => element > 0).reduce((accr, cur) => accr + cur, 0));



const words = ['coder', 'programmer', 'developer'];
let capitalized = [];

words.forEach(word => {
    let Letter = word[0].toUpperCase();
    let newWord;
    newWord = Letter + word.slice(1)
    capitalized.push(newWord);
});
console.log(capitalized);