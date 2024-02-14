const { User } = require('../models');

const userData = [{
        
        username: 'andres',
        password: '1234'

    },
    {
        
        username: 'Eduardo',
        password: '1234'
    },
    {
        
        username: 'Mejia',
        password: '1234'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;