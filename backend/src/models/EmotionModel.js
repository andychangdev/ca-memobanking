const mongoose = require ("mongoose");

const emotionSchema = mongoose.Schema({
    userId: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    type: { type: String, enum: ["joy", "sadness", "anger", "disgust", "fear"], required: true },
    content: { type: String, required: false },
})

const EmotionModel = mongoose.model("Emotion", emotionSchema);

module.exports = EmotionModel