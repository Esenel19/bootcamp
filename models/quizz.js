const mongoose = require("mongoose");

// Schéma de données pour le quiz
const quizzSchema = new mongoose.Schema({
  nom: { type: String },
  rounds: [{
    questions: String,
    reponses: [String],
    corrects: [Number]
  }],
  categorie: String
});

module.exports = mongoose.models.Quizz || mongoose.model("Quizz", quizzSchema);
