

function authAdmin (req,res,next){
    if(req.session.userLogged){
        let user = req.session.userLogged;
            if(user.profile != 1){
                return res.redirect('/')
            }
    }
    next()
}

module.exports = authAdmin