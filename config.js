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

  sessionName:process.env.SESSION_ID || "SUHAIL_19_49_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDQzLFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA1MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICAzMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI4LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAwLFxuICAgICAgICA5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDksXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIisvTXZJRm9ncFlqWUdweG40NW1RNWVYVFZNQk03bysrRUg5YWVzMHNYUTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIklidldMMDl6UU9HSUZzaFpvSHVKOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDRmMWVkNDAtODZiZS00NDU0LWE5ZmYtY2M4Y2QwMGQ4YTNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDU2LFxuICAgICAgMjYsXG4gICAgICAyMjQsXG4gICAgICA1MixcbiAgICAgIDIzOSxcbiAgICAgIDkwLFxuICAgICAgOTIsXG4gICAgICA0NyxcbiAgICAgIDI0NixcbiAgICAgIDEyMCxcbiAgICAgIDkwLFxuICAgICAgMjcsXG4gICAgICAxNDksXG4gICAgICA5LFxuICAgICAgMTM3LFxuICAgICAgOTMsXG4gICAgICA1LFxuICAgICAgMTc4LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDM5LFxuICAgICAgMTM5LFxuICAgICAgMTczLFxuICAgICAgOTQsXG4gICAgICA5NyxcbiAgICAgIDEwNixcbiAgICAgIDE1NixcbiAgICAgIDEwNCxcbiAgICAgIDE2MixcbiAgICAgIDMzLFxuICAgICAgMTQ2LFxuICAgICAgNTYsXG4gICAgICAyNDcsXG4gICAgICA2MCxcbiAgICAgIDEzMixcbiAgICAgIDE3OCxcbiAgICAgIDIyNSxcbiAgICAgIDY0LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhDUERRNFhLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMzOTY2NDAyOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT2xhZGltZWppXCIsXG4gICAgXCJsaWRcIjogXCI0OTA5MTk0NjAwNDU0OToxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTFQ4WndGRUtHVzZMWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkRIT3RuUmZ0N3gwenQ0cWxLbENPbDZIT2JWTEk3ajJONythdGdISDA4RUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK1RVOE1CNklHamU1SEVzbnZVbmEwcmFNNHcwNjhlam92K1ptK0tQWWFiMFZZdFcrU1pYR3pZcFlQVHU3NUZRaVMxMjVYYStGc213OGM2T3J6NmM2QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOEQ5ODlKbG95VCt2QSttZHpVbWM2eElOTGRIQzMzMVJQb2daeHhOQXZyWUkxS0d3akwrU0VTbDRHSEZjMHYyRXphTW5qTlh5QkVsZ2I3djJ6dnNtanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzMzk2NjQwMjoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTU2NTczNVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
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
 
