import json
import os
import requests
# 微信优途甄选小程序
# 只有签到功能，可以兑换加油卷
# 环境变量 ytzx ，抓 Authorization 去掉 Bearer，多账号&分割



cookies = os.environ["ytzx"].split("&")
# 签到
def sign(AU):
    url = 'https://siteya.net/mbff//customer/community/points/sign'
    header ={
        'Host': 'siteya.net',
        'Connection': 'keep-alive',
        'Accept': 'application/json',
        'Authorization':'Bearer '+AU,
        'terminal': 'MINIPROGRAM',
        'referer': 'https://servicewechat.com/wxd581815a625c4b05/32/page-frame.html',
        'xweb_xhr': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'zh-CN,zh',
        'Cookie': 'JSESSIONID=18D142C224FE6EC45E850F0422399DEE',
        'Accept-Encoding': 'gzip, deflate',
    }
    res = requests.get(url,headers=header)
    print(res.text)


def get_id(AU):
    url = 'https://siteya.net/mbff/coupon-info/front/center'
    header = {
        'Host': 'siteya.net',
        'Connection': 'keep-alive',
        'Authorization': AU,
        'referer': 'https://servicewechat.com/wxd581815a625c4b05/32/page-frame.html',
        'xweb_xhr': '1',
        'distribute-channel': '{"channelType":1,"inviteeId":null}',
        'terminal': 'MINIPROGRAM',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763',
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'zh-CN,zh',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Length': '105',
    }
    data = '{"activityId":"40288098888a89580188f029efcc0910","couponType":3,"pageNum":0,"pageSize":10,"activityKey":"w0628"}'
    res = requests.post(url,headers=header,data=data)
    print(res.text)

# 周三抢卷
def getquan(context,AU):
    url = 'https://siteya.net/mbff/coupon-code/fetch-coupon'
    header ={
        'Host': 'siteya.net',
        'Connection': 'keep-alive',
        'Authorization': AU,
        'referer': 'https://servicewechat.com/wxd581815a625c4b05/32/page-frame.html',
        'xweb_xhr': '1',
        'distribute-channel': '{"channelType":1,"inviteeId":null}',
        'terminal': 'MINIPROGRAM',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/6763',
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': '*/*',
        'Sec-Fetch-Site': 'cross-site',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'zh-CN,zh',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Length': '105',
    }
    couponInfoId = context[2]['couponId']
    couponActivityId= context[2]['activityId']
    data = '{"couponInfoId":"'+couponInfoId+'","couponActivityId":"'+couponActivityId+'"}'
    print(data)
    res = requests.post(url,headers=header,data=data)
    print(res.text)

for i in cookies:
    sign(i)
