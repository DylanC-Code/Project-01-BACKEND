const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:
    "Origin,X-Requested-With,Content,Accept,Content-Type,Authorization",
};

app.use(cors(corsOptions), (req, res, next) => {
  next();
});

app.post("/api/stuff", (req, res, next) => {
  console.log(req.body);
  res.status(201).json({
    message: "Objet créée",
  });
  next();
});

app.get("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "Mon premier objet",
      description: "Les infos de mon premier objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/04/06/21/29/poop-4108423__340.jpg",
      price: 4900,
      userId: "qsomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "Mon deuxième objet",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://media.istockphoto.com/photos/dog-pooing-on-greensward-picture-id1137932946?b=1&k=20&m=1137932946&s=170667a&w=0&h=4Mey1ZEpxRzfakMvYCUuO8hRVUP-UHuLMuyRgM-cCEw=",
      price: 2900,
      userId: "qsomihvqios",
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;
