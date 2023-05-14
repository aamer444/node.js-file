import express from "express";
import empRoutes from "./routes/empRoutes.js";
import connectDB from "./DB/connectDB.js";
const app = express();
connectDB();
app.use(express.json());

app.use("/", empRoutes);

app.listen(8000, () => {
  console.log("server started at port 8000");
});
