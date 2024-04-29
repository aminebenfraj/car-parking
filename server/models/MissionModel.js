const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
    destination: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["Pending", "In Progress", "Completed"],
        default: "Pending",
        required: true,
    },
    startTime: {
        type: Date,
        default: Date.now,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model("Mission", missionSchema);
