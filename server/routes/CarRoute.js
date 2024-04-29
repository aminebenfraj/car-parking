const { Router } = require("express")
const router = Router()
const { getCars, deleteCar, updateCar, saveCar, getCar } = require("../controllers/CarControllers")
const { createMission, getMissionById, updateMissionById, deleteMissionById, getAllMissions } = require("../controllers/MissionController")

router.get("/get", getCars);
router.post("/save", saveCar);
router.put("/update/:id", updateCar)
router.delete("/delete/:id", deleteCar)
router.get("/get/:id", getCar);

router.post("/missions", createMission);
router.get("/missions/:id", getMissionById);
router.get("/allmissions", getAllMissions);
router.put("/missions/update/:id", updateMissionById);
router.delete("/missions/delete/:id", deleteMissionById);

module.exports = router;