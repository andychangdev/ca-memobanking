const express = require("express");
const Emotion = require("../models/EmotionModel.js")
const { verifyToken } = require("../utilities/verifyToken.js");
const { validateFields } = require("../utilities/helperFunctions.js");

const router = express.Router();


// Add Emotion Entry
router.post("/", verifyToken, async (request, response) => {
    try {
        const userId = request.user.id;
        const { type, content } = request.body; 

        if (!type) {
            return response.status(400).json({ message: "Please select an emotion from the list." });
          };
        if (!content) {
            return response.status(400).json({ message: "Please describe why you feel this way." });
          };

        const entry = new Emotion({
            userId: userId,
            type,
            content,
        });

        await entry.save();

        return response.json({
            entry,
            message: "Emotion entry added successfully"
        });

    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Server Error", error: error.message});
      };
})


// Get All Emotion Entries or by type via /?type=emotion
router.get("/", verifyToken, async (request, response) => {
    try {
        const userId = request.user.id;
        const { type } = request.query;

        const filter = { userId: userId };
        if (type) {
            filter.type = type;
        }

        console.log(filter)

        const entries = await Emotion.find(filter).sort({ createdOn: -1 });

        return response.json({
            entries,
            message: "All emotion entries retrieved successfully",
        });
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Server Error", error: error.message});
    }
})

// Delete Emotion Entry
router.delete("/:entryId", verifyToken, async (request, response) => {
    try {
        const userId = request.user.id;
        const entryId = request.params.entryId;

        const entry = await Emotion.findOne({ _id: entryId, userId: userId });

        if (!entry) {
            return response.status(404).json({ message: "Emotion entry not found"})
        }

        await Emotion.deleteOne({ _id: entryId, userId: userId });

        return response.json({
            message: "Emotion entry deleted successfully"
        })

    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Server Error", error: error.message});
    }
})

// Get Emotion Count
router.get("/count", verifyToken, async (request, response) => {
    try {
        const userId = request.user.id;
        const types = ["Joy", "Sadness", "Anger", "Disgust", "Fear"];

        const emotionCountPromises = types.map((emotion) =>
            Emotion.countDocuments({ userId: userId, type: emotion })
        );

        const emotionCountArray = await Promise.all(emotionCountPromises);

        return response.json({
            emotionCount: emotionCountArray,
            message: "Emotion count retrieved successfully",
        });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;