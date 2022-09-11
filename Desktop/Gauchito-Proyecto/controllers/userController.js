const fs = require ('fs');
const path = require ('path');
const {validationResult} = require ('express-validator');
let db = require('../src/database/models')


const user = {

    getData: function(req,res){
        db.User.findAll()   
        .then(usuarios=> console.log(usuarios))    
    },
    
    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){
        return lastUser.id + 1;}
        return 1;
    },

    findAll: function(){
        return this.getData()
    },

    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id == id)
        return userFound;
    },

    create: function (req, res) {
        const resultValidation = validationResult (req);
        
        if (resultValidation.errors.length > 0){
            res.render ('register', {
                errors: resultValidation.mapped(),
            });
        }

        let user = [{
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2,
            image: '',
            
        }]
        
        usersJSON.push(user)

        usersJSON = JSON.stringify(usersJSON, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../data/usuarios.json'), usersJSON);
        res.redirect('/login');
    },

    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id != id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ()=> {}));
        return true
    }
}


module.exports = user;