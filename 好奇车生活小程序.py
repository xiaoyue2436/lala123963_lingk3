"""
好奇车生活小程序 channel.cheryfs.cn
抓包提取accountId参数，填入下方列表中，多账号用&隔开
export hqcsh="变量accountId&"
"""
import os
import sys

# 判断是否安装了anti_useragent 如果没有安装就自动安装
try:
    import anti_useragent
except ImportError:
    os.system('pip install anti_useragent')
    import anti_useragent

import time
from datetime import datetime

import requests
from anti_useragent import UserAgent

account_list = {
    '',
}

APP_SUCCESS_TEXT = '"code":200'
DRAW_CODE = {
    1: '未开奖',
    2: '很抱歉，您的次数已用完！',
    3: '已开奖',
}
ACTIVITY_ID = {
    'sign_in': '620810406813786113',
    'draw': '620821692188483585',
    'get_coin': '621911913692942337',
}


def set_headers(func, account_id):
    return {
        'Accept-Language': 'zh-cn',
        'accountId': account_id,
        'Accept-Encoding': 'gzip,deflate,br',
        'tenantId': '619669306447261696',
        'activityId': ACTIVITY_ID[func],
        'user-agent': UserAgent().wechat_iphone,
        'Accept': 'application/json, text/plain, */*',
    }


def get_coin(account_id):
    url = f'https://channel.cheryfs.cn/archer/activity-api/common/accountPointLeft?pointId=620415610219683840'
    res = requests.get(url=url, headers=set_headers('get_coin', account_id))
    if res and APP_SUCCESS_TEXT in res.text:
        print(f'当前金币数:{res.json().get("result")}')
        return res.json().get("result")


def sign_in(account_id):
    url = 'https://channel.cheryfs.cn/archer/activity-api/signinact/signin'
    res = requests.get(url=url, headers=set_headers('sign_in', account_id))
    if res and APP_SUCCESS_TEXT in res.text:
        print('签到成功！')
    else:
        print('签到失败！ ' + res.text)


def daily_draw(account_id):
    url = 'https://channel.cheryfs.cn/archer/activity-api/luckydraw/luckydraw/155E4BC5D86345EE8DD7D259E8B4751F'
    res = requests.get(url=url, headers=set_headers('draw', account_id))
    if res and '"result":true' in res.text:
        type_code, award = draw_result(account_id)
        print(f'抽奖状态:{DRAW_CODE[type_code]} - {award}')
    else:
        print('抽奖失败！ ' + res.text)


def draw_result(account_id):
    url = 'https://channel.cheryfs.cn/archer/activity-api/luckydraw/luckydrawResult/155E4BC5D86345EE8DD7D259E8B4751F'
    res = requests.get(url=url, headers=set_headers('draw', account_id))
    if res and APP_SUCCESS_TEXT in res.text:
        type_code = res.json()["result"]["type"]
        if type_code == 1:
            time.sleep(5)
            draw_result(account_id)
        return type_code, res.json()["result"]["awardName"]
    else:
        print('获取抽奖结果失败！ ' + res.text)


def is_time_between(start_time, end_time):
    # 判断时间格式是否正确
    try:
        datetime.strptime(start_time, '%H:%M:%S')
        datetime.strptime(end_time, '%H:%M:%S')
    except ValueError:
        print('时间格式错误')
    else:
        # 获取当前时间
        now_time = datetime.now().strftime('%H:%M:%S')
        # 判断当前时间是否在16-22点之间
        if start_time <= now_time <= end_time:
            return True
        else:
            # 计算当前时间与16点的时间差
            if now_time < start_time:
                time_diff = datetime.strptime(start_time, '%H:%M:%S') - datetime.strptime(now_time, '%H:%M:%S')
            else:
                time_diff = datetime.strptime(now_time, '%H:%M:%S') - datetime.strptime(start_time, '%H:%M:%S')
            return time_diff.seconds


def use_coin(account_id):
    if get_coin(account_id) >= 188:
        print('金币数大于188，开始兑换！')
        if judge_time := is_time_between('16:00:00', '22:00:00'):
            if isinstance(judge_time, int):
                print(f'当前时间:{datetime.now().strftime("%H:%M:%S")}，还未到16点，还需等待{judge_time}秒后自动执行！')
                time.sleep(judge_time)
        ''''''
def get_account():
    if "hqcsh" in os.environ:
        global account_list
        account_list = os.environ['hqcsh'].split('&')
        if len(account_list) > 0:
            return account_list
        else:  # 判断分支
            print("hqcsh变量未启用")
            sys.exit(1)  # 脚本退出
    else:  # 判断分支
        print("未添加hqcshK变量")
        sys.exit(0)  # 脚本退出

def main():
    get_account()
    for account_id in account_list:
        print(f'账号:{account_id} ')

        sign_in(account_id)
        daily_draw(account_id)
        # use_coin(account_id)


if __name__ == '__main__':
    main()
