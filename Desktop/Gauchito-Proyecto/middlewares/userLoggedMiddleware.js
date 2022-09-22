function userLoggedmiddleware (req,res,next){
    let isLogged = false;
    res.locals.isLogged = false;

    next()
}

module.exports = userLoggedmiddleware;