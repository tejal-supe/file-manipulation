const fs = require("fs");

exports.createFile = async (req, res) => {
  try {
    await fs.writeFileSync("newFile.txt", req.body.content);
    res.send("File written successfully!!");
  } catch (error) {
    console.log(error);
  }
};

exports.readFile = async (req, res) => {
  try {
    await fs.readFile("newFile.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.append = async (req, res) => {
  try {
    await fs.appendFile("newFile.txt", req.body.content, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.send("File Appended Successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
exports.renameFile = async (req, res) => {
  try {
    fs.rename("newFile.txt", "new.txt", (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("File Renamed Successfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.delete = async (req, res) => {
  try {
    fs.unlink("new.txt", (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("File Deleted Sucessfully");
      }
    });
  } catch (error) {
    console.log(error);
  }
};
