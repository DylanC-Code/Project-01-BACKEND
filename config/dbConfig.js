const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://DylanC_Code:azerty1234@firstcluster.dntf9.mongodb.net/node-api?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à mongoDB échoué"));

module.exports = mongoose;
