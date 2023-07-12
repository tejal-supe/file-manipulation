const express = require("express");
const app = express();
const route = require("./Routes/fileSysytemRoute");
const directoryRoute = require("./Routes/directoryOperationRoute");
const fileRouter = require("./Routes/fileMetaRoute");
const streamRouter = require("./Routes/streamOperationRoute");

app.use(express.json());
app.use("/api", route);
app.use("/directory", directoryRoute);
app.use("/file", fileRouter);
app.use("/stream", streamRouter);

app.listen("5000", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Running on Port 5000");
  }
});
