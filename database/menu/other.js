const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *OTHER MENU* ]----- π°
oi, ${pushname} π
Tenha um bom dia para os usuΓ‘rios, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NAMA : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o os recursos deste bot! β¨
Se vocΓͺ nΓ£o entende, digite *${prefix}bingungcok*
PIRES
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}brainly*
βββΈ *${prefix}wiki*
βββΈ *${prefix}pinterest*
βββΈ *${prefix}resepmakanan*
βββΈ *${prefix}beritahoax*
βββΈ *${prefix}timer*
βββΈ *${prefix}nulis1*
βββΈ *${prefix}nulis2*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${ownerName}* ]----- π°`
}
exports.other = other
