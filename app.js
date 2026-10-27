// Your First Database: the shop's inventory
// Run it with: npm start
import { connect, disconnect } from "./db.js";

const client = await connect();

// ---------- Part 2: CREATE (the database, the collection, the first products) ----------
// YOUR CODE: Part 2

const database = client.db("inventoryDB");
const products = database.collection("products")

//list database contents before inserting
const hoodie = {
    _id: "hoodie",
    name: "west mec hoodie",
    price: 38,
    stock: 3,
};

const hoodieResult = await products.insertOne(hoodie)
console.log("Inserted hoodie with ID:", hoodieResult);

const manyResult = await products.insertMany([

    {
        _id: "tee",
        name: "code crew tee",
        price: 18,
        stock: 10
    },

    {
        _id: "cap",
        name: "snapback cap",
        price: 22.5,
        stock: 5
    },
    {
        _id: "lanyard",
        name: "Lanyard",
        price: 6,
        stock: 0
    }

])

console.log("Inserted many products with IDs:", manyResult);

//list database agian
const updatedDatabase = await client.db("inventoryDB").collection("products").find().toArray();
console.log("Updated database contents:", updatedDatabase);



// ---------- Part 3: READ ----------
// YOUR CODE: Part 3

//find every product in the database
const allProducts = await client.db("inventoryDB").collection("products").find().toArray();
console.log("All products:", allProducts); 

//find products that are in stock
const inStockProducts = await client.db("inventoryDB").collection("products").find({ stock: { $gt: 0 } }).toArray();
console.log("In-stock products:", inStockProducts);

//sold out products
const soldOutProducts = await client.db("inventoryDB").collection("products").find({ stock: 0 }).toArray();
console.log("Sold out products:", soldOutProducts);

//find the caps product and price
const capProduct = await client.db("inventoryDB").collection("products").find({ _id: "cap" }, { projection: { name: 1, price: 1 } }).toArray();
console.log("Cap product and price:", capProduct);

//find a product that doesnt exist
const missing = await client.db("inventoryDB").collection("products").findOne({
    _id: "socks"
});
console.log("Missing product:", missing);



// ---------- Part 4: UPDATE ----------
// YOUR CODE: Part 4, UPDATE


// ---------- Part 4: DELETE and DROP ----------
// YOUR CODE: Part 4, DELETE and DROP




await disconnect();
