const router = require("express").Router();
const streamOperations = require("../Controllers/streamOperationController");

router.get("/readStream", streamOperations.readFileInStreams);
router.get("/writeStream", streamOperations.writeStream);

module.exports = router;
