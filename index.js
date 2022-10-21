import express from "express";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";
import checkAuth from "./utils/checkAuth.js";
import cors from "cors";
import * as UserController from "./controllers/UserController.js";
import * as Category from "./controllers/Category.js";

mongoose
  .connect(
    "mongodb+srv://admin:wwwwww@cluster0.yx9lm8n.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());
app.use(cors());

app.post("/auth/login", UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/category", Category.getCetegory);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log("SERVER OK");
});
