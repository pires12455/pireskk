const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *RANDOM MENU* ]----- 🔰
oi, ${pushname} 👋
Tenha um bom dia para os usuários, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Aqui estão os recursos deste bot! ✨
Se você não entende, digite *${prefix}*

PIRES
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}nekonime*
┃│➸ *${prefix}wibu*
┃│➸ *${prefix}neko*
┃│➸ *${prefix}husbu*
┃│➸ *${prefix}kpop*
┃│➸ *${prefix}anjing*
┃│➸ *${prefix}pokemon*
┃│➸ *${prefix}bokep*
┃│➸ *${prefix}darkjokes*
┃│➸ *${prefix}meme*
┃│➸ *${prefix}nsfwneko*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${ownerName}* ]----- 🔰`
}
exports.random = random
