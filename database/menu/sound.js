const sound = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *SOUND MENU* ]----- π°
OlΓ‘, ${pushname} π
Tenha um bom dia para os usuΓ‘rios, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NAMA : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Aqui estΓ£o os recursos deste bot! β¨
Se vocΓͺ nΓ£o entende, digite *${prefix}*

PIRES
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}iri*
βββΈ *${prefix}pale*
βββΈ *${prefix}sound1*
βββΈ *${prefix}sound2*
βββΈ *${prefix}sound3*
βββΈ *${prefix}sound4*
βββΈ *${prefix}sound5*
βββΈ *${prefix}sound6*
βββΈ *${prefix}sound7*
βββΈ *${prefix}sound8*
βββΈ *${prefix}sound9*
βββΈ *${prefix}sound10*
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${ownerName}* ]----- π°`
}
exports.sound = sound
