//import fs from "fs";
import fs from "fs/promises";
/*
//readFile() - callback
fs.readFile("./test.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//readFileSync - Synchronous
const data = fs.readFileSync("./test.txt", "utf-8");
console.log(data);
*/

//readFile() - Promise .then() or async await .then()
/*
fs.readFile("./test.text", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
*/
/* My async await
const fileName = await fs.readFile("./test.txt", "utf-8");
console.log(fileName);
*/

//Error catch way to do this
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//writeFile()
const writeFile = async () => {
  try {
    //NOTE WRITE FILE OVERRIDES THE CURRENT FILE
    await fs.writeFile("./test.txt", " Adding more data BRRRRR ");
    console.log("I WROTE TO THIS POGGERS");
  } catch (error) {
    console.log(error);
  }
};

//AppendFile()
const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", " \n Adding more data BRRRRR ");
    console.log("I WROTE TO THIS POGGERS 2");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
