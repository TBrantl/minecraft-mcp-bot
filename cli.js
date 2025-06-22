// --- CLI Tools Module ---
const mining = require('./mining');
const building = require('./building');
const movement = require('./movement');
const inventory = require('./inventory');
const logging = require('./logging');

function printHelp() {
  console.log(`Available commands:\n  connect <host> <port> <username>\n  mine <ore>\n  build\n  patrol\n  inventory\n  reset-home\n  help`);
}

async function runCLICommand(cmd, args, bot, agentState) {
  switch (cmd) {
    case 'connect':
      // ... connect logic
      break;
    case 'mine':
      await mining.mineResources(bot);
      break;
    case 'build':
      await building.buildHomeBase(bot, agentState.homeBase, agentState.homeBuildAttempted, agentState.setHomeBase, agentState.gatherHomeMaterials, agentState.ensureCraftingTable, agentState.craftItem);
      break;
    case 'patrol':
      // ... patrol logic
      break;
    case 'inventory':
      await inventory.batchCleanup(bot);
      break;
    case 'reset-home':
      agentState.homeBase = null;
      agentState.homeBuildAttempted = false;
      logging.log('CLI', 'Home base reset!');
      break;
    case 'help':
    default:
      printHelp();
      break;
  }
}

module.exports = {
  runCLICommand,
  printHelp
}; 