module.exports = app =>{

	return {
		findAll: (params, callback) => {
			return callback([
				{title: "Fazer compras"},
				{title: "Consertar o computador"},
				{title: "Estudar Node.js"}
			]);
		}
	};
};