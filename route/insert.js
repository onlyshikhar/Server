let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let mongoose = require ('mongoose')

let News=require('../model/stu');


let db ='mongodb://localhost/first';
mongoose.connect(db);

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
	extended: true
}))

router.post('/', function(req,res,next) {
	News.create(req.body).then((data)=>{
		res.send(data);
	})
});


router.get('/find', function(req, res, next) {
  News.find(function(err,news){
      if(err){
          res.send("Error Retrieving News");
      } else{
          console.log(news);
          res.json(news);
      }
  });
  });

router.delete('/delete/:id',function(req,res){
	News.remove({
		_id:req.params.id},(err,mov)=>{
			if(err){
				res.send("error")
			}
			else{
				res.send("deleted successsfully")
			}
		});
});

module.exports=router;