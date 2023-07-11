const router = require("express").Router();
const fileMeta = require("../Controllers/fileMetaController");

router.get("/readMeta", fileMeta.getMetaData);
router.get("/permission", fileMeta.modifyPermission);
router.get("/ext", fileMeta.getPathExtension);
router.get("/path", fileMeta.isFile);

module.exports = router;
