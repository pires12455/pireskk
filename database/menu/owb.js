const owb = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `π° -----[ *OWNER MENU* ]----- π°
Oi, ${pushname} π
Stenham um bom dia, usuΓ‘rios, ${sender.split("@")[0]}
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ NAMA : ${pushname}
βββΈ LEVEL : ${getLevelingLevel(sender)}
βββΈ USER ${botName} : ${_registered.length}
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
Berikut adalah fitur yang ada pada bot ini!β¨
Jika tidak paham ketik *${prefix}bingungcok*
ββββββββββββββββββββββ
ββ­βββββββββββββββββββ
βββΈ *${prefix}bc*
βββΈ *${prefix}bcgc*
βββΈ *${prefix}clearall*
βββΈ *${prefix}block*
βββΈ *${prefix}unblock*
βββΈ *${prefix}clone*
βββΈ *${prefix}setppbot*
βββΈ *${prefix}setreply*
βββΈ *${prefix}setprefix*
βββΈ *${prefix}addprem*
βββΈ *${prefix}dellprem*
βββΈ *${prefix}ban*
βββΈ *${prefix}unban*
βββΈ *${prefix}resetlimit*
βββΈ *${prefix}event* γ1/0γ
ββ°βββββββββββββββββββ
ββββββββββββββββββββββ
π° -----[ *DISTRIBUΓDO POR ${ownerName}* ]----- π°`
}
exports.owb = owb
