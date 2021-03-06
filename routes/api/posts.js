const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

router.get('/', (req, res) => {
  Post.find()
    .then(posts => {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      });
      res.json(posts);
      // console.log(cafes);
    })
    .catch(err => next(err));
});

router.post('/', (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content
  });

  newPost.save()
    .then(post => res.json(post))
    .catch(err => console.log(err));
})

module.exports = router;
