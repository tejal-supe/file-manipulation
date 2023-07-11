const fs = require("fs");

//Create a new directory
const folder = "/React/file-manipulation/Project2";
const listFolder = "/React/file-manipulation";
const destination = "/React";
// const folder =  /Project2 ...Got created in C:/Project2
exports.createDirectory = async (req, res) => {
  try {
    await fs.mkdir(folder, (err) => {
      if (err) {
        console.log(err, "error");
        res.status(400).send(err);
      } else {
        res.status(200).send("Directory Created Successfully!!!!");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.exits = async (req, res) => {
  try {
    const isFile = await fs.existsSync(folder);
    if (isFile) {
      res.send("File Exists!");
    } else {
      res.send("File is missing!! Please hit the create url");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.listFolders = async (req, res) => {
  try {
    const fileName = [];
    await fs.readdir(listFolder, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        data.forEach((file) => {
          fileName.push(file);
        });
        res.send(fileName);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.recusriveDeleteDir = async (req, res) => {
  try {
    await fs.rm(folder, { recursive: true }, (err) => {
      if (err) {
        res.send(err``);
      } else {
        res.send("Directory is deleted !!");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.copyDirectory = async (req, res) => {
  try {
    await fs.cp(folder, destination, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Directory copied successfully!!!");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
