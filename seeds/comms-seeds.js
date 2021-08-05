const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Woah! Am I first?"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Exclamation points are sick as heck!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "My voice needs to be heard."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Comments make everything better!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I too am also commenting as well."
    },

]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;