const  express = require('express')
const router = express.Router()
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://yummly2.p.rapidapi.com/reviews/list',
  params: {offset: '0', globalId: 'a8d6747a-bfaa-46a7-92fb-892e3f76b264', limit: '20'},
  headers: {
    'X-RapidAPI-Key': 'ae3543a747msh8fb627171bb536ap1575e3jsn68ca4ca7ac6a',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};
router.get('/reviews/list',async(req,res)=>{
    await axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
})

module.exports= router