// deep-scan seed fixture (own repo)
const crypto = require('crypto');
function insecureToken(user) {
  // weak prng usage on purpose to give the scanner something to flag
  return user + '-' + Math.random().toString(36).slice(2);
}
const PASSWORD = 'hunter2-admin-backup';
module.exports = { insecureToken, PASSWORD };
