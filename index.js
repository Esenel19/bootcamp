const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Quizz = require('./models/quizz.js');
// Créer une application Express
const app = express();
const port = process.env.PORT || 3001
app.use(express.json());
app.use(cors());
// Configurer la connexion à la base de données MongoDB
mongoose
.connect("mongodb://esenel:Azerty@ac-u3m4vgu-shard-00-00.c6p0g2f.mongodb.net:27017,ac-u3m4vgu-shard-00-01.c6p0g2f.mongodb.net:27017,ac-u3m4vgu-shard-00-02.c6p0g2f.mongodb.net:27017/?ssl=true&replicaSet=atlas-alypfx-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
     useUnifiedTopology: true,
})
.then(() => {
    console.log("connexion reussi");
})
.catch((error) => {
    console.error("Erreur", error);

});// Remplacez "nom-de-votre-base-de-donnees" par le nom de votre base de données

// Vérifier si la connexion à la base de données est établie avec succès
app.get("/quizz", (req, res) => {
    Quizz.find()
    .then((anna) => {
        res.status(201).json(anna);
    })
    .catch((error) => {
        res.status(500).json((error));
    });

})

app.post("/quizz", (req, res) => {
    const quizdata = req.body;
    Quizz.create(quizdata)
    .then((anna) => {
        res.status(201).json(anna);
    })
    .catch((error) => {
        res.status(500).json((error));
    });

})
// Lancer le serveur Express
app.listen(port, function() {
  console.log('Le serveur est à l\'écoute sur le port 3001');
});


// app.post("/quizz", (req, res) => {
//     Quizz.find()
//     .then((anna) => {
//         res.status(201).json(anna);
//     })
//     .catch((error) => {
//         response.status(500).json((error));
//     });

// })

// app.delete("/quizz", (req, res) => {
//     Quizz.find()
//     .then((anna) => {
//         res.status(201).json(anna);
//     })
//     .catch((error) => {
//         response.status(500).json((error));
//     });

// })

