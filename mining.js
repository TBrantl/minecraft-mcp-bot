// --- Mining Module ---
const config = require('./config');

function getMiningYLevel(ore) {
  return config.miningYLevels[ore] || -59;
}

// Example mining function signatures (to be filled in with logic from index.js):
async function stripmineAtYLevel(bot, targetY = config.miningYLevels.diamond, branchLength = config.mining.branchLength, branchSpacing = config.mining.branchSpacing, numBranches = config.mining.numBranches) {
  // ... (move logic from index.js here)
}

async function mineResources(bot) {
  // ... (move logic from index.js here)
}

async function mineDiamond(bot, count = 3) {
  // ... (move logic from index.js here)
}

async function mineIron(bot, count = 3) {
  // ... (move logic from index.js here)
}

// Export all mining functions
module.exports = {
  getMiningYLevel,
  stripmineAtYLevel,
  mineResources,
  mineDiamond,
  mineIron
}; 