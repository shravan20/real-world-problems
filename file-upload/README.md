# File Upload using Multer package in Express.js

File Upload is a simple feature, that can be implemented using Multer package. Multer is a package, used as an middleware to upload a file into file system.


As Multer documentation states,
**" Multer is a Node.js Middleware for handling `multipart/form-data` , which is primarily used for uploading files. It is written on top of busboy for maximum efficiency. Multer adds a `body` object and a `file` or `files` object to the request object. The bodyobject contains the values of the text fields of the form, the `file` or `files` object contains the files uploaded via the form. "**


## Step by Step 

*Step 1:* Create a project using npm or yarn if you want, to add a package.json.

`mkdir file-upload && cd file-upload`
`npm init --yes`

<br>

*Step 2:* Install the dependencies.

- express [Minimal framework]
- multer  [Upload Middleware/Library]
- body-parser [Parse Request Body]
- morgan [Application Request Logs]

`npm install express multer body-parser morgan dotenv --save`

*Step 3:* Create app.js and create a simple Express server.

Following code:

`
import express from "express";
import morgan from  "morgan";
import bodyParser from "body-parser";

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}`),
);
`

To run the code:

`node app.js`


*Step 4:* I have created a basic structuring of the backend

```bash
├── src/
│   ├── api/
│   │   └── assets
│   │       └── assets-router.js // Asset Router
│   │       └── controller.js    // Asset Controller
│   │       └── service.js       // Asset Services
│   │       └── repository.js    // Asset Repository
│   │       └── model.js         // Asset Model
│   │
│   ├── config/dbConfig          // Database Connectivity
│   │
│   ├── middlewares/uploadFile   // Upload File Multer Middlewares
│   │
│   ├── uploads/                 // Uploaded files will be stored here
│
├── package.json
├── app.js
```


*Step 5:* Next, using the Multer for uploading images. Basically, create a middleware for handling form-data uploaded.



