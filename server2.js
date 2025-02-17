import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Jake I" },
  { id: 2, name: "Ariannage B" },
  { id: 3, name: "Josh P" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match() && req.method === "GET") {
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
