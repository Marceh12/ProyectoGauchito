module.exports= (sequelize, dataTypes) => {
    let alias = "Order";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        total_amount: {
            type: dataTypes.INTEGER
        },
        email:  {
            type: dataTypes.STRING
        },
        adress: {
            type: dataTypes.STRING
        }
    }
    let config= {
        tableName: "order",
        timestamps: false
    }
    const Order = sequelize.define(alias,cols,config)
    return Order

}