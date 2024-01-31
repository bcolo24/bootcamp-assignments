const tipRoutes = require('express').Router();
// TODO: Import helper functions and dependencies
// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// TODO: GET Route for retrieving all the tips
tipRoutes.get('/', (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile('./db/tips.json').then((data) => res.json(JSON.parse(data)));
});
// TODO: POST Route for a new UX/UI tip
tipRoutes.get("/turtle", (req, res) => {
    res.send("Tipping turtle");
  });

tipRoutes.post('/', (req, res) => {
  console.info(`${req.method} request received to add a tip`);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuid(),
    };

    readAndAppend(newTip, './db/tips.json');
    res.json(`Tip added successfully`);
  } else {
    res.error('Error in adding tip');
  }
});
module.exports = tipRoutes;