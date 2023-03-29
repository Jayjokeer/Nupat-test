require('dotenv').config()
const express= require('express')
const PORT = process.env.PORT_NUMBER || 7000
//importing the routes
const autoCompleteRoute = require('./routes/feedsAutoComplete ')
const searchRoute = require('./routes/feedsSearch')
const listRoute = require('./routes/feedsList')
const listSimilaritiesRoute = require('./routes/feedsListSimilarities')
const reviewsListRoute = require('./routes/reviewsList')
const categorieslistRoute = require('./routes/categoriesList')
const tagsListRoute = require('./routes/tagsList')

const app = express()

//Middleware
app.use(express.json())

//Routes
app.use('/yummly/',autoCompleteRoute)
app.use('/yummly/',searchRoute)
app.use('/yummly/',listRoute)
app.use('/yummly',listSimilaritiesRoute)
app.use('/yummly',reviewsListRoute)
app.use('/yummly',categorieslistRoute)
app.use('/yummly',tagsListRoute)

app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`)
})

