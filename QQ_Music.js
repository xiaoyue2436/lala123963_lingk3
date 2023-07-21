#本脚本接口来自网络，如有侵权请联系删除
#可以无限提交，但请注意超过24小时可能会被重置
#如果提交无效请重试,，一直无效则表示接口失效脚本已不可用，可以删除了
#本人萌新 写的很烂

#变量名 qqlist
#变量内容 qq 多账号以@符号分割

import requests
import re
import json
import os
#导入模块

#pushplus
pushplus = ''
pushplus_switch = '0' #1=开启 0=关闭
#推送配置

qq_list = os.environ.get('qqlist')
#获取环境变量

qq = qq_list.split('@')
#分割QQ

Output_text = ""
#手动先定义一下小变量

for n in qq:
    url = "http://qq.shanhe.red/api/qy/music.php?uin=" + str(n)
    retu = requests.get(url=url)
    retu.encoding = retu.apparent_encoding
    Output_text = Output_text + str(n) + '\n' + retu.text + '\n\n'
#循环提交

print(Output_text)
#打印log

if pushplus_switch == '1':
    url = "http://www.pushplus.plus/send"
    data = {
    "token": pushplus,
    "title": "QQ音乐时长通知",
    "content": Output_text}
    retu = requests.post(url=url,data=data)
    retu.encoding = retu.apparent_encoding
    print('推送通知\n------------\n' + retu.text)
# 推送服务
