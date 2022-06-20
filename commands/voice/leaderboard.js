const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'leaderboard',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        const embed = await voiceClient.generateLeaderboard({ 
            message: message,
            top: 10,
        }); 

        message.channel.send({ embeds: [embed] });
    },
};