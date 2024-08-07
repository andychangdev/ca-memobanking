const mongoose = require ("mongoose");

const emotionSchema = mongoose.Schema({
    userId: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    type: { type: String, enum: ["Joy", "Sadness", "Anger", "Disgust", "Fear"], required: true },
    content: { type: String, required: true },
})

const EmotionModel = mongoose.model("Emotion", emotionSchema);

module.exports = EmotionModel