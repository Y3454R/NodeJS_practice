const express = require("express");
const app = express();
let { people } = require("./data");

//static assets
app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "please provide name" });
  }
  res.status(201).send({ success: true, person: name });
});

app.post("/api/people/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res.status(201).send({ success: true, data: [...people] });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  return res.status(401).send("provide credentials");
  // res.send("POST");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);
  // res.send("hello world");
  const person = people.find((person) => person.id == Number(id));
  if (!person) {
    return res.status(400).json({ success: false, msg: "no person" });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(201).send({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id == Number(id));
  if (!person) {
    return res.status(400).json({ success: false, msg: "no person" });
  }
  const newPeople = people.filter((person) => person.id !== Number(id));
  return res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("server listening on port 5000...");
});
