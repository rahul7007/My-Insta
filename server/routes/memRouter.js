const express = require('express')

const ctrl = require('../controllers/memController')

const router = express.Router()

router.get('/getPosts', ctrl.getPosts)
router.post('/createPosts', ctrl.createPosts)
router.patch('/updatePosts/:id', ctrl.updatePosts)
router.delete('/deletePosts/:id', ctrl.deletePosts)
router.patch('/likePosts/:id', ctrl.likePosts)

module.exports = router