const { characters, stillAcustomer } = require("./characters.js");
stillAcustomer(characters, "user1");

for (const el of characters) {
  console.log(el);
}
