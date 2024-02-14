const { Post } = require('../models');

const postData = [{
        title: 'Hello World',
        content: 'Hi, Hello World!!!!',
        user_id: 1

    },
    {
        title: 'Busy',
        content: 'Im busy now. I will call you later!',
        user_id: 2
    },
    {
        title: 'Today',
        content: 'Today will be a good day here...!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;