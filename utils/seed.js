const connection = require('../config/connection');
const { User, Thought } = require('../models');

const users = [
    {
        username: "username1",
        email: "email@domain.dom",
    },
    {
        username: "username2",
        email: "test@domain.dom",
    },
    {
        username: "username3",
        email: "email@email.com",
    },
    {
        username: "username4",
        email: "test@google.com",
    },
]

const thoughts = [
    {
        thoughtText: 'This is a bunch of thought text for the social media application thoughts',
        username: 'username3'
    },
    {
        thoughtText: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sollicitudin dolor egestas mauris faucibus vulputate. Pellentesque vestibulum tortor elit.',
        username: 'username1'
    },
    {
        thoughtText: 'Phasellus ullamcorper fringilla nunc quis posuere. Maecenas ac accumsan eros. Nunc dolor dui, porttitor eget venenatis in, luctus non mauris.',
        username: 'username2'
    }
]

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('DB Connected, Starting Seed')

    await User.deleteMany({});

    await Thought.deleteMany({});

    await User.insertMany(users);

    await Thought.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
})