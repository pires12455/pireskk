const dompet = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *DOMPETKU MENU* ]----- π°
Oi, ${pushname} π
Tenha um bom dia. UsuΓ‘rio, $ {sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NOME : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ nome do bot: ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o os recursos deste bot! β¨
Se vocΓͺ nΓ£o entende, digite *${prefix}* PIRES agradece
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}limit*
βββΈ *${prefix}atm*
βββΈ *${prefix}transfer*
βββΈ *${prefix}buylimit*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${ownerName}* ]----- π°`
}
exports.dompet = dompet
