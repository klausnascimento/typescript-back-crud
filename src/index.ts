import express from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
// import { createUser } from "./controllers/ClientController";
import { createClient } from "./controllers/ClientController";
import { createProduct } from "./controllers/ProductController";
import { User } from "./entities/User";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.post("/users", createUser);
app.post("/clients", createClient);
app.post("/products", createProduct);

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "304191023",
  database: "typecrud",
  synchronize: true,
  logging: true,
  entities: [User],
})
  .then(() => {
    console.log("Connected to the database");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
