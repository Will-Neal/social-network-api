const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('DB Connected, Starting Seed')

    await User.deleteMany({});

    await Thought.deleteMany({});

    await User.insertMany(users);

    await Thought.insertMany(thoughts);

    console.table(students);
    console.table(assignments);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})