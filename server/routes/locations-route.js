// Import express
const express = require('express')

// Import locations-controller
const locationsRoutes = require('../controllers/locations-controller.js')

// Create router
const router = express.Router()

// Add route for GET request to retrieve all locations
// In server.js, locations route is specified as '/'
// this means that '/' translates to '/locations/'
router.get('/all', locationsRoutes.allLocations)

// Add route for GET request to retrieve filtered locations
// In server.js, locations route is specified as '/locations'
// this means that '/:q' translates to '/locations/:q'
router.get('/:q', locationsRoutes.locations)




// Export router
module.exports = router
