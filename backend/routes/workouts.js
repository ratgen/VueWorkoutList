const express = require('express');
const router = express.Router();
require('dotenv').config();

const authentication = require('../middleware/authentication.js')
const workout_controller = require('../controller/workout.js')
const cors = require('../middleware/cors_allow_all.js')

router.post("/workout", cors.allow_all,  authentication.authenticate_token, workout_controller.workout_post);
router.get("/workout", cors.allow_all, authentication.authenticate_token, workout_controller.workout_get);
router.delete("/workout/:workoutId", cors.allow_all, authentication.authenticate_token, workout_controller.workout_delete);

module.exports = router
