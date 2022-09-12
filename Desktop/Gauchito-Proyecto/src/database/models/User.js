module.exports= (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        profile: {
            type: dataTypes.INTEGER
        },
        name:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
    
        image: {
            type: dataTypes.STRING
        },
        password: {
            type:dataTypes.STRING
        }
    };
    let config= {
        tableName: "User",
        timestamps: false
    }

    const User = sequelize.define(alias,cols,config)
    return User
}