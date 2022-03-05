require("./config/dbConfig");

const cors = require("cors");
const express = require("express");
const app = express();

const Thing = require("./models/Thing");

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

//~~ Paramétrage des differentes reponses/request de notre route "/api/stuff"
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.post("/api/stuff", (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });

  thing
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré" }))
    .catch((err) => res.status(400).json({ err }));
});

app.put("/api/stuff/:id", (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((err) => res.status(400).json({ err }));
});

app.get("/api/stuff/:id", (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((err) => res.status(404).json({ err }));
});

app.get("/api/stuff", (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((err) => res.status(400).json({ err }));
});

app.delete("/api/stuff/:id", (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé" }))
    .catch((err) => res.status(400).json({ err }));
});

module.exports = app;
