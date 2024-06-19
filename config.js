const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_34_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDY1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTYyLFxuICAgICAgICA5NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxNGUzQWlpTG9WV0FkVEptM3RtRE5SbTBsdUFsY1R1c3RDbWk2VXlHSkhBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2MERqNTVZTlFleXRaa0ZwZGFYb1NRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMxODA4N2VlLTU4ZDgtNDk2NS1hZjhhLTU0MzQ1ZmUxNGY5M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTcsXG4gICAgICAyMTQsXG4gICAgICA2NSxcbiAgICAgIDExMSxcbiAgICAgIDE4NyxcbiAgICAgIDE1MSxcbiAgICAgIDkwLFxuICAgICAgMTc4LFxuICAgICAgMTk1LFxuICAgICAgODksXG4gICAgICAxNTEsXG4gICAgICAxOTMsXG4gICAgICAyMixcbiAgICAgIDk3LFxuICAgICAgMTk0LFxuICAgICAgNjMsXG4gICAgICAzNCxcbiAgICAgIDIzMSxcbiAgICAgIDEwNCxcbiAgICAgIDE2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICA0OSxcbiAgICAgIDUyLFxuICAgICAgMjAwLFxuICAgICAgMTUyLFxuICAgICAgMzcsXG4gICAgICAyMixcbiAgICAgIDIwNCxcbiAgICAgIDIyOSxcbiAgICAgIDIwMyxcbiAgICAgIDM5LFxuICAgICAgMjAwLFxuICAgICAgNzUsXG4gICAgICAyNDksXG4gICAgICAxMSxcbiAgICAgIDI0NyxcbiAgICAgIDczLFxuICAgICAgNjMsXG4gICAgICAxOTYsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUFpUUzVWTjhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNTU2ODE3Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjA1MDgwMTY2NDQxNTA6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMaVRqNlVGRUtHRXk3TUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNTVDN3QWRhb0pMdFVXRkx0alZpRzRkNDMrenZiUjM4VG1VZGNkN2RjaEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZnlHZVlJYWtYdnVsZWZRN3BLMkV5SUJwVkV5c0hQYkJ2R0lsd1ZMZjhxcnhPTWZEYTJsbS9CT09RYjhveGhKeXRocWxFT2o3TnJNN2VkTFFXRStyQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUW90T3Q5amU3czI1SFVSVXZiSTdlMkxicEt2Ui85US9vQVJDemNnM05ENHl6ZDhkS3RJZUZQMFJMNDhubnIzSTJhSzJ5QzlxZTUvM0xCS0xscUVWQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE1NTY4MTc2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg3OTY4MzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLZVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtlVS5qc29uIjogIntcImtleURhdGFcIjpcInJTVUdhZUdKNlJsRGVoekpxR2IvZEV6MFdUYnk1Z2xIL2s4c3F5V2c3R1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyMDAyMDE1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4Nzk1NDk2MDQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
