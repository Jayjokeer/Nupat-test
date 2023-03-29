const  express = require('express')
const router = express.Router()
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/feeds/list',
  params: {limit: '24', start: '0'},
  headers: {
    'X-RapidAPI-Key': 'ae3543a747msh8fb627171bb536ap1575e3jsn68ca4ca7ac6a',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

router.get('/feeds/list',async(req,res)=>{
    await axios.request(options).then(function (response) {
            console.log(response.data);
            res.json(response.data)
        }).catch(function (error) {
            console.error(error);
    });
})

module.exports=router