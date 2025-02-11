let characters = [
  { name: "user1", isAcustomer: false },
  { name: "user2", isAcustomer: false },
  { name: "user3", isAcustomer: false },
];

function stillAcustomer(characters, owner) {
  characters.map((person) => {
    if (person.name == owner) {
      person.isAcustomer = true;
    } else {
      person.isAcustomer = false;
    }
  });
}

module.exports = { characters, stillAcustomer };
