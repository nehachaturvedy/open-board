const express = require("express");
const socket = require("socket.io");

const app = express();

app.use(express.static("./"));

let port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log("Listening to port " + port);
});

const io = socket(server);

io.on("connection", (socket) => {
  // Received data
  socket.on("beginPath", (data) => {
    // data from frontend
    // Now transfer data to all connected computers
    io.sockets.emit("beginPath", data);
  });

  socket.on("drawStroke", (data) => {
    // data from frontend
    // Now transfer data to all connected computers
    io.sockets.emit("drawStroke", data);
  });

  socket.on("redoUndo", (data) => {
    // data from frontend
    // Now transfer data to all connected computers
    io.sockets.emit("redoUndo", data);
  });
});
