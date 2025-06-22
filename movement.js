// --- Movement Module ---

function getBiasedRandomNearbyGoal(bot, lastDirection, lastPositions, MAX_LAST_POSITIONS) {
  // ... (move logic from index.js here)
}

function shouldSprint(bot) {
  // ... (move logic from index.js here)
}

function shouldJump(bot) {
  // ... (move logic from index.js here)
}

function isStuck(bot) {
  // ... (move logic from index.js here)
}

// New: Move to a target position using pathfinding
async function moveTo(bot, position, options = {}) {
  return new Promise((resolve, reject) => {
    const { GoalBlock } = require('mineflayer-pathfinder').goals;
    bot.pathfinder.setMovements(bot.defaultMovements);
    bot.pathfinder.setGoal(new GoalBlock(position.x, position.y, position.z));
    const onArrived = () => {
      bot.removeListener('goal_reached', onArrived);
      resolve();
    };
    bot.once('goal_reached', onArrived);
    // Optionally, add a timeout or error handler
    setTimeout(() => {
      bot.removeListener('goal_reached', onArrived);
      reject(new Error('Pathfinding timeout'));
    }, options.timeout || 20000);
  });
}

// Export all movement functions
module.exports = {
  getBiasedRandomNearbyGoal,
  shouldSprint,
  shouldJump,
  isStuck,
  moveTo
}; 