const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *GROUP MENU* ]----- 🔰
Oi, ${pushname} 👋
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
┃│➸ *${prefix}welcome* 「1/0」
┃│➸ *${prefix}leveling* 「1/0」
┃│➸ *${prefix}simih* 「1/0」
┃│➸ *${prefix}nsfw* 「1/0」
┃│➸ *${prefix}antilinkgrup* 「1/0」
┃│➸ *${prefix}grup* 「buka/tutup」
┃│➸ *${prefix}add*
┃│➸ *${prefix}kick*
┃│➸ *${prefix}hedsot*
┃│➸ *${prefix}linkgrup*
┃│➸ *${prefix}promote*
┃│➸ *${prefix}demote*
┃│➸ *${prefix}setname*
┃│➸ *${prefix}setdesc*
┃│➸ *${prefix}leave*
┃│➸ *${prefix}tagall*
┃│➸ *${prefix}admin*
┃│➸ *${prefix}level*
┃│➸ *${prefix}fitnah*
┃│➸ *${prefix}hidetag*
┃╰───────────────────
 meu grupo🤠:https://chat.whatsapp.com/CWDE10hFK31JwBN79IWJLB
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *DISTRIBUÍDO POR ${ownerName}* ]----- 🔰`
}
exports.groupm = groupm
