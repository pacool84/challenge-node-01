require('dotenv').config();

const configuration = {
    webhookURL: process.env.HOOK + process.env.TOKEN,
    githubUrl: process.env.GITHUB_URL
};

module.exports = configuration;