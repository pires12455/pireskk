const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *MAKER MENU* ]----- π°
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
βββΈ *${prefix}hartatahta*
βββΈ *${prefix}ninjalogo*
βββΈ *${prefix}halloweentext*
βββΈ *${prefix}pornhub*
βββΈ *${prefix}glitchtext*
βββΈ *${prefix}blackpink*
βββΈ *${prefix}cloudtext*
βββΈ *${prefix}neontext*
βββΈ *${prefix}textlight*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${ownerName}* ]----- π°`
}
exports.maker = maker
