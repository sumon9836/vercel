

const axios = require('axios');
const { cmd, commands } = require('../command');

cmd({
    pattern: "dog",
    desc: "Fetch a random dog image.",
    category: "fun",
    react: "🐶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        await conn.sendMessage(from, { image: { url: data.message }, caption: '𝐊𝐚𝐢𝐬𝐞𝐧-𝐦𝐝 DOWNLOAD DOG 🐕 PICS\n\n\n> *🐕BY 𝐊𝐚𝐢𝐬𝐞𝐧-𝐦𝐝🐕*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error Fetching Dog Image🤕: ${e.message}`);
    }
});
cmd({
    pattern: "cat",
    desc: "Fetch a random cat image.",
    category: "fun",
    react: "🐱",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // API URL to fetch a random cat image c
        const apiUrl = `https://api.thecatapi.com/v1/images/search`;
        const response = await axios.get(apiUrl);
        const data = response.data;

        // Send the cat image with a caption
        await conn.sendMessage(from, { image: { url: data[0].url }, caption: '𝐊𝐚𝐢𝐬𝐞𝐧-𝐦𝐝 DOWNLOAD CAT 🐈 PICS\n\n> *🐈BY 𝐊𝐚𝐢𝐬𝐞𝐧-𝐦𝐝🐈*' }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error Fetching Cat Image 🤕: ${e.message}`);
    }
});
