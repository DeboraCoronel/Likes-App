const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

router.get('/likes', likeController.getLikes);
router.get('/likes/:id', likeController.getLikeById);
router.post('/likes/new', likeController.createLike);
router.put('/likes/:id/edit', likeController.updateLike);
router.delete('/likes/:id', likeController.deleteLike);

module.exports = router;
