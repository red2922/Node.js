import path from "path";
import url from "url";

const testPath = "./dir/item/file.txt";
//basename
console.log(path.basename(testPath));

//dir
console.log(path.dirname(testPath));

//extname()
console.log(path.extname(testPath));

//parse
console.log(path.parse(testPath));

const __filename = url.fileURLToPath(import.meta.url);
const __dir = path.dirname(__filename);

console.log(__filename);
console.log(__dir);

// join()
const filePath2 = path.join(__dirname, "dir5");
console.log(filePath2);

//resolve
