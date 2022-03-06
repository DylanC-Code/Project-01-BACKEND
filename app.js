require("./config/dbConfig");

const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();

//^ Appel des differentes routes
const stuffRoutes = require("./routes/stuff");
const userRoute = require("./routes/user");

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
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoute);

module.exports = app;
