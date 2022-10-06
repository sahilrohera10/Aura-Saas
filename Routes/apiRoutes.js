const router = require("express").Router();

const batchRouter = require("../Controllers/BatchesController");
const memberRouter = require("../Controllers/MembersController");
const trainerRouter =  require("../Controllers/TrainersController");

router.post("/CreateBatch",batchRouter.CreateBatch);
router.get("/GetAllBatches",batchRouter.GetAllBatches);
router.delete("/DeleteBatch/:batchId",batchRouter.DeleteBatch);


router.post("/AddParticipant",memberRouter.AddParticipant);
router.get("/GetUserDetails/:userId",memberRouter.GetUserDetails);
router.get("/GetAllParticipants",memberRouter.GetAllParticipants);
router.get("/GetAllParticipantsByBatch/:BatchId",memberRouter.GetAllParticipantsBatchWise);

router.post("/AddTrainer",trainerRouter.AddTrainer);
router.get("/GetTrainers",trainerRouter.GetTrainers);
router.delete("/DeleteTrainer/:TrainerId",trainerRouter.DeleteTrainer);

module.exports = router;