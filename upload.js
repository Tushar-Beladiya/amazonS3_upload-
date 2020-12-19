const fs = require("fs");
const AWS = require("aws-sdk");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: "true" })); //Handle request form data
app.use(bodyParser.json());

app.post("/uploadImage", (req, res) => {
   console.log(req.file);
   const fileContent = fs.readFileSync(req.files.image);

   // Setting up S3 upload parameters
   const params = {
      Bucket: BUCKET_NAME,
      Key: "cat.jpg", // File name you want to save as in S3
      Body: fileContent,
   };

   // Uploading files to the bucket
   s3.upload(params, function (err, data) {
      if (err) {
         throw err;
      }
      return res.send({ data });
   });
});

app.listen(8000, () => console.log("server is runnuing on port 3000!"));
