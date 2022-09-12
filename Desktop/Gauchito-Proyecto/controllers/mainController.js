const path = require('path');
const fs = require('fs');



const controller =  {
    index: (req, res) => {
        res.render('index')
    },

    

    

    create: (req, res) => {
        res.render ('create')
    },

    edit: (req, res) => {
        res.render ('edit')
    }
}

module.exports = controller;