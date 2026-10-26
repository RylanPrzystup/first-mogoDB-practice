// npm run check-mongodb: is MongoDB already on this computer?
import { MongoClient } from "mongodb";
import { DryMongoBinary } from "mongodb-memory-server";

const local = new MongoClient("mongodb://127.0.0.1:27017", { serverSelectionTimeoutMS: 1500 });
try {
  await local.connect();
  const info = await local.db().admin().serverInfo();
  console.log("YES: MongoDB " + info.version + " is installed and running on this computer.");
  console.log("Skip npm run get-mongodb. Go straight to npm start.");
} catch {
  const options = await DryMongoBinary.generateOptions();
  const downloaded = await DryMongoBinary.locateBinary(options);
  if (downloaded) {
    console.log("MongoDB is not installed, but the practice MongoDB is already downloaded.");
    console.log("Go straight to npm start.");
  } else {
    console.log("NO: MongoDB is not on this computer yet.");
    console.log("Run: npm run get-mongodb   (a big download: wait for 100%)");
  }
} finally {
  await local.close();
}
