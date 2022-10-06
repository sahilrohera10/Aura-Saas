const router = require("express").Router();

const batchRouter = require("../Controllers/BatchesController");
const memberRouter = require("../Controllers/MembersController");
const trainerRouter =  require("../Controllers/TrainersController");

router.post("/CreateBatch",batchRouter.CreateBatch);
router.get("/GetAllBatches",batchRouter.GetAllBatches);
router.delete("/DeleteBatch/:batchId",batchRouter.DeleteBatch);
router.put("/UpdateBatchDetails",batchRouter.UpdateBatchDetails);


router.post("/AddParticipant",memberRouter.AddParticipant);
router.get("/GetUserDetails/:userId",memberRouter.GetUserDetails);
router.get("/GetAllParticipants",memberRouter.GetAllParticipants);
router.get("/GetAllParticipantsByBatch/:BatchId",memberRouter.GetAllParticipantsBatchWise);
router.put("/UpdateParticipantDetails",memberRouter.UpdateParticipantDetails);

router.post("/AddTrainer",trainerRouter.AddTrainer);
router.delete("/DeleteTrainer/:TrainerId",trainerRouter.DeleteTrainer);
router.get("/GetTrainers",trainerRouter.GetTrainers);
router.put("/UpdateTrainerDetails",trainerRouter.UpdateTrainerDetails);

module.exports = router;