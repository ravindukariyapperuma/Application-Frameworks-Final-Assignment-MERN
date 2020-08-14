const router = require('express').Router();
const GameControlller = require('../controllers/game');
const upload  = require('../Uploadmiddleware/upload');


router.get('/finds',GameControlller.Find_All_Games);    // display the all the Game

router.get('/find/:_id',GameControlller.Find_Game);   // Find the Game---------------------------------------

router.post('/add',upload.single('image'),GameControlller.Add_Game);    // Add the Game------------------------------------------------

router.put('/update/:_id',upload.single('image'),GameControlller.Update_Game);   // Update  the Game-------------------------------

router.delete('/delete/:_id',GameControlller.Delete_Game);   // Delete Game----------------------------------

module.exports = router;  //exports