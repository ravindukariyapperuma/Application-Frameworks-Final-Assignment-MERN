const router = require('express').Router();
const UserControlller = require('../controllers/user');


router.get('/finds',UserControlller.Find_All_Users);    // display the all the User

router.get('/find/:username',UserControlller.Find_User);   // Find the User---------------------------------------

router.post('/add',UserControlller.Add_User);    // Add the User------------------------------------------------

router.put('/update/:username',UserControlller.Update_User);   // Update  the User-------------------------------

router.delete('/delete/:username',UserControlller.Delete_User);   // Delete User----------------------------------

module.exports = router;  //exports