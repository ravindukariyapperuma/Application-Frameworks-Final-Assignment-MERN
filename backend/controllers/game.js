let  Game = require('../models/game');

/*
    method : GET
    description : get game by id
*/
exports.Find_Game = (req,res,next)=>{
    Game.find({'_id': req.params._id})
        .then(Game => res.json(Game))
        .catch(err=>res.status(400).json("Error:"+err))
};

/*
    method : GET
    description : get all games
*/
exports.Find_All_Games = (req,res,next)=>{
    Game.find()
        .then(Game => res.json(Game))
        .catch(err=>res.status(400).json('Error :'+err));
};

/*
    method : POST
    description : create new game
    params : body {
        username, name, description, link
    }
*/
exports.Add_Game = (req,res,next)=>{
    console.log('body data',req.body)
    const username = req.body.username;
    const name = req.body.name;
    const description = req.body.description;
    const link = req.body.link;

    const newGame = new Game({
        username,
        name,
        description,
        link,
    });
    console.log('newgame',newGame);

    if(req.file){
        newGame.image = req.file.path
    }
    newGame.save()
        .then(()=>res.json('Game details Added!'))
        .catch(err=>res.status(400).json("Error:"+err));

};

/*
    method : PUT
    description : update game
*/
exports.Update_Game = (req,res,next)=>{

    Game.findOne({'_id':req.params._id})
        .then(game =>{
            game.username = req.body.username;
            game.name = req.body.name;
            game.description = req.body.description;
            game.link = req.body.link;

            if(req.file){
                game.image = req.file.path
            }

            game.save()
                .then(()=>res.json('Game Updated!'))
                .catch(err=>res.status(400).json("Error:"+err));
        })
        .catch(err=> res.status(400).json('Err'+err))
};

/*
    method : DELETE
    description : Delete game by id
*/
exports.Delete_Game = (req,res,next)=>{
    Game.findOneAndDelete({'_id':req.params._id})
        .then(()=>res.json('Game Deleted'))
        .catch(err=>res.status(400).json('Error'+err))
}