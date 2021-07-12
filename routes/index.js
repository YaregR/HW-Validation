const express = require('express');
const router = express.Router();
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const validation = require('./validationSchema.js');
const Ajv = require('ajv');
const ajv = new Ajv();


/* GET home page. */
router.get('/', (req, res) => { 
  res.render('index', { title: 'Express' });
});


router.get('/main', (req, res) => {
  
  const { body } = req;
 
  const validate = ajv.compile(validation.schema);
  const valid = validate(body);
  if (!valid) {
    res.json({
      status: 'invalid data', 
      payload: { error: validate.errors }
    });
  } else {res.json({status: 'ok'});}
  
});


module.exports = router;


