const moment = require('moment-timezone') 
 const {fetchJson,cmd, tlang } = require('../lib') 
 let gis = require("async-g-i-s"); 
 const Esana = require('@sl-code-lords/esana-news') 
 var api = new Esana() 
  
     //--------------------------------------------------------------------------- 
  cmd({   
       pattern: "nasa",   
       alias: ["news/nasa"],   
       react: "🀄",   
       desc: "",   
       category: "news",   
       use: '.hirunews',   
       filename: __filename   
   },   
   async(Void, citel) => {   
   try{   
   const nasa = await fetchJson(`https://darkapi--technicalhacke4.repl.co/nasanews`);   
  
             const images = `${nasa.result.image}`   
              const title = `${nasa.result.title}`  
              const news = `${nasa.result.desc}`   
  
   await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n*${ title }*\n\n _${news}._\n\n*`}, { quoted: citel })   
   }   
   catch(e){   
   console.log(e)   
   }}) 
 //--------------------------------------- 
 cmd({  
      pattern: "technews",  
      react: "🧾",  
      desc: "",  
      category: "news",  
      use: '.technews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const technews = await fetchJson(`http://darkapi.technicalhacke4.repl.co/sinhala-technews`);  
  
  
  
  
             const images = `${technews.result.img}`  
             const title = `${technews.result.title}`  
             const news = `${technews.result.decs}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n*${ title }*\n\n _${news}._\n\n`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
 //------------------------------------- 
     cmd({ 
         pattern: "news/esana", 
         category: "news", 
         desc: "Searches news", 
         use: '<text>', 
         filename: __filename, 
     }, 
     async(Void, citel) => { 
        let res = await api.latest_id(); 
        const nid = res.results.news_id; 
        let news = await api.news(nid); 
        const tt = news.results.TITLE; 
        const dss = news.results.DESCRIPTION; 
        const ttime = news.results.PUBLISHED; 
        const img = news.results.COVER; 
        const cap = `✦ 𝚃𝚒𝚝𝚕𝚎 :- ${tt} \n \n ◇ ᴅᴇꜱᴄʀᴇᴘᴛɪᴏɴ :- ${dss} \n \n ◈ ᴛɪᴍᴇ :- ${ttime}`; 
                 await Void.sendMessage(citel.chat,{image:{url: img}, caption: cap})  
 }) 
 //-------------------------------------------------------------------------- 
 cmd({  
      pattern: "hirunews",  
      alias: ["hiru","news/hiru"],  
      react: "📜",  
      desc: "",  
      category: "news",  
      use: '.hirunews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const hirunews = await fetchJson(`https://hirunews.aquaapk-dl.repl.co/api/latest`);  
            const images = `${hirunews.image}`  
             const title = `${hirunews.title}`  
             const date = `${hirunews.time}`  
             const news = `${hirunews.desc}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n${ title }\n\n ${ news }\n\n${date}`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
 //------------------------------------------------------------------------------------------------------------------------------------ 
  
                  }, { 
                     quoted: citel, 
                 } 
             ); 
  
         } 
     ) 
     //--------------------------------------------------------------------------- 
 cmd({ 
             pattern: "horo", 
             category: "search", 
             desc: "Gives horoscope info of user.", 
             use: '<sign>\n:Example: horo libra', 
             filename: __filename, 
         }, 
         async(Void, citel, text) => { 
             if (!text) return citel.reply("Provide me a sign!") 
             try { 
                 const URL = `https://aztro.sameerkumar.website/?sign=${text}&day=today`; 
                 fetch(URL, { 
                         method: 'POST' 
                     }) 
                     .then(response => response.json()) 
                     .then(json => { 
                         const date = json.current_date; 
                         console.log(date); 
                         let textw = ""; 
                         textw += `*🌟 Horoscope of  ${text}*\n\n`; 
                         textw += `*Current Date:* ${json.current_date}.\n`; 
                         textw += `*Sign:* ${text}.\n`; 
                         textw += `*Lucky Time:* ${json.lucky_time}.\n`; 
                         textw += `*Compatibility:* ${json.compatibility}.\n`; 
                         textw += `*Lucky Number:* ${json.lucky_number}.\n`; 
                         textw += `*Lucky Color:* ${json.color}.\n`; 
                         textw += `*Today Mood:* ${json.mood}.\n`; 
                         textw += `*Overall:* ${json.description}.\n`; 
                         citel.reply(textw) 
                     }); 
  
             } catch (e) { 
                 console.log(e) 
             } 
         } 
     ) 
     //--------------------------------------------------------------------------- 
     cmd({ 
         pattern: "google", 
         alias :['search','gsearch'], 
         category: "search", 
         desc: "Sends info of given query from Google Search.", 
         use: '<text>', 
         filename: __filename, 
     }, 
     async(Void, citel, text) => { 
         if (!text) return citel.reply(`give me a query\n*Example : .google Who is Suhail Tech.*`); 
         let google = require('google-it'); 
         google({ 'query': text}).then(res => { 
             let msg= `Google Search From : ${text} \n\n`; 
             for (let g of res) { 
                 msg+= `➣ Title : ${g.title}\n`; 
                 msg+= `➣ Description : ${g.snippet}\n`; 
                 msg+= `➣ Link : ${g.link}\n\n────────────────────────\n\n`; 
             } 
  
             return citel.reply(msg); 
         }) 
     } 
 ) 
     //--------------------------------------------------------------------------- 
 cmd({ 
             pattern: "image", 
             category: "search", 
             desc: "Searches Image on Google", 
             use: '<text>', 
             filename: __filename, 
         }, 
         async(Void, citel, text) => { 
             if (!text) return citel.reply("Provide me a query!") 
             if (!text) return reply("Hey bie please tell me for which pic you're looking"); 
             let name1 = text.split("|")[0] 
             let name2 = text.split("|")[1] || `1` 
             citel.reply(`Sending ${name2} image(s) of ${name1} in chat`) 
             let nn = name2 
             for (let i = 0; i < nn; i++) { 
  
                 let n = await gis(name1) 
                 images = n[Math.floor(Math.random() * n.length)].url; 
                     let buttonMessage = { 
                         image: { 
                             url: images, 
                         }, 
                         caption: `_Blue-Lion Image Search_\n*${name1}*`, 
                         headerType: 4, 
                     }; 
                     Void.sendMessage(citel.chat, buttonMessage, { 
                         quoted: citel, 
                     }); 
             } 
         } 
     ) 
     //--------------------------------------------------------------------------- 
  
  cmd({   
       pattern: "nasa",   
       alias: ["news/nasa"],   
       react: "🀄",   
       desc: "",   
       category: "news",   
       use: '.hirunews',   
       filename: __filename   
   },   
   async(Void, citel) => {   
   try{   
   const nasa = await fetchJson(`https://darkapi--technicalhacke4.repl.co/nasanews`);   
  
             const images = `${nasa.result.image}`   
              const title = `${nasa.result.title}`  
              const news = `${nasa.result.desc}`   
  
   await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n*${ title }*\n\n _${news}._\n\n*`}, { quoted: citel })   
   }   
   catch(e){   
   console.log(e)   
   }}) 
 //--------------------------------------- 
 cmd({  
      pattern: "technews",  
      react: "🧾",  
      desc: "",  
      category: "news",  
      use: '.technews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const technews = await fetchJson(`http://darkapi.technicalhacke4.repl.co/sinhala-technews`);  
  
  
  
  
             const images = `${technews.result.img}`  
             const title = `${technews.result.title}`  
             const news = `${technews.result.decs}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n*${ title }*\n\n _${news}._\n\n`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
 //------------------------------------- 
     cmd({ 
         pattern: "news/esana", 
         category: "news", 
         desc: "Searches news", 
         use: '<text>', 
         filename: __filename, 
     }, 
     async(Void, citel) => { 
        let res = await api.latest_id(); 
        const nid = res.results.news_id; 
        let news = await api.news(nid); 
        const tt = news.results.TITLE; 
        const dss = news.results.DESCRIPTION; 
        const ttime = news.results.PUBLISHED; 
        const img = news.results.COVER; 
        const cap = `✦ 𝚃𝚒𝚝𝚕𝚎 :- ${tt} \n \n ◇ ᴅᴇꜱᴄʀᴇᴘᴛɪᴏɴ :- ${dss} \n \n ◈ ᴛɪᴍᴇ :- ${ttime}`; 
                 await Void.sendMessage(citel.chat,{image:{url: img}, caption: cap})  
 }) 
 //-------------------------------------------------------------------------- 
 cmd({  
      pattern: "hirunews",  
      alias: ["hiru","news/hiru"],  
      react: "📜",  
      desc: "",  
      category: "news",  
      use: '.hirunews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const hirunews = await fetchJson(`https://hirunews.aquaapk-dl.repl.co/api/latest`);  
            const images = `${hirunews.image}`  
             const title = `${hirunews.title}`  
             const date = `${hirunews.time}`  
             const news = `${hirunews.desc}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `\n${ title }\n\n ${ news }\n\n${date}`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
 //------------------------------------------------------------------------------------------------------------------------------------ 
  
