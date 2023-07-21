/*
玖富钱包签到抽奖，希望树每日摇奖、领水、浇水

签到前要先获取token和memberId，打开玖富钱包app即可，如果通知提示成功，则可以正常领水浇水。

每天三次领水时间设定在7:02，14:02，20:02，同时在第一次领水时，执行签到抽奖、希望树摇奖及首登领水。

~~~~~~~~~~~~~~~~
Surge 4.0 :
[Script]
cron "2 7,14,20 * * *" script-path=https://raw.githubusercontent.com/itcbx/CheckInJS/master/JiuFuWallet.js

# 获取玖富钱包用户信息

http-request ^https:\/\/api3\.9f\.cn\/phoenix\/app\/v4\/safe\/optimize max-size=0,script-path=https://raw.githubusercontent.com/itcbx/CheckInJS/master/JiuFuWallet.js
~~~~~~~~~~~~~~~~
QX 1.0.5 :
[task_local]
2 7,14,20 * * * JiuFuWallet.js

[rewrite_local]
# 获取玖富钱包用户信息. QX 1.0.5(188+):
^https:\/\/api3\.9f\.cn\/phoenix\/app\/v4\/safe\/optimize url script-request-header JiuFuWallet.js
~~~~~~~~~~~~~~~~
QX or Surge MITM = api3.9f.cn
~~~~~~~~~~~~~~~~
*/

var log = true //是否开启日志, false则关闭
var $tools = tools()
var TOKEN = $tools.read("Token")
var MEMBERID = $tools.read("MemberId")
var NOTIFY = ''

if ($tools.isRequest) {
  GetInfo()
  $tools.end()
} else {
    RunFunc()
    $tools.end()
}

async function RunFunc() {
    var currentHour = new Date().getHours()    
    if(currentHour == 7) {
        await CheckIn()
        await ShakePrize()
        await FirstAddWater()
        await GiveWater()
    }
    await ThreeAddWater()
    await GiveWater()
    if(NOTIFY !== '') {
        $tools.notify('', '', NOTIFY)
    }
}

// 签到抽奖
function CheckIn() {
    return new Promise(resolve => {
        const url = {
            url: 'https://actapi.9f.cn/transformers/activity/taskcenter/lottery',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'data=%7B%22token%22%3A%22'+TOKEN+'%22%2C%22memberId%22%3A%22'+MEMBERID+'%22%2C%22model%22%3A%7B%22prizeCode%22%3A0%2C%22channel%22%3A%22QB%22%7D%7D'
        }
        $tools.post(url, function(error, response, data) {
            try {
                if(error) {
                    NOTIFY += '【玖富钱包-签到抽奖】接口请求失败！\n'
                } else {
                    if(data.match(/登录信息已过期/)) {
                        NOTIFY += '【玖富钱包】请登陆玖富钱包app获取用户信息！\n'
                    } else {
                        var jsondata = JSON.parse(data)
                        if(jsondata.data.prizeListDTO == null) {
                            NOTIFY += '【玖富钱包-签到抽奖】今日已抽奖！\n'
                        } else if(jsondata.data.prizeListDTO.takeFlag == true) {
                            var prizeValue = jsondata.data.prizeListDTO.prizeValue
                            if(prizeValue.match(/%/)) {
                                NOTIFY += '【玖富钱包-签到抽奖】获得银行'+prizeValue+'加息券！\n'
                            } else if(prizeValue.match(/元/)) {
                                NOTIFY += '【玖富钱包-签到抽奖】获得'+prizeValue+'本金券！\n'
                            } else {
                                NOTIFY += '【玖富钱包-签到抽奖】获得'+prizeValue+'积分！\n'
                            }
                        } else {
                            NOTIFY += '【玖富钱包-签到抽奖】失败，请查看日志！\n'
                            if(log) console.log('玖富钱包-签到抽奖失败' + data)
                        }
                    }
                }
                resolve('done')
            } catch (eor) {
                $tools.notify('玖富钱包-签到抽奖' + eor.name + '‼️', JSON.stringify(eor), eor.message)
                resolve('done')
            }
        })
    })
}

// 摇奖
function ShakePrize() {
    return new Promise(resolve => {
        const url = {
            url: 'https://actapi.9f.cn/h5/plantTree/shakePrize',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'memberId=' + MEMBERID + '&token=' + TOKEN
        }
        $tools.post(url, function(error, response, data) {
            try {
                if(error) {
                    NOTIFY += '【玖富钱包-希望树摇奖】接口请求失败！\n'
                } else {
                    if(data.match(/成功/)) {
                        var jsondata = JSON.parse(data)
                        NOTIFY += '【玖富钱包-希望树摇奖】成功获得'+jsondata.data.prize.prizeName+'！\n'
                    } else if(data.match(/暂无摇奖机会哦/)) {
                        NOTIFY += '【玖富钱包-希望树摇奖】暂无摇奖机会！\n'
                    } else if(data.match(/登录信息已过期/)) {
                        NOTIFY += '【玖富钱包】请登陆玖富钱包app获取用户信息！\n'
                    } else {
                        NOTIFY += '【玖富钱包-希望树摇奖】失败，请查看日志！\n'
                        if(log) console.log('玖富钱包-希望树摇奖失败' + data)
                    }
                }
                resolve('done')
            } catch (eor) {
                $tools.notify('玖富钱包-希望树摇奖' + eor.name + '‼️', JSON.stringify(eor), eor.message)
                resolve('done')
            }
        })
    })
}

