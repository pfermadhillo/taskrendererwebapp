var express = require('express');
const config = require('../DB.js');
const MongoClient = require('mongodb').MongoClient
var router = express.Router();







MongoClient.connect(config.DB, { useUnifiedTopology: true })
  .then(client => {
    // ...
	console.log("db conx success!")
    const db = client.db('TaskRendererDB')
    const tasksCollection = db.collection('tasks')
    
    /* GET home page. */
	router.get('/', function(req, res, next) {
	  
	  db.collection('quotes').find().toArray()
	    .then(results => {
	      console.log(results)
	      res.render('index', { 
	      	title: 'Express' ,
	      	tasks: results
	      });
	    })
	    .catch(error => console.error(error))
	});


	router.post('/task', function(req, res, next) {
	  tasksCollection.insertOne(req.body)
	    .then(result => {
	      console.log(result)
	      res.redirect('/')
	    })
	    .catch(error => console.error(error))
	});


  })
  .catch(console.error)


// app.post('/quotes', (req, res) => {
//   quotesCollection.insertOne(req.body)
//     .then(result => {
//       res.redirect('/')
//     })
//     .catch(error => console.error(error))
// })

// app.get('/', (req, res) => {
//   db.collection('quotes').find().toArray()
//     .then(results => {
//       console.log(results)
//     })
//     .catch(error => console.error(error))
//   // ...
// })

module.exports = router;







// MongoClient.connect(config.DB, { useUnifiedTopology: true })
//   .then(client => {
//     // ...
//     const db = client.db('TaskRendererDB')

//     const tasksCollection = db.collection('tasks')
//     /* GET home page. */
// 	console.log("db conx success!")


// 	app.post('/task', (req, res) => {
// 	  tasksCollection.insertOne(req.body)
// 	    .then(result => {
// 	      res.redirect('/')
// 	    })
// 	    .catch(error => console.error(error))
// 	})

// 	app.get('/', (req, res) => {
// 	  db.collection('tasks').find().toArray()
// 	    .then(results => {
// 	      console.log(results)
// 	      res.render('index', { 
// 	      	title: 'Express' ,
// 	      	tasks: results
// 	      });
// 	    })
// 	    .catch(error => console.error("/"+error))
// 	  // ...
// 	})


//   })
//   .catch(error => console.log("db "+error))



