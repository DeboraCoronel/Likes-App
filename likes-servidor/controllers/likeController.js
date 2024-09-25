const Like = require('../models/Like');

// Get all likes
exports.getLikes = async (req, res) => {
    try {
        const likes = await Like.find();
        res.json(likes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a like by ID
exports.getLikeById = async (req, res) => {
    Like.findById(req.params.id)
    .then((like) => {
        if (!like) {
            return res.status(404).json({ message: 'Like no encontrada' });
        }
        res.status(200).json(like);
    })
    .catch((error) => {
        console.log(error.message);
        res.status(400).json(error.message);
    });
};

// Create a new like
module.exports.createLike = (req, res) => {
    Like.create(req.body)
    .then((newLike) => {
        return res.status(201).json(newLike);
    })
    .catch((error) => {
        console.log(error.message);
        res.statusMessage = error.message;
        return res.status(400).json(error.message);
        });
    };

// Update a like
module.exports.updateLike = async (req, res) => {
    try {
        const likeUpdate = await Like.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!likeUpdate) {
            return res.status(404).json({ message: 'Like no encontrada' });
        }
        return res.status(200).json(likeUpdate);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ message: error.message });
    }
};


// Delete a like
exports.deleteLike = async (req, res) => {
    try {
        const like = await Like.findByIdAndDelete(req.params.id);
        if (like) {
            res.json({ message: 'Like deleted' });
        } else {
            res.status(404).json({ message: 'Like not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
