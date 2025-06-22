const express = require('express');
const mining = require('./mining');
const building = require('./building');
const movement = require('./movement');
const inventory = require('./inventory');
const logging = require('./logging');
const memory = require('./memory');
const cli = require('./cli');
const config = require('./config');
const mineflayer = require('mineflayer');
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder');

const app = express();
app.use(express.json());

let bot = null;
let agentState = {};

// Example bot creation and plugin loading (add this to your connect logic):
function createBot(options) {
  const bot = mineflayer.createBot(options);
  bot.loadPlugin(pathfinder);
  // Optionally, set default movements for the bot
  bot.defaultMovements = new Movements(bot);
  return bot;
}

// Export createBot for use in CLI/connect logic
module.exports.createBot = createBot;

// CLI command endpoint (example)
app.post('/cli', async (req, res) => {
  const { cmd, args } = req.body;
  try {
    await cli.runCLICommand(cmd, args, bot, agentState);
    res.status(200).json({ message: 'Command executed.' });
  } catch (err) {
    logging.error('CLI', 'Error running CLI command', err);
    res.status(500).json({ error: err.message });
  }
});

// Bot connect endpoint (example)
app.post('/connect', (req, res) => {
  // ... (use modular logic for bot connection)
  res.status(200).json({ message: 'Bot connected.' });
});

// ... (other endpoints as needed)

app.listen(3000, () => {
  logging.log('Server', 'Server listening on port 3000');
});

// Document: All bot logic is now modularized. See /mining.js, /building.js, /movement.js, /inventory.js, /logging.js, /memory.js, /cli.js, /config.js