const awsRoutes = require('./awsRoutes');
module.exports = function(app) {
  awsRoutes(app);
	
  // Other route groups could go here, in the future
};