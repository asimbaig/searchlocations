// Import database
const knex = require('../db')

// Retrieve filtered locations
exports.locations = async (req, res) => {
  // Get filtered locations from database
  knex('locations')
    .where('name','like','%'+req.params.q+'%')
    .select('*')
    .then(locationsData => {
      // Send locations extracted from database in response
      res.json(locationsData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving locations: ${err}` })
    })
}
// Retrieve all locations
exports.allLocations = async (req, res) => {
  // Get all locations from database
  knex('locations')
    .select('*')
    .then(locationsData => {
      // Send locations extracted from database in response
      res.json(locationsData)
    })
    .catch(err => {
      // Send a error message in response
      res.json({ message: `There was an error retrieving locations: ${err}` })
    })
}