import express from "express";
import { productObj } from "./data.js";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;
const uri = "mongodb+srv://admin:admin@crudapp.ael8koi.mongodb.net/";

mongoose.connect(uri);
mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));
//   .then((res) => console.log("mongodb connect successfully"))
//   .catch((err) => console.log("err", err));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//root
app.get("/", (request, response) => {
  response.send("SERVER UP");
});

// get all products
// app.get("/allproduct", (request, response) => {
//   console.log("allProducts", request.query);
//   if (request.query.id) {
//     const filterData = productObj.filter(
//       (product) => product.id == request.query.id
//     );
//     response.send(filterData);
//     return;
//   }

//   response.send(productObj);
// });

// single product
// app.get("/product/:id", (req, res) => {
//   console.log(typeof req.params.id, "params");
//   const filterData = productObj.filter(
//     (product) => product.id == req.params.id
//   );

//   res.send(filterData);
// });

// USER CRUD
// create=>
// get=>
// update=>
// delete=>

app.post("/createuser", (req, res) => {
  console.log("body", req.body);
  res.send("CREATE USER");
});

app.get("/createuser", (req, res) => {
  res.send("get USER");
});

app.put("/createuser", (req, res) => {
  res.send("UPDATE USER");
});

app.delete("/createuser", (req, res) => {
  res.send("delete USER");
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
