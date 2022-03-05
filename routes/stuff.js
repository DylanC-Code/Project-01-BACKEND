const express = require("express");
const router = express.Router();

const stuffCtrl = require("../controllers/stuff");
const auth = require("../middleware/auth");

//~~ Paramétrage des differentes reponses/request de notre route "/api/stuff"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

router.get("/:id", auth, stuffCtrl.getOneThing);
router.get("/", auth, stuffCtrl.getAllThings);
router.post("/", auth, stuffCtrl.createThing);
router.put("/:id", auth, stuffCtrl.updateThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);

module.exports = router;
