import express from "express";
import multer from "multer";
import signup from "../controller/user.controller";

const router = express.Router();

router
   .route("/signup")
   .post(
      multer({ dest: "temp/", limits: { fieldSize: 8 * 1024 * 1024 } }).single(
         "avatar"
      ),
      signup
   );

export default router;
