// --- Logging Module ---
function log(module, message) {
  const ts = new Date().toISOString();
  console.log(`[${ts}][${module}] ${message}`);
}

function warn(module, message) {
  const ts = new Date().toISOString();
  console.warn(`[${ts}][${module}] ${message}`);
}

function error(module, message, err) {
  const ts = new Date().toISOString();
  console.error(`[${ts}][${module}] ${message}`);
  if (err && err.stack) console.error(err.stack);
}

// Export logging functions
module.exports = {
  log,
  warn,
  error
}; 