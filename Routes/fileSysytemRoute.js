const router = require("express").Router()

const fleController = require("../Controllers/fileSystemController")

router.post("/writeFile",fleController.createFile);
router.get("/readFile",fleController.readFile)
router.put("/appendFile",fleController.append)
router.get("/renameFile",fleController.renameFile)
router.delete("/deleteFile",fleController.delete)

module.exports = router;