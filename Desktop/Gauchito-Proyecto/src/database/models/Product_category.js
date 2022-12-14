module.exports= (sequelize, dataTypes) => {
    let alias = "Product_category";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        category_id: {
            type: dataTypes.INTEGER
        }
    }
    let config= {
        tableName: "product_category",
        timestamps: false
    }
    const Product_category = sequelize.define(alias,cols,config)
    return Product_category

}