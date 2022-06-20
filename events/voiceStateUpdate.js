const client = require("..");
const voiceClient = require('../Client/VoiceClient');

client.on('voiceStateUpdate', (oldState, newState) => {
    voiceClient.startListener(oldstate, newState);
})