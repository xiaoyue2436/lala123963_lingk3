"""
cron: 30 7 * * *
new Env('联通立减金签到');
中国联通app-我的-钱包-立减金
抓包地址: https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew
抓包请求头里面: authinfo 的 sessionId或者tokenId 是一样的 ps-pafs开头的
环境变量 ltljjck = sessionId或者tokenId的值
多账号新建变量或者用 换行 分开

"""
import time
import requests
from os import environ, system, path


def load_send():
    global send, mg
    cur_path = path.abspath(path.dirname(__file__))
    if path.exists(cur_path + "/notify.py"):
        try:
            from notify import send
            print("加载通知服务成功！")
        except:
            send = False
            print("加载通知服务失败~")
    else:
        send = False
        print("加载通知服务失败~")


load_send()


def get_environ(key, default="", output=True):
    def no_read():
        if output:
            if key == "ltljjck":
                print(f"未填写环境变量 {key} 请添加")
        return default

    return environ.get(key) if environ.get(key) else no_read()


class Ltljj():
    def __init__(self, ck):
        self.msg = ''
        self.ck = ck

    def sign(self):
        global ljj
        time.sleep(1)
        url = "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/unifyDrawNew"
        url2 = "https://epay.10010.com/ci-mcss-party-front/v1/ttlxj/queryAvailable"
        hck = str({"mobile": "", "sessionId": self.ck, "tokenId": self.ck, "userId": ""})
        headers = {
            "Host": "epay.10010.com",
            "accept": "application/json, text/plain, */*",
            "authinfo": hck,
            "user-agent": "Mozilla/5.0 (Linux; Android 11; Redmi Note 8 Pro Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.141 Mobile Safari/537.36; unicom{version:android@10.0300,desmobile:13108219293};devicetype{deviceBrand:Xiaomi,deviceModel:Redmi Note 8 Pro};{yw_code:}",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        }

        data = 'drawType=B&bizFrom=225&activityId=TTLXJ20210330'

        r = requests.post(url, headers=headers, data=data).json()
        time.sleep(1)
        r2 = requests.post(url2, headers=headers, data=data).json()
        try:
            if r['data']['returnMsg'] == 'ok':
                ljjlist = r2['data']['prizeList']
                ljjye = 0
                for ljj in ljjlist:
                    ljjye += float(ljj['amount'])
                xx = f"[账号]：{ljj['userId'].replace(ljj['userId'][3:7], '****')}\n[签到]：恭喜您获得：{r['data']['amount']}话费红包。\n[余额]：{ljjye}\n\n"
                self.msg += xx
                return self.msg
            elif r['data']['returnMsg'] == '获取用户信息失败':
                xx = f"{r['data']['returnMsg']}, 请检查ck是否有效。{self.ck}\n\n"
                self.msg += xx
                return self.msg
            elif r['data']['returnMsg'] == '已达到活动日最大次数':
                ljjlist = r2['data']['prizeList']
                ljjye = 0
                for ljj in ljjlist:
                    ljjye += float(ljj['amount'])
                xx = f"[账号]：{ljj['userId'].replace(ljj['userId'][3:7], '****')}\n[签到]：{r['data']['returnMsg']}\n[余额]：{ljjye}\n\n"
                self.msg += xx
                return self.msg
            else:
                xx = '未知错误\n'
                self.msg += xx
                return self.msg
        except:
            xx = "请检查ck是否有效或者更换尝试！！！"
            self.msg += xx
            return self.msg


if __name__ == '__main__':
    token = get_environ("ltljjck") if environ.get("ltljjck") else refresh_token
    msg = ''
    cks = token.split("\n")
    print("检测到{}个ck记录".format(len(cks)))
    for ck in cks:
        run = Ltljj(ck)
        msg += run.sign()
    send("联通立减金签到通知", msg)
