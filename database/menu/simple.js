const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *SIMPLE MENU* ]----- π°
oi, ${pushname} π
Tenha um bom dia para os usuΓ‘rios, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NAMA : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
PIRES
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}sticker*
βββΈ *${prefix}ttp*
βββΈ *${prefix}tts*
βββΈ *${prefix}nulis*
βββΈ *${prefix}toimg*
βββΈ *${prefix}stalkig*
βββΈ *${prefix}quotes*
βββΈ *${prefix}bikinquote*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${ownerName}* ]----- π°`
}
exports.simple = simple
