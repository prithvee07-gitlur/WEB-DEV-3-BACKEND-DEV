const express=require("express");
const getNotes = require("../controller/noteController");
const isLoggedIn = require("../middleware/isLoggedIn");

const router = express.Router();  // express me routing ka instance hamne route me le liya an ise export ka denge

router.get("/notes",isLoggedIn,getNotes);

module.exports=router;

// last me index.js me jayenge and app.use karenge 