const { Comment } = require('../models');

const commentData = [{
        comment_text: "Hello!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "OKOK!",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I Hope That!",
        user_id: 3,
        post_id: 3
    } 
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;