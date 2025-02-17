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

const server = http.createServer((req, res) => {
  /*Long way
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 404
  res.write("<h1>Hello World</h1>");
  */
  //can also do just res.end("Hello World");
  //Short way

  try {
    if (req.method === "GET") {
      //Router
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "WHAT ARE YOU DOING IN MY SWAMPY" }));
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About me</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 NOT FOUND</h1>");
      }
    } else {
      throw new Error("Method not Allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("SERVER ERROR");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
