import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
const PORT = process.env.PORT;

//Ways to get current path
//Is not avaliable in ES Module
// __filename - current file name of path
// __dirname - current path of file you are in

//Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  /*Long way
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 404
  res.write("<h1>Hello World</h1>");
  */
  //can also do just res.end("Hello World");
  //Short way

  try {
    let filePath;
    if (req.method === "GET") {
      //Basic Router
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }
    } else {
      throw new Error("Method not Allowed");
    }

    const data = await fs.readFile(filePath);
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("SERVER ERROR");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
