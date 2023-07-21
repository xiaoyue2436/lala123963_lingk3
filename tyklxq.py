"""
cron: 30 8 * * *
new Env('统一快乐星球');

统一快乐星球小程序签到
抓包域名: https://xapi.weimob.com
抓包请求头里面: x-wx-token: xxxxx
环境变量 tyklxqck = xxxxx
多账号新建变量或者用 换行 分开
目前仅支持企业微信机器人推送
"""

import requests
from os import environ


def sign(token):
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/4435 MMWEBSDK/20230202 Mobile Safari/537.36 MMWEBID/9516 MicroMessenger/8.0.33.2320(0x28002151) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "x-wx-token": token,
    }

    sign_data = {
        "appid": "wx532ecb3bdaaf92f9",
        "basicInfo": {
            "vid": 6013753979957,
            "vidType": 2,
            "bosId": 4020112618957,
            "productId": 146,
            "productInstanceId": 3168798957,
            "productVersionId": "14026",
            "merchantId": 2000020692957,
            "tcode": "weimob",
            "cid": 176205957
        },
        "extendInfo": {
            "wxTemplateId": 6839,
            "bosTemplateId": 1000000847,
            "childTemplateIds": [
                {
                    "customId": 90004,
                    "version": "crm@0.0.144"
                },
                {
                    "customId": 90002,
                    "version": "ec@23.3 "
                },
                {
                    "customId": 90006,
                    "version": "hudong@0.0.159"
                },
                {
                    "customId": 90008,
                    "version": "cms@0.0.262"
                }
            ],
            "quickdeliver": {
                "enable": False
            },
            "youshu": {
                "enable": False
            },
            "source": 1,
            "channelsource": 5,
            "refer": "onecrm-signgift",
            "mpScene": 1089
        },
        "queryParameter": {
            "tracePromotionId": "100006218",
            "tracepromotionid": "100006218"
        },
        "pid": "4020112618957",
        "storeId": "0",
        "customInfo": {
            "source": 0,
            "wid": 10388361688
        },
    }
    point_data = {
        "appid": "wx532ecb3bdaaf92f9",
        "basicInfo": {
            "vid": 6013753979957,
            "vidType": 2,
            "bosId": 4020112618957,
            "productId": 1,
            "productInstanceId": 3171023957,
            "productVersionId": "30044",
            "merchantId": 2000020692957,
            "tcode": "weimob",
            "cid": 176205957
        },
        "extendInfo": {
            "wxTemplateId": 6839,
            "bosTemplateId": 1000000847,
            "childTemplateIds": [
                {
                    "customId": 90004,
                    "version": "crm@0.0.144"
                },
                {
                    "customId": 90002,
                    "version": "ec@23.3 "
                },
                {
                    "customId": 90006,
                    "version": "hudong@0.0.159"
                },
                {
                    "customId": 90008,
                    "version": "cms@0.0.262"
                }
            ],
            "quickdeliver": {
                "enable": False
            },
            "youshu": {
                "enable": False
            },
            "source": 1,
            "channelsource": 5,
            "refer": "cms-index",
            "mpScene": 1089
        },
        "queryParameter": {
            "tracePromotionId": "100039174",
            "tracepromotionid": "100039174"
        },
        "pid": "4020112618957",
        "storeId": "0",
        "targetBasicInfo": {
            "productInstanceId": 3168798957
        },
        "request": {},
        "tracePromotionId": "100039174",
        "tracepromotionid": "100039174"
    }

    point_url = 'https://xapi.weimob.com/api3/onecrm/point/myPoint/get'
    sign_url = "https://xapi.weimob.com/api3/onecrm/mactivity/sign/misc/sign/activity/core/c/sign"
    info_url = 'https://xapi.weimob.com/api3/onecrm/user/center/usercenter/userAssembly'

    sign_rsp = requests.post(sign_url, headers=headers, json=sign_data)
    sign_json = sign_rsp.json()
    point_rsp = requests.post(point_url, headers=headers, json=point_data)
    point_json = point_rsp.json()
    info_rsp = requests.post(info_url, headers=headers, json=point_data)
    info_json = info_rsp.json()

    nickname = info_json['data']['nickname']
    totalPoint = point_json['data']['totalPoint']
    growthValue = info_json['data']['growthValue']
    qdjg = sign_json['errmsg']

    if sign_rsp.status_code == 200:
        if '服务错误' in qdjg:
            qdjg = "请不要重复签到"
        msg = '[账号]：{}\n[用户]：{}\n[签到]：{}\n[积分]：{}\n[成长值]：{}'.format(a, nickname, qdjg, totalPoint, int(growthValue))
        print(msg)
    else:
        print("请检查网络或者ck是否有效")
    ts_msg = "统一快乐星球签到\n{}".format(msg)
    QYWX_KEY = get_environ("QYWX_KEY")
    webhook = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=" + QYWX_KEY
    headers = {"Content-Type": "text/plain"}
    data = {
        "msgtype": "text",
        "text": {
            "content": ts_msg
        }

    }
    if QYWX_KEY != "":
        r = requests.post(url=webhook, headers=headers, json=data).json()
        if r["errmsg"] == "ok":
            print("企业微信机器人推送成功")
        else:
            print("企业微信机器人推送失败")
        print()
    else:
        print()

def get_environ(key, default="", output=True):
    def no_read():
        if output:
            if key == "rdxkck":
                print(f"未填写环境变量 {key} 请添加")
        return default

    return environ.get(key) if environ.get(key) else no_read()

if __name__ == '__main__':
    token = get_environ("tyklxqck")
    cks = token.split("\n")
    print("检测到{}个ck记录\n开始统一快乐星球签到".format(len(cks)))
    print()
    a = 0
    for ck in cks:
        c = ck.split('&')
        for i in c:
            a += 1
            sign(i)
            print()
