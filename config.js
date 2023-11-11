const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mongodbural:mongodbural@cluster0.j0d7xng.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94766943622'
global.devs = '94766943622';
global.website = 'https://github.com/vajirabot1/KING-VAJIRA-MD' //wa.me/+25000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/fb7993e24f7ecdaecbed5.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'ʙʟ ɪᴢᴜᴍɪ ɢᴏᴅ ᴡᴩ ʙᴏᴛ' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'nt.4rjuh' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'VAJIRA;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtNYW5NYTlnUC9SNXZTMmEyVS9CRG01YXU0K2M3UWhhbXlyM05GR2RHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXQ2N2VDZUwxRVJ3Y3F1SDZyMXFKc3JrZVp5eUNCZmVWRHJjWXN4cmF6az0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRThzNHlNVTkzK25LRVp3Wis4K1dsRE5US01OdUZBZnZiWUNYYysyRTFBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEaTB6VFQrYWEyWnEvOThMemNhZ0x2M2hvcURtN01OQ29vaUJjNmdleWtVPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFSVlVaFJTbjZLbnI4YnhvRFh3azAvd2hBOGo1SlVrQVlDM1N0dUs4Rms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJS21meUJZMVgxSjFrSjZxb2JLWGtpUzZzSmhJS05hYXdpTmxGSXlESDQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjbklzblI4QnF1VFhDVm03bWVuZW9xNVJQd2RNWUlDbjZ0OUxOc0R5ZEVqL0I3dzJleVNEc08vSTJ0RFg2aUtDWG83S1JYbEY4TlpoajVsT2thT3JDdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE0NiwiYWR2U2VjcmV0S2V5IjoiRW9xb0lGQ1Fxbk1CWFk5K2hWL1RwMWFVWlFtdWt5L3hLZkwwUE0yc3A3TT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMzlnWGtOMWdRTXU4eG9SOFlZLUUwZyIsInBob25lSWQiOiJhMGEyMWQ2Zi03ZjQ2LTQ0OGYtOTA5Mi1iYzU2MTljY2VlMWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0xnVDQ1cTdlY21VTGtqbFJ6S0Q2L2ZmR1VnPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2aS94N1NtSEExUS9BZmdjMEVtZTAyaTYyd1k9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNNnBvYWtIRU5mdXZLb0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InQxOWV0UFUwLzNTOTVXRzlxMlcwR3dQS2Z6bE9PNTk5dnVPQnVzcjJ0RTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJjMnFSYUZzcDFJUnFVSVZKZFBkK2pvOXRUbFdUYktNaU5aenY1b1I3OXpiUkFSYlZYallkcWFRamtDR3hjbXN4VlRQZW5maTRGS1BPbFhRR2s4Z0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtMm9pWUNSWXJkQmJub3ByZDk1YzRSY2VUTTk5ZmxrYVU4dUpVSlcvbXFzTjJPdXlIZnhnbi9zSWRCczR1YjQ2UFFDSStvV3R4eUVxWk0yc3hIZ3RBQT09In0sIm1lIjp7ImlkIjoiOTE4MTM3ODU3NTg1OjM1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsmqIOG0oiDhtJwg4bSNIMmqICAgybQg4bSPIOG0oSAgISEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4MTM3ODU3NTg1OjM1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJkZlhyVDFOUDkwdmVWaHZhdGx0QnNEeW44NVRqdWZmYjdqZ2JySzlyUlAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTk2OTAzMzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEo2In0=' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'vajira' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'VAJIRA-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
