// import { greet, persons } from "./persons.mjs";
import * as char from "./persons.mjs";

for (const el of char.persons) {
  console.log(char.greet(el));
}
