import express from 'express';
const PORT = 3000;

const app = express();

app.get('/', (req, res)=> 
	res.json({status:`NTask API - porta ${PORT}`})
);

app.get('/tasks', (req, res)=> 
	res.json({
		tasks: [
			{title: "Fazer compras"},
			{title: "Concertar o pc"}
		]
	});
);

app.listen(PORT, ()=> 
	console.log(`NTask API - porta ${PORT}`)
);