// 首登领水
function FirstAddWater() {
    return new Promise(resolve => {
        const url = {
            url: 'https://actapi.9f.cn/h5/plantTree/addWater',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'id=1&steps=0&memberId=' + MEMBERID + '&token=' + TOKEN
        }
        $tools.post(url, function(error, response, data) {
            try {
                if(error) {
                    NOTIFY += '【玖富钱包-希望树首登领水】接口请求失败！\n'
                } else {
                    if(data.match(/成功/)) {
                        NOTIFY += '【玖富钱包-希望树首登领水】成功！\n'
                    } else if(data.match(/不能重复领取/)) {
                        NOTIFY += '【玖富钱包-希望树首登领水】已领过！\n'
                    } else if(data.match(/登录信息已过期/)) {
                        NOTIFY += '【玖富钱包】请登陆玖富钱包app获取用户信息！\n'
                    } else {
                        NOTIFY += '【玖富钱包-希望树首登领水】失败，请查看日志！\n'
                        if(log) console.log('玖富钱包-希望树首登领水失败' + data)
                    }
                }
                resolve('done')
            } catch (eor) {
                $tools.notify("【玖富钱包-希望树首登领水】" + eor.name + "‼️", JSON.stringify(eor), eor.message)
                resolve('done')
            }
        })
    })
}

// 每日三次领水
function ThreeAddWater() {
    return new Promise(resolve => {
        const url = {
            url: 'https://actapi.9f.cn/h5/plantTree/addWater',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'id=2&steps=0&memberId=' + MEMBERID + '&token=' + TOKEN
        }
        $tools.post(url, function(error, response, data) {
            try {
                if(error) {
                    NOTIFY += '【玖富钱包-希望树每日三次领水】接口请求失败！\n'
                } else {
                    if(data.match(/成功/)) {
                        NOTIFY += '【玖富钱包-希望树每日三次领水】成功！\n'
                    } else if(data.match(/不能重复领取/)) {
                        NOTIFY += '【玖富钱包-希望树每日三次领水】已领过！\n'
                    } else if(data.match(/不在领取时间/)) {
                        NOTIFY += '【玖富钱包-希望树每日三次领水】时间为：7-8点，14-15点，20-21点！\n'
                    } else if(data.match(/登录信息已过期/)) {
                        NOTIFY += '【玖富钱包】请登陆玖富钱包app获取用户信息！\n'
                    } else {
                        NOTIFY += '【玖富钱包-希望树每日三次领水】失败，请查看日志！\n'
                        if(log) console.log('玖富钱包-希望树每日三次领水失败' + data)
                    }
                }
                resolve('done')
            } catch (eor) {
                $tools.notify('玖富钱包-希望树每日三次领水' + eor.name + '‼️', JSON.stringify(eor), eor.message)
                resolve('done')
            }
        })
    })
}

// 浇水
function GiveWater() {
    return new Promise(resolve => {
        const url = {
            url: 'https://actapi.9f.cn/h5/plantTree/giveWater',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'memberId=' + MEMBERID + '&token=' + TOKEN
        }
        $tools.post(url, function(error, response, data) {
            try {
                if(error) {
                    NOTIFY += '【玖富钱包-希望树浇水】接口请求失败！\n'
                } else {
                    if(data.match(/成功/)) {
                        NOTIFY += '【玖富钱包-希望树浇水】成功！\n'
                    } else if(data.match(/暂无浇水机会哦/)) {
                        NOTIFY += '【玖富钱包-希望树浇水】暂无浇水机会！\n'
                    } else if(data.match(/登录信息已过期/)) {
                        NOTIFY += '【玖富钱包】请登陆玖富钱包app获取用户信息！\n'
                    } else {
                        NOTIFY += '【玖富钱包-希望树浇水】失败，请查看日志！\n'
                        if(log) console.log('玖富钱包-希望树浇水失败' + data)
                    }
                }
                resolve('done')
            } catch (eor) {
                $tools.notify('玖富钱包-希望树浇水' + eor.name + '‼️', JSON.stringify(eor), eor.message)
                resolve('done')
            }
        })
    })
}

function GetInfo() {
    if($request.body) {
        var data = $request.body.substring($request.body.indexOf("=")+1, $request.body.length)
        if(data.length > 0 && data.match(/token/) && data.match(/memberId/)) {
            data = JSON.parse(decodeURIComponent(data))
            if ($tools.read("Token") != (undefined || null) && $tools.read("MemberId") != (undefined || null)) {
                $tools.write(data.token, "Token")
                $tools.write(data.memberId, "MemberId")
                $tools.notify('', '', '更新玖富钱包用户信息成功')
            } else {
                $tools.write(data.token, "Token")
                $tools.write(data.memberId, "MemberId")
                $tools.notify('', '', '首次写入玖富钱包用户信息成功')
            }
        } else {
            $tools.notify("获取玖富钱包用户信息失败‼️", "", "配置错误, 无法读取请求")
        }
    } else {
        $tools.notify("获取玖富钱包用户信息失败‼️", "", "配置错误, 无法读取请求")
    }
}

function tools() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
    }
    const get = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, callback)
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
            options["method"] = "POST"
            $task.fetch(options).then(response => {
                response["status"] = response.statusCode
                callback(null, response, response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.post(options, callback)
    }
    const end = () => {
        if (isQuanX) isRequest ? $done({}) : ""
        if (isSurge) isRequest ? $done({}) : $done()
    }
    return { isRequest, isQuanX, isSurge, notify, write, read, get, post, end }
}
