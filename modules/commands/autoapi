module.exports.config = {
	name: "a9",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tpk",
	description: "Lay link pastebin ve cho admin",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "repl1.mp4")) request("https://i.imgur.com/UgjOYIv.mp4").pipe(fs.createWriteStream(dirMaterial + "repl1.mp4"));
  }
module.exports.run = async function({ api , event , args }) {
    console.log('Hello, world !');
};
module.exports.handleEvent = async function({ api , event , Users }) {
    const { body , senderID , threadID } = event;
  const moment = require("moment-timezone");
  const tpkk = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  const fs = require("fs");
    try {
        if (body === undefined || !body.includes('repl.co/') || senderID == api.getCurrentUserID() || senderID == '') return;
        const userName = await Users.getNameUser(senderID);
        const { threadName } = await api.getThreadInfo(threadID);
        api.sendMessage(`📥=== [𝗔𝗽𝗶 𝗡𝗲̀ 𝗖𝗵𝘂̉ 𝗡𝗵𝗮̂𝗻 ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}
👥 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${userName}
🌍 𝗡𝗵𝗼́𝗺: ${threadName}
🌸 𝗩𝘂̛̀𝗮 𝗴𝘂̛̉𝗶 𝗺𝗼̣̂𝘁 𝗻𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗼́ 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸 𝗔𝗽𝗶
💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴 𝗰𝗵𝘂̛́𝗮 𝗹𝗶𝗻𝗸: ${body}`, '100006155348307');
api.sendMessage({body: `📥=== [ 𝗔𝗽𝗶𝗶 𝗸𝗶̀𝗮 𝗮𝗲:)) ] ===📥
━━━━━━━━━━━━━━━━━━
⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${tpkk}
⚙️ 𝗔𝗱𝘂 𝗔𝗽𝗶 𝗚𝘂̛̉𝗶 𝗩𝗲̂̀ 𝗔𝗱𝗺𝗶𝗻 𝗛𝘂́𝗽 𝗟𝗲̣
🐿️ 𝗘𝗺 𝗫𝗶𝗻 𝗡𝗵𝗼́`, attachment: fs.createReadStream(__dirname + `/noprefix/repl1.mp4`
)}, event.threadID, event.messageID);
    } catch (e) {
        api.sendMessage(`${e}`, '100006155348307');
    }
};
