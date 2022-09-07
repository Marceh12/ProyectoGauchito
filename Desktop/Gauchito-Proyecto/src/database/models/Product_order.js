module.exports= (sequelize, dataTypes) => {
    let alias = "Product_order";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.INTEGER
        },
        quantity: {
            type: dataTypes.INTEGER
        }
    }
    let config= {
        tableName: "product_order",
        timestamps: false
    }
    const Product_order = sequelize.define(alias,cols,config)
    return Product_order

}