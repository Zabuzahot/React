const express = require('express');
const app = express();
const mysql = require('mysql');

const SELECT_ALL_POST = 'SELECT * FROM posts';

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'work_user',
	password:'test12345',
	database:'testwork'
});
connection.connect(err =>{
	if(err) {
		return err;
	}
});



app.get('/posts', (req, res) =>{
	connection.query(SELECT_ALL_POST,(err ,results) =>{
		if(err) {
			return re.send(err)
		}
		else{
			return res.json({
				data: results
			})
		}
	 });
	});

app.listen(4000, () =>{
	console.log ('Server Starts on port 4000');
}) 