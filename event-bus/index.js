const express = require("express");
const bp = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bp.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  try {
    axios.post("http://localhost:4000/events", event);
    axios.post("http://localhost:4001/events", event);
    axios.post("http://localhost:4002/events", event);

    res.send({status: 'Ok'});
  } catch (error) {console.log(error)}

  
});

app.listen(4005, () => {
    console.log('Listening on 4005');
});
