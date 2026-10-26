// Your First Database: the shop's inventory
// Run it with: npm start
import { connect, disconnect } from "./db.js";

const client = await connect();

// ---------- Part 2: CREATE (the database, the collection, the first products) ----------
// YOUR CODE: Part 2

const database = client.db("inventoryDB");

const products = database.collection("products")

await products.insertOne(doc)

// ---------- Part 3: READ ----------
// YOUR CODE: Part 3

// ---------- Part 4: UPDATE ----------
// YOUR CODE: Part 4, UPDATE

// ---------- Part 4: DELETE and DROP ----------
// YOUR CODE: Part 4, DELETE and DROP

await disconnect();
