const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *GROUP MENU* ]----- π°
Oi, ${pushname} π
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
βββΈ *${prefix}welcome* γ1/0γ
βββΈ *${prefix}leveling* γ1/0γ
βββΈ *${prefix}simih* γ1/0γ
βββΈ *${prefix}nsfw* γ1/0γ
βββΈ *${prefix}antilinkgrup* γ1/0γ
βββΈ *${prefix}grup* γbuka/tutupγ
βββΈ *${prefix}add*
βββΈ *${prefix}kick*
βββΈ *${prefix}hedsot*
βββΈ *${prefix}linkgrup*
βββΈ *${prefix}promote*
βββΈ *${prefix}demote*
βββΈ *${prefix}setname*
βββΈ *${prefix}setdesc*
βββΈ *${prefix}leave*
βββΈ *${prefix}tagall*
βββΈ *${prefix}admin*
βββΈ *${prefix}level*
βββΈ *${prefix}fitnah*
βββΈ *${prefix}hidetag*
ββ°βββββββββββββββββββ
 meu grupoπ€ :https://chat.whatsapp.com/CWDE10hFK31JwBN79IWJLB
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${ownerName}* ]----- π°`
}
exports.groupm = groupm
