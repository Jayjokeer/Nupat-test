const express = require('express');
const router = express.Router();
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/list-similarities',
  params: {
    limit: '18',
    start: '0',
    id: '15-Minute-Baked-Salmon-with-Lemon-9029477',
    apiFeedType: 'moreFrom',
    authorId: 'Yummly'
  },
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};
router.get('/feeds/list-similarities',async(req,res)=>{
    await axios.request(options).then(function (response) {
            res.json(response.data);
        }).catch(function (error) {
            console.error(error);
            res.send(error);
    });
});

module.exports= router;