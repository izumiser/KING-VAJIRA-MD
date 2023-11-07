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
