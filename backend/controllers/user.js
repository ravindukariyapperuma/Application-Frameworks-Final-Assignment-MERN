let  User = require('../models/user');

/*
    method : GET
    description : get user by username
*/
exports.Find_User = (req,res,next)=>{
    User.find({'username': req.params.username})
        .then(User => res.json(User))
        .catch(err=>res.status(400).json("Error:"+err))
};

/*
    method : GET
    description : get all users
*/
exports.Find_All_Users = (req,res,next)=>{
    User.find()
        .then(User => res.json(User))
        .catch(err=>res.status(400).json('Error :'+err));
};

/*
    method : POST
    description : create new user
    params : body {
        username, email, email, address, contactno, gender, password
    }
*/
exports.Add_User = (req,res,next)=>{
    console.log('body data',req.body)
    const username = req.body.username;
    const email = req.body.email;
    const address = req.body.address;
    const contactno = req.body.contactno;
    const gender = req.body.gender;
    const password = req.body.password;

    const newUser = new User({
        username,
        email,
        address,
        contactno,
        gender,
        password,
    });
    console.log('newuser',newUser);

    const user = newUser.save()
        .then(()=>res.json('User Added!'))
        .catch(err=>res.status(400).json("Error:"+err));
    // console.log(user);
};

/*
    method : PUT
    description : update user
*/
exports.Update_User = (req,res,next)=>{

    User.findOne({'username':req.params.username})
        .then(user =>{
            user.username = req.body.username;
            user.email = req.body.email;
            user.address = req.body.address;
            user.contactno = Number(req.body.contactno);
            user.gender = req.body.gender;
            user.password = req.body.password;

            user.save()
                        .then(()=>res.json('Product Updated!'))
                        .catch(err=>res.status(400).json("Error:"+err));
                })
        .catch(err=> res.status(400).json('Err'+err))
};


/*
    method : DELETE
    description : Delete user by username
    }
*/
exports.Delete_User = (req,res,next)=>{
    User.findOneAndDelete({'username':req.params.username})
        .then(()=>res.json('User Deleted'))
        .catch(err=>res.status(400).json('Error'+err))
}