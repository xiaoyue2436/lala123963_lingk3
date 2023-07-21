/*
0-30/3 9 * * * 卡夫享兑换
微信小程序入口 https://fscrm.kraftheinz.net.cn/?from=p0KkGEBMKTFVD/N6plb4og==
cron: 0-30/3 9 * * *
*/
const $ = new Env("卡夫享兑换");
const notify = $.isNode() ? require('./sendNotify') : '';
let cookbook_id = '',cookbook_idArr=[], invite_id='',message='',member_id='',member_idArr=[]
let kfxtokensArr=[],invite_idarr=[] 
if (process.env.kfxtoken) {
  if (process.env.kfxtoken.indexOf('@') > -1) {
    kfxtokensArr = process.env.kfxtoken.split('@');
  } else if (process.env.kfxtoken.indexOf('\n') > -1) {
    kfxtokensArr = process.env.kfxtoken.split('\n');
  } else {
    kfxtokensArr = [process.env.kfxtoken];
  }
}
let time = new Date()

//member_idArr

!(async () => {
    if (!kfxtokensArr[0]) {
        $.msg($.name, '请先添加cookie');
        return;
    }

    console.log("共" + kfxtokensArr.length + "个账号")
    ismessage = false
    for (let i = 0; i < kfxtokensArr.length; i++) {
        if (kfxtokensArr[i]) {
            cookie = kfxtokensArr[i]
            $.index = i + 1;
            $.nickName = '';
            islogin = true
            isnewmessage = true
            newmessageurl=''
            isrun = true
            console.log(`\n******开始【账号${$.index}】*********\n`);
            await getUserinfo()

                     
        }
    }

    if (message !== '' && (ismessage || time.getHours()  == 21)) {
        
        if ($.isNode()) {
            await notify.sendNotify($.name, message, '', `\n`);
        } else {
            $.msg($.name, '', message);
        }
    }
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })




function random(b, a) {
    randomtime = Math.round(Math.random() * (a - b) + b)
    return randomtime
}



async function getUserinfo() {
    return new Promise(resolve => {
        $.get(geturl("getUserInfo"), async  (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    
                    data = JSON.parse(data)
                    if (data.error_code === 0) {
                        //console.log(data)
                        $.nickName = data.data.nickname
                        console.log(`用户${$.index}:${data.data.nickname}已签到次数${data.data.signTimes}`)                 
                        console.log(`当前积分：${data.data.memberInfo.score}`)
                        if (data.data.memberInfo.score>20) await exchange()
                        member_idArr.push(data.data.member_id)
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}




async function exchange() {
    return new Promise(resolve => {
        $.post(posturl('exchangeIntegralNew',"value=京东E卡2元&phone=&type=视频卡"),async (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    data=JSON.parse(data)
                    if (data) {
                        console.log(JSON.stringify(data)) 
                        if(data.error_code === 0) await notify.sendNotify($.name,`用户${$.index}:${$.nickname} ${data.msg}\n卡号:${data.data.cards.card.cardno}\n卡密:${data.data.cards.card.cardpsw}`)
                                               
                      
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}

async function getScoreOrder() {
    return new Promise(resolve => {
        $.post(posturl('getScoreOrder',body = ''),async (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    data=JSON.parse(data)
                    //console.log(JSON.stringify(data.data.data))
                    if (data) {
                        var t = data.data.data.length
                        for (var i = 0; i < t; i++) {
                            //console.log(JSON.stringify(data.data.data[i]))
                            
                            console.log(`兑换${i}：\n商品名称${data.data.data[i].usefulDate}创建时间${data.data.data[i].createdAt}`)
                            datas = data.data.data[i].awardResult
                            datas = JSON.parse(datas)
                            console.log(`卡号${datas.cards.card.cardno}\n卡密${datas.cards.card.cardpsw}`)
                        }
                        //console.log(JSON.stringify(data.data.data)) 
                        //if(data.error_code === 0) await notify.sendNotify($.name,`用户${$.index}:${$.nickname} ${data.msg}\n卡号:${data.data.cards.card.cardno}\n卡密:${data.data.cards.card.cardpsw}`)
                                               
                      
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}

async function recordScoreShare(invite_id,cookbook_id) {
    const options = {
        url: `https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/recordScoreShare`,
        headers: {
            'Host': 'fscrm.kraftheinz.net.cn',
            'Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2012K11AC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3185 MMWEBSDK/20211001 Mobile Safari/537.36 MMWEBID/4883 MicroMessenger/8.0.16.2040(0x2800105F) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
            'token': cookie,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'X-Requested-With': 'com.tencent.mm',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': `https://fscrm.kraftheinz.net.cn/?invite_id=${invite_id}&cookbook_id=${cookbook_id}`,
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            
            
        },
        body: `cookbook_id=${cookbook_id}&invite_id=${invite_id}`,
    };    
    return new Promise(resolve => {
        $.post(options, (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    if (data) {
                        //data = JSON.parse(data)
                        console.log(data)                        
                      
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}

function dailySign() {
    return new Promise(resolve => {
        $.post(posturl('dailySign','type=page_view&trace_value=%23%2F&trace_detail=%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83%E9%A6%96%E9%A1%B5'), (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    if (data) {
                    data = JSON.parse(data)
                    console.log(data.msg)                        
                     
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}

function getCookbookIndex() {
    return new Promise(resolve => {
        $.post(posturl('getCookbookIndex','page=1&pagesize=10'), (err, resp, data) => {
            try {
                if (err) {
                    $.logErr(err)
                } else {
                    data = JSON.parse(data)
                    if (data.error_code === 0) {
                    //console.log(data)                        
                        for (var i = 0; i < data.data.chineseCookbook.data.length; i++) {
                            cookbook_idArr.push(data.data.chineseCookbook.data[i].id)
                        }
                        //console.log('分享id为：' + cookbook_idArr)
                    } else {
                        console.log(data.msg)
                    }
                }
            } catch (e) {
                $.logErr(e)
            } finally {
                resolve();
            }
        })
    })
}

function geturl(url) {
    const options = {
        url: `https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/${url}`,
        headers: {
            'Host': 'fscrm.kraftheinz.net.cn',
            'Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2012K11AC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3185 MMWEBSDK/20211001 Mobile Safari/537.36 MMWEBID/4883 MicroMessenger/8.0.16.2040(0x2800105F) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
            'token': cookie,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'X-Requested-With': 'com.tencent.mm',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://fscrm.kraftheinz.net.cn/?from=eEhr9pwgCRlNR8k8PZ8KdA==',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            
        },
    };
    //console.log(cookie)
    return options

}

function posturl(url,body) {
    const options = {
        url: `https://fscrm.kraftheinz.net.cn/crm/public/index.php/api/v1/${url}`,
        headers: {
            'Host': 'fscrm.kraftheinz.net.cn',
            'Connection': 'keep-alive',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 11; M2012K11AC Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3185 MMWEBSDK/20211001 Mobile Safari/537.36 MMWEBID/4883 MicroMessenger/8.0.16.2040(0x2800105F) Process/toolsmp WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
            'token': cookie,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*',
            'X-Requested-With': 'com.tencent.mm',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://fscrm.kraftheinz.net.cn/?from=eEhr9pwgCRlNR8k8PZ8KdA==',
            'Accept-Encoding': 'gzip, deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
            
            
        },
        body: body,
    };
    //console.log(cookie)
    return options

}






// prettier-ignore

function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
