const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

const { fetchJson, cmd, citel, Config, tlang } = require('../lib')

           

//---------------------------------------------------------------------------

cmd({



            pattern: "tvideo",
            alias: ["විඩියො","videot"],
            desc: "song dl",
            react: "🎥 ",
            category: "downloader"
   },
        async(Void, citel, text) => {    
        let yts = require("secktor-pack");
        let search = await yts(text);
        let anu = search.videos[0];
        if (!text) return     
        const tsong = await fetchJson(`https://legend-army-api.onrender.com/api/dowloader/yt?url=${anu.url}&apikey=7cbc80f5`)
        const videolink = tsong.download

            citel.reply (`*Download Your Video*`);
            citel.reply (`*Upload Your Video*`);
            return Void.sendMessage(citel.chat, {

                video: {
                url: videolink ,

                },

                mimetype: "video/mp4",

            }, {
                quoted: citel,

            });
        }
    )
//---------------------------------------------------------------------------
cmd({

            pattern: "fbs",
            desc: "fb down",
            react: "🎶",
            category: "downloader"

        },

        async(Void, citel, text) => {
        if (!text) return
        const fbdls = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${text}&apikey=${Config.botapikey}`)
        const videolink = fbdls.result.audio
        citel.reply (`*Hello ${citel.pushName} I Am Finding Your Facebook Audio*`);
        return Void.sendMessage(citel.chat, {

                audio: {
                url: videolink ,
                },
                mimetype: "audio/mpeg",
                fileName: `prabath-md-fb-song-downloader`,

            }, {
                quoted: citel,
            });
        }
    )
//---------------------------------------------------------------------------
  cmd({

            pattern: "dadu",
            desc: "dadu", 
            category: "downloader"
            
        },

        async(Void, citel, text) => {
        if (!text) return citel.reply(`*Give Me A Text*`);           

            pack = `𝚅𝙰𝙹𝙸𝚁𝙰-𝚖𝚍 (9.𝟷.𝟶) ✔️`
            author = `𝚅𝙰𝙹𝙸𝚁𝙰\n𝙼𝙰𝙳𝙴 𝙱𝚈 𝚅𝙰𝙹𝙸𝚁𝙰 🪀`            

                let image = `https://api.botcahx.biz.id/api/randomgambar/dadu?apikey=${Config.botapikey}`
                citel.react("🎲");
                let sticker = new Sticker(image, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
                    categories: ["🤩", "🎉"], // The sticker category
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();
                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });           

        }
    )

//--------------------------------------------------------------------------
cmd({

            pattern: "video3",
            desc: "video dl",
            react: "📽️",
            category: "downloader"

        },

        async(Void, citel, text) => {    
        let yts = require("secktor-pack");
        let search = await yts(text);
        let anu = search.videos[0];
        if (!text) return     

const tvideo = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4?url={anu.url}`)
const videolink = tvideo.result.url
            citel.reply (`📽️ ━━━━━━━━━━ *𝗩𝗜𝗗𝗘𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 📽️\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n🖇️ *Url:* ${anu.url}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}`);
            return Void.sendMessage(citel.chat, {

                video: {
                    url: videolink ,

                },

                mimetype: "video/mp4",
                caption: tlang().footer,

            }, {
                quoted: citel,
            });
        }
    )    
  //---------------------------------------------------------------------------
    cmd({

            pattern: "testsong",
            desc: "song dl",
            react: "🎶",
            category: "downloader"

        },

        async(Void, citel, text) => {    
        let yts = require("secktor-pack");
        let search = await yts(text);
        let anu = search.videos[0];
        if (!text) return     

            

            const tsong = await fetchJson(`https://legendarmy-api.onrender.com/api/dowloader/yt?url=${anu.url}&apikey=db16e3b7`)
            const videolink = tsong.download
            citel.reply (`🎵 ━━━━━━━━━━ *𝗔𝗨𝗗𝗜𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 🎵\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n🖇️ *Url:* ${anu.url}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}`);
            return Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },

                mimetype: "video/mp4",                

            }, {
                quoted: citel,

            });
        }
    )
  //---------------------------------------------------------------------------
cmd({
    pattern: "wabetainfo",
    alias: ["findapk","playstore"],
    react: "🧾",
    desc: "",
    category: "download",
    use: '.wabetainfo',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const wanews = await fetchJson(`https://legend-army-api.onrender.com/api/search/wabetainfo?&apikey=7cbc80f5`);


          await conn.sendMessage(from , { text:`Hello ${mek.pushname ||  '\n'} I Am Finding Whatsapp New Update Details..` }, { quoted: mek } )    

          const images = `${wanews.result.image}`
           const title = `${wanews.result.title}`
           const date = `${wanews.result.date}`
           const news = `${wanews.result.fulldesc}`

await conn.sendMessage(from,  { image: { url: images }, caption: `\n${ title }\n\n ${ news }\n\n${date}`}, { quoted: mek })
}
catch(e){
console.log(e)
}})
