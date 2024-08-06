const express = require("express");

const Emotion = require("../models/EmotionModel.js")
const { verifyToken } = require("../utilities/verifyToken.js");
const { validateFields } = require("../utilities/helperFunctions.js");

const router = express.Router();


// Add Emotion Entry
router.post("/add-entry", verifyToken, async (request, response) => {
    try {
        const userId = request.user.id;
        const { type, content } = request.body; 

        const validationError = validateFields({ type, content });
        if (validationError) {
            return response.status(validationError.status).json({ message: validationError.message });
        }

        const entry = new Emotion({
            userId: userId,
            type,
            content,
        });

        await entry.save();

        return response.json({
            entry,
            message: "Emotion entry added successfully"
        })

    } catch (error) {
        console.log(error)
        return response.status(500).json({ message: "Server Error", error: error.message});
      }
})

// Get All Emotion Entries
router.get("/get-all-emotions", verifyToken, async (request, response) => {
    try {
        const userId = request.user.id;

        const entries = await Emotion.find({ userId: userId }).sort({ createdOn: -1 });

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
router.delete("/delete-emotion/:entryId", verifyToken, async (request, response) => {
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


module.exports = router;