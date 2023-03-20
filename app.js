const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let dateformat = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  response.send(dateformat);
});

module.exports = app;
