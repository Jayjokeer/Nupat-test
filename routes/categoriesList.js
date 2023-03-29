const  express = require('express')
const router = express.Router()
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/categories/list',
  headers: {
    'X-RapidAPI-Key': 'ae3543a747msh8fb627171bb536ap1575e3jsn68ca4ca7ac6a',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

router.get('/categories/list',async(req,res)=>{
    await axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
})

module.exports= router