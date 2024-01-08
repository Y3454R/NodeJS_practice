const express = require("express");
const app = express();
const logger = require("./logger");
// req => middleware => res
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

// app.get("/api/products", (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// // http://localhost:5000/api/v1/query?search=al&limit=1

// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) => {
//       return product.name.startsWith(search);
//     });
//   }

//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, Number(limit));
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send("no match!");
//     return res.status(200).json({ success: true, data: [] });
//   }
//   return res.status(200).json(sortedProducts);
// });

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});
