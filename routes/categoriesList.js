const  express = require('express');
const router = express.Router();
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/categories/list',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  } 
};

router.get('/categories/list',async(req,res)=>{
    await axios.request(options).then(function (response) {
            res.json(response.data);
        }).catch(function (error) {
            console.error(error);
            res.send(error);
        });
});

module.exports= router;