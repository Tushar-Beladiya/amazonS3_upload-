import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

import userRoute from "./routes/user.route";

dotenv.config();

const app = express();

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI, {
   useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true,
});
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRoute);
app.get("/", (req, res) => {
   res.status(200).json({ message: "Welcome to my API" });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`App running on ${port}`);
});
export default app;
