const fs = require("fs");
const path = require("path");

const file = "newFile.txt";

// Retrieve file information such as size, permissions, and timestamps
exports.getMetaData = async (req, res) => {
  try {
    await fs.stat(file, (err, stats) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(200).send(stats);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//   Modify file permissions.
exports.modifyPermission = async (req, res) => {
  try {
    fs.chmod(file, 0o400, (err) => {
      //read file only
      if (err) {
        res.status(400).send(err);
      } else {
        res.send("File permission is modified!");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

//  Get the file extension from a file path.
exports.getPathExtension = async (req, res) => {
  try {
    const ext = path.extname(file);
    if (ext) {
      res.status(200).send(`The extension of file is ${ext}`);
    } else {
      res.status(400).send("Errror");
    }
  } catch (error) {
    console.log(error);
  }
};

//Check if a given path is a file or directory.
exports.isFile = async (req, res) => {
  try {
    await fs.stat(file, (err, stats) => {
      if (err) {
        res.status(400).send(err);
      } else {
        if (stats.isFile()) {
          res.status(200).send("The given path is a file");
        } else {
          res.status(200).send("The given path is directory");
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};
