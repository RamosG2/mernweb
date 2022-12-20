const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const controllers = require("./controllers");

const app = express();
app.use(cors());
app.use(express.json());

app.get('/user/:userId',controllers.getUserById);
app.post('/register',controllers.register);
app.post('/login',controllers.login); 

app.get('/', function(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })   
  })

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server funcionando en puerto ${PORT}`);
    db();
});

module.exports = app;