const axios = require("axios");
const { cmd } = require("../command");


cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "menu the bot",
    category: "menu",
    react: "🎀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*╭───❍「𓂀 𝐊คเรєภ𓍯 LOGO 𝖫𝖨𝖲𝖳 」❍*
‎*├⬡ .ɴᴇᴏɴʟɪɢʜᴛ*
‎*├⬡ .ʙʟᴀᴄᴋᴘɪɴᴋ*
‎*├⬡ .ᴅʀᴀɢᴏɴʙᴀʟʟ*
‎*├⬡ .𝟹ᴅᴄᴏᴍɪᴄ*
‎*├⬡ .ᴀᴍᴇʀɪᴄᴀ*
‎*├⬡ .ɴᴀʀᴜᴛᴏ*
‎*├⬡ .sᴀᴅɢɪʀʟ*
‎*├⬡ .ᴄʟᴏᴜᴅs*
‎*├⬡ .ғᴜᴛᴜʀɪsᴛɪᴄ*
‎*├⬡ .𝟹ᴅᴘᴀᴘᴇʀ*
‎*├⬡ .ᴇʀᴀsᴇʀ*
‎*├⬡ .sᴜɴsᴇᴛ*
‎*├⬡ .ʟᴇᴀғ*
‎*├⬡ .ɢᴀʟᴀxʏ*
‎*├⬡ .sᴀɴs*
‎*├⬡ .ʙᴏᴏᴍ*
‎*├⬡ .ʜᴀᴄᴋᴇʀ*
‎*├⬡ .ᴅᴇᴠɪʟᴡɪɴɢs*
‎*├⬡ .ɴɪɢᴇʀɪᴀ*
‎*├⬡ .ʙᴜʟʙ*
‎*├⬡ .ᴀɴɢᴇʟᴡɪɴɢs*
‎*├⬡ .ᴢᴏᴅɪᴀᴄ*
‎*├⬡ .ʟᴜxᴜʀʏ*
‎*├⬡ .ᴘᴀɪɴᴛ*
‎*├⬡ .ғʀᴏᴢᴇɴ*
‎*├⬡ .ᴄᴀsᴛʟᴇ*
‎*├⬡ .ᴛᴀᴛᴏᴏ*
‎*├⬡ .ᴠᴀʟᴏʀᴀɴᴛ*
‎*├⬡ .ʙᴇᴀʀ*
‎*├⬡ .ᴛʏᴘᴏɢʀᴀᴘʜʏ*
‎*├⬡ .ʙɪʀᴛʜᴅᴀʏ*
‎*╰───────────────❍*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/438bxx.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: "",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send an audio file cc
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/r8osk2.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
