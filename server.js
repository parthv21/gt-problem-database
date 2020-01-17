const express = require("express");
const path = require("path");
const tabletop = require("tabletop");

const app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.use(express.static(path.join(__dirname, "/client/build")));

app.listen(server_port, server_ip_address, function() {
  console.log("Listening on " + server_ip_address + ", port " + server_port);
});

app.get("/api/getProblems", (req, res) => {
  var sheetKey = "1YJHZdoPdEIUE46BSdAGz8BCE10-VMasHI3y4dT3CXp0";
  tabletop.init({
    key: sheetKey,
    callback: sheet => {
      res.json(sheet);
      console.log("Sent list of problems");
    },
    simpleSheet: true
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "client/build/index.html"));
});

//"heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build"
