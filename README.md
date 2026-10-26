# First Database Starter

West-MEC Coding Year 2, Shop Inventory, Day 1.

Your cart already works in IndexedDB. This week the shop's **products and stock** move to MongoDB.
Today you build that inventory with JavaScript: create, read, update, delete, and drop.
No MongoDB account today.

## Get the code

1. Open VS Code. **File > Open Folder** and pick your class folder.
2. **Terminal > New Terminal**, then type:

   ```
   git clone https://github.com/Xerrath/first-database-starter.git
   ```

3. **File > Open Folder** and open the new `first-database-starter` folder.
4. **Terminal > New Terminal** again. Install the packages:

   ```
   npm install
   ```

## Get MongoDB

5. Check if this computer already has MongoDB:

   ```
   npm run check-mongodb
   ```

6. **Only if it says NO**, download MongoDB. It is big (about 800 MB). Wait until it says `DONE`:

   ```
   npm run get-mongodb
   ```

## Run it

7. ```
   npm start
   ```

   You should see `Connected to ...` and then `Disconnected`.

## Files

- `app.js`: your code goes here, under each `YOUR CODE` comment.
- `db.js`: connects to MongoDB. You do not need to change it today.
- `package.json`: the project's name, its scripts (`npm start`, `npm run check-mongodb`, `npm run get-mongodb`), and the packages it needs.
- `setup/`: the two MongoDB scripts.

Needs Node.js 20.19 or newer (`node -v` to check).
