const mongoose = require("mongoose");

const MONGO_URL = 'mongodb://localhost/autenticacionLocalYT';

const db = async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URL)
    .then( () => console.log("DB funcionando"))
    .catch( error => console.log(error));
}

module.exports = db
