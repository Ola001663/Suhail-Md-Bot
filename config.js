const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349133966402";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_46_09_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgODAsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA1NixcbiAgICAgICAgNixcbiAgICAgICAgMTcyLFxuICAgICAgICA3MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICA0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTI1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5SGZaWGFQZDEvdm1MKy9zd3ZWamphMUtpZW1UeitRUTd6MjlZdHZwTmNJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzM5NjY0MDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRFOTM4RUNCQ0I3RTdFMDlBREI4NzE5RDY4MzcyRjVFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTQ0Njc3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzM5NjY0MDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwRDI1QTY1NDhDMzlCNTBGREZGOTkzMTk3NzFDM0YzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTQ0Njc3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1bzNtblRjWFFJdXZFQ1NyRjRtUVJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiZTI3OTlmLWEwMjUtNDc4MS05YmQzLTc5ZTE5MmZjNmMwM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAxMDcsXG4gICAgICAyMzMsXG4gICAgICA3OCxcbiAgICAgIDY3LFxuICAgICAgMTIwLFxuICAgICAgMjI1LFxuICAgICAgODEsXG4gICAgICAxMTAsXG4gICAgICA1OCxcbiAgICAgIDE1MSxcbiAgICAgIDMyLFxuICAgICAgMTg1LFxuICAgICAgMjUyLFxuICAgICAgMTE2LFxuICAgICAgMTQ5LFxuICAgICAgMjMxLFxuICAgICAgMTU0LFxuICAgICAgMTk2LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAyMTMsXG4gICAgICA1MixcbiAgICAgIDEyOSxcbiAgICAgIDQsXG4gICAgICAxNDYsXG4gICAgICA3OCxcbiAgICAgIDE4MCxcbiAgICAgIDIzLFxuICAgICAgNyxcbiAgICAgIDIwNSxcbiAgICAgIDc0LFxuICAgICAgMTk1LFxuICAgICAgOTQsXG4gICAgICAxMDUsXG4gICAgICA1MSxcbiAgICAgIDIzMixcbiAgICAgIDQ4LFxuICAgICAgMTUyLFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTDlLRDNQRTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzM5NjY0MDI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9sYWRpbWVqaVwiLFxuICAgIFwibGlkXCI6IFwiNDkwOTE5NDYwMDQ1NDk6OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNL1Q4WndGRU8vMDRMWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRIT3RuUmZ0N3gwenQ0cWxLbENPbDZIT2JWTEk3ajJONythdGdISDA4RUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1NhNWE2Y2kxNndGTmEvZXhXWkZ3QjBGcGVpUk9EZnlIVS9EMDRzRkNpVHFVTGI4Y1dDRVlZL3UzSXJmVmNwUm1Rb2x2d0Z4cGZtdHFrUUh4Z21EQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaDY4WC9Wc2JMWFozL1RtS1NSVW0yTmZGMlVKU1lxMG1IVDU5SXpmOFY1VlRnSFlQSmk1V0FpWWM2WjJYSEY5UDlyZzI4R0VsdldUbm1kNGlyVjdOaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMzk2NjQwMjo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NDQ2NzcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVoxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBWjEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmOVBQUXQwK09hdks5Zjgrd1Yyd2hHdGE4bVl6L1YvKzhJRExtVGJmOVhBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MDI3NTk2MzEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTQ0Njc3MzIyNVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
