const express = require('express')
    , bodyParser = require('body-parser')
    , controllers = require('./controllers/controllers.js')
    , app = express()
    , port = 3232

app.use(bodyParser.json())

app.get('/api/favorites', controllers.getFavorites)
app.post('/api/favorites', controllers.createFavorite)
app.delete('/api/favorites/:id', controllers.deleteFavorite)
app.put('/api/favorites/:id', controllers.updateFavorite)

app.listen(port, () => {
    console.log('I hate all the orphans in the whole world', port);
})