// --- Building Module ---
const config = require('./config');

async function buildHomeBase(bot, homeBase, homeBuildAttempted, setHomeBase, gatherHomeMaterials, ensureCraftingTable, craftItem) {
  // ... (move logic from index.js here)
}

async function buildHomeWithFallbacks(bot, homeBase, setHomeBase, ensureCraftingTable, craftItem) {
  // ... (move logic from index.js here)
}

// Export all building functions
module.exports = {
  buildHomeBase,
  buildHomeWithFallbacks
}; 