const db = require("../src/database/models")

const controladorAPIS =
{
    productoId: (req,res) => {
		db.Product.findByPk(req.params.id)
			.then(producto => {
				let urlImage = 'http://localhost:3050/images/' + producto.image
				return res.status(200).json({
					data: producto,
					urlImage,
					status: 200
				})
			})
	},
	todosProductos: (req,res) => {
		db.Product.findAll()
			.then(productos => {
				let cantidadProductos = { total: 0}
				let contadores = { empanadas: 0, alfajores: 0, mate: 0}
				let contCat = 0;
                let prodTotales = [];
				for (let i=0; i<productos.length; i++){
					cantidadProductos.total += 1
					
						let categoria = productos[i].category
						contadores[categoria] += 1
						prodTotales.push(productos[i])	
                }
				for (let categoria in contadores){
					contCat += 1
				}
				return res.status(200).json({
					data: prodTotales,
					totalCount: cantidadProductos.total,
					categories: {
						empanadas: contadores.empanadas,
						alfajores: contadores.alfajores,
						mate: contadores.mate,

					},
					categoryCount: contCat,
					status: 200
				})
			})
	},
    usuarioId: (req,res) => {
		db.User.findByPk(req.params.id)
			.then(user => {
                user.password = undefined
				return res.status(200).json({
					data: user,
					status: 200
				})
			})
			.catch((e) => {
				console.log(e)
			})
	},
	todosUsuarios: (req,res) => {
		db.User.findAll()
			.then(Users => {
				let usuariosTotal = 0;
                for (let i=0; i<Users.length; i++){
                    Users[i].password = undefined
					usuariosTotal += 1
                }
				return res.status(200).json({
					data: Users,
					count: usuariosTotal,
					status: 200
				})
			})
	},
	
}

module.exports = controladorAPIS;