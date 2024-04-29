const Mission = require('../models/MissionModel');
const Car = require('../models/CarModel');

// Create a new mission
module.exports.createMission = async (req, res) => {
    try {
        const newMission = await Mission.create(req.body);
        res.status(201).json(newMission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all missions
module.exports.getAllMissions = async (req, res) => {
    try {
        const missions = await Mission.find({ _id: { $nin: await Car.distinct("mission") } });
        res.status(200).json(missions);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

// Get a mission by ID
module.exports.getMissionById = async (req, res) => {
    try {
        console.log(req.params.id);
        const mission = await Mission.findById(req.params.id);
        console.log(mission);
        if (!mission) {
            return res.status(404).json({ error: 'Mission not found' });
        }
        res.status(200).json(mission);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a mission by ID
module.exports.updateMissionById = async (req, res) => {
    try {
    
        if (req.body.status !== 'Completed') {
        const updatedMission = await Mission.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
    
        if (!updatedMission) {
            return res.status(404).json({ error: 'Mission not found' });
        }
        } else {
            await Mission.findByIdAndDelete(req.params.id);
        }
    
        res.status(200).json({ success: true});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a mission by ID
module.exports.deleteMissionById = async (req, res) => {
    try {
        const deletedMission = await Mission.findByIdAndDelete(req.params.id);
        if (!deletedMission) {
            return res.status(404).json({ error: 'Mission not found' });
        }
        res.status(200).json({ message: 'Mission deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
