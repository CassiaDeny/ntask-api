module.exports = app => {
	
	const PORT = app.get("port")
	
	app.get('/', (req, res)=> 
		res.json({status:`NTask API - porta ${PORT}`})
	
	);
};