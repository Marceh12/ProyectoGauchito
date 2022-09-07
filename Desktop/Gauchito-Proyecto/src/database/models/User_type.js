module.exports= (sequelize, dataTypes) => {
    let alias = "User_type";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        type: {
            type: dataTypes.INTEGER
        }
    }
    let config= {
        tableName: "User_type",
        timestamps: false
    }
    const User_type = sequelize.define(alias,cols,config)
    return User_type

}