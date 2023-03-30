const  express = require('express');
const router = express.Router();
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/reviews/list',
  params: {offset: '0', globalId: 'a8d6747a-bfaa-46a7-92fb-892e3f76b264', limit: '20'},
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};
router.get('/reviews/list',async(req,res)=>{
    await axios.request(options).then(function (response) {
            res.json(response.data);
        }).catch(function (error) {
            console.error(error);
            res.send(error);
        });
});

module.exports= router;