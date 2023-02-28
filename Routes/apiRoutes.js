const router = require("express").Router();

const batchRouter = require("../Controllers/BatchesController");
const memberRouter = require("../Controllers/MembersController");
const trainerRouter = require("../Controllers/TrainersController");
const accessRouter = require("../Controllers/UserAccess");

router.post("/register", accessRouter.Register);
router.post("/login", accessRouter.Login);

router.post("/CreateBatch", batchRouter.CreateBatch); //DONE
router.get("/GetAllBatches", batchRouter.GetAllBatches); //DONE
router.delete("/DeleteBatch/:batchId", batchRouter.DeleteBatch);
router.put("/UpdateBatchDetails", batchRouter.UpdateBatchDetails);

router.post("/AddParticipant", memberRouter.AddParticipant); //done
router.get("/GetUserDetails/:userId", memberRouter.GetUserDetails);
router.get("/GetAllParticipants", memberRouter.GetAllParticipants); //done
router.get("/joiningsDateWise/:from/:to", memberRouter.AllJoiningsDateWise);
router.put("/deleteParticipant/:id", memberRouter.deleteFromBatch);
router.get(
  "/GetAllParticipantsByBatch/:BatchId",
  memberRouter.GetAllParticipantsBatchWise //done
);
router.put("/UpdateParticipantDetails", memberRouter.UpdateParticipantDetails);

router.post("/AddTrainer", trainerRouter.AddTrainer); //DONE
router.delete("/DeleteTrainer/:TrainerId", trainerRouter.DeleteTrainer);
router.get("/GetTrainers", trainerRouter.GetTrainers); //DONE
router.put("/UpdateTrainerDetails", trainerRouter.UpdateTrainerDetails);

module.exports = router;
