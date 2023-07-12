const fs = require("fs");

exports.readFileInStreams = async (req, res) => {
  try {
    const readStream = fs.createReadStream("Project2/sample.txt");

    readStream.on("data", (chunk) => {
      // Process the chunk of data
      console.log("Received chunk:", chunk.toString());
    });

    readStream.on("end", () => {
      res.send("File reading completed");
    });

    readStream.on("error", (err) => {
      console.error("Error reading file:", err);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.writeStream = async (req, res) => {
  try {
    const writeStream = fs.createWriteStream("Project2/sample.txt");

    writeStream.write("Hello, World!", "utf8");
    writeStream.end();

    writeStream.on("finish", () => {
      res.send("File writing completed");
    });

    writeStream.on("error", (err) => {
      console.error("Error writing file:", err);
    });
  } catch (error) {
    console.log(error);
  }
};
