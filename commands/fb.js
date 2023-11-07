const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const fbInfoVideo = require('fb-info-video'); 

cmd({  
              pattern: "facebook",  
              alias :  ['fb','fbdl'],  
              desc: "Downloads fb videos.",  
              category: "downloader",  
	      react: "✅",
              filename: __filename,  
              use: '<add fb url.>'  
          },  
  
          async(Void, citel, text) => {  
  Void.sendMessage(citel.chat, {   
                react: {   
                    text: "🎬",   
                    key: citel.key   
                }   
            })   
  if(!text) return citel.reply(`*_Please Give me Facebook Video Url_*`);  
  fbInfoVideo.getInfo(text)  
    .then(info =>{  
  let vurl=info.video.url_video;  
  
        let data  ="*Video Name     :* "+  info.video.title;  
            data +="\n*Video Views    :* "+  info.video.view;  
            data +="\n*Video Comments :* "+  info.video.comment;  
            data +="\n*Video Likes    :* "+info.video.reaction.Like ;  
  
                          let buttonMessage = {  
                          video: {url:vurl},  
                          mimetype: 'video/mp4',  
                          fileName: info.video.title+`.mp4`,  
                          caption :"     *FACEBOOK DOWNLOADER*  \n"+data  
  
                      }  
                   Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });  
  
  
  
  })  
    .catch(err =>{  
              citel.reply("Error, Video Not Found\n *Please Give Me A Valid Url*");  
              console.error(err);  
            })  
   })  
//---------------------------------------------------------------------------
