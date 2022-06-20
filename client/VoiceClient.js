const { VoiceClient } = require('djs-voice')
const client = require('../index');
const { mongo } = require('../config.json')

const voiceClient = new VoiceClient({
    allowBots: false,
    client: client,
    debug: true,
    mongooseConnectionString: "mongodb+srv://vrisingvoice:Meupau.123@discord-bot.dgcwo.mongodb.net/Data",
    });

    module.exports = voiceClient;