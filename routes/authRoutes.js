const express = require("express");
const router = express.Router();
const { createUser, logInUser } = require("../controller/UserController");
const { createMed, LoadMed} = require("../controller/MedicineController")


router.post('/Sign_Up_Zar_Screen', createUser)
router.post('/Sign_In_Screen', logInUser )

router.get('/Main_Screen',LoadMed)
//router.post('/Main_Screen',createMed)
// tu jeszcze jednego do zapisu lekow
module.exports = router;