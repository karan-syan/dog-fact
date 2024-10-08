import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import factsRoutes from "./routes/Fact.route.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .set("debug", true)
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDb Connected!"))
  .catch((err) => console.error(err));

app.use("/api/facts", factsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
