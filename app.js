require("./config/dbConfig");

const cors = require("cors");
const express = require("express");
const app = express();

//^ Require des differentes routes
const stuffRoutesss = require("./routes/stuff");

//! Permet de parser le body de la request
app.use(express.json());

//! Permet de parametrer les differents cors de la request

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:
    "Origin,X-Requested-With,Content,Accept,Content-Type,Authorization",
};
app.use(cors(corsOptions), (req, res, next) => {
  next();
});

//^^ Gestion des routes
app.use("/api/stuff", stuffRoutesss);

module.exports = app;
