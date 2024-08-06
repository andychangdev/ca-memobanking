const express = require("express");

const Emotion = require("../models/EmotionModel.js")
const { verifyToken } = require("../utilities/verifyToken.js");

const router = express.Router();


module.exports = router;