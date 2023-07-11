const router = require("express").Router();
const directoryController = require("../Controllers/directoryOperationController");

router.get("/create", directoryController.createDirectory);
router.get("/exits", directoryController.exits);
router.get("/list", directoryController.listFolders);
router.get("/deleteDir", directoryController.recusriveDeleteDir);
router.get("/copyDir", directoryController.copyDirectory);

module.exports = router;
