const express = require('express');
const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
} = require('../controllers/course');

const router = express.Router({ mergeParams: true });

// Requests to /bootcamps/:bootcampID/couses also hit here
// because of the forwarding at ./routes/bootcamp.js
router.route('/').get(getCourses).post(createCourse);

router.route('/:id').get(getCourse).put(updateCourse);

module.exports = router;
