module.exports= (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        category:{
            type: dataTypes.STRING,
        },
        price:{
            type: dataTypes.INTEGER,
        },
        description: {
            type: dataTypes.TEXT
        },
        image: {
            type: dataTypes.STRING
        },
        stock: {
            type:dataTypes.INTEGER
        }
    };
    let config= {
        tableName: "Products",
        timestamps: false
    }

    const Product = sequelize.define(alias,cols,config)
    return Product
}