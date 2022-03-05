const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_PASSWORD}@firstcluster.dntf9.mongodb.net/node-api?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à mongoDB échoué"));

module.exports = mongoose;
