const  express = require('express');
const router = express.Router();
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/list',
  params: {limit: '24', start: '0'},
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

router.get('/feeds/list',async(req,res)=>{
    await axios.request(options).then(function (response) {
            res.json(response.data);
        }).catch(function (error) {
            console.error(error);
            res.status(404).send(error);
    });
});

module.exports=router;