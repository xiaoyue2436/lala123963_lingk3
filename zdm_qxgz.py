"""
cron: 18 25 18 * * *
new Env('值得买取消关注');
#青龙是pthon3可能运行不了 会的自己改 自己本地运行
#值得买做任务关注的人和文章太多了？ 就谢了这个脚本 取消关注用
#配置值得买cookie

"""


import requests, json, re,time
from bs4 import BeautifulSoup as bs
from urllib import parse

#青龙是pthon3可能运行不了 会的自己改 自己本地运行
#值得买做任务关注的人和文章太多了？ 就谢了这个脚本 取消关注用
#配置值得买cookie
cookie = '这里填cookie'

url = 'https://zhiyou.smzdm.com/guanzhu/daren/'
headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'cookie': f'{cookie}',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
}
headers2 = {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Content-Length': '267',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': f'{cookie}',
    'Host': 'zhiyou.smzdm.com',
    'Origin': 'https://zhiyou.smzdm.com',
    'Referer': 'https://zhiyou.smzdm.com/guanzhu/daren/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
}
html = requests.get(url=url, headers=headers)
soup = bs(html.text, "lxml")
pro_str = soup.find_all('a', class_='focus-name')
alist = []
for a in range(len(pro_str)):
    a = "".join(re.findall('<a class="focus-name" href="https://zhiyou.smzdm.com/member/(.*?)/" target="_blank">',
                           str(pro_str[a]), re.S))
    if len(a) > 0:
        alist.append(a)
print('本次需要取消关注的列表为:'+str(alist))

for i in range(len(alist)):
    followurl = 'https://zhiyou.smzdm.com/guanzhu/ajax_follow'

    data = f'follow=0&type=user&keyword={alist[i]}&source=%E6%97%A0&client_type=PC&operationalpositionID=%E6%97%A0&aid=%E6%97%A0&cid=%E6%97%A0&atp=%E6%97%A0&tagID=%E6%97%A0&p=%E6%97%A0&is_detail=0&sourcePage=https%3A%2F%2Fzhiyou.smzdm.com%2Fguanzhu%2Fdaren%2F&sourceMode=%E6%97%A0'
    html1 = requests.post(url=followurl, headers=headers2, data=data)
    result = json.loads(html1.text)
    print(result)
    time.sleep(2)
print('本轮取消关注达人完毕')

url2='https://zhiyou.smzdm.com/guanzhu/biaoqian/'
html2 = requests.get(url=url2, headers=headers)
soup2 = bs(html2.text, "lxml")
pro_str2 = soup2.find_all('div', class_='focus-checkbox')
alist2 = []
for b in range(len(pro_str2)):
    b = "".join(re.findall('input checked="checked" class="J_user_focus" data-cate="(.*?)" data-to="goodprice" data-type="tag" type="checkbox"/>\n<label>关注相关好价</label>',
                           str(pro_str2[b]), re.S))
    if len(b) > 0:
        alist2.append(b)
print('本次需要取消关注的列表为:'+str(alist2))

for j in range(len(alist2)):
    followurl2 = 'https://zhiyou.smzdm.com/guanzhu/ajax_follow'
    aa = f'{alist2[j]}'
    print(aa)
    datajson = json.dumps(aa, ensure_ascii=False)
    keyword = parse.quote(datajson).replace('%22','')
    data2 = f'follow=0&type=tag&keyword={keyword}&source=%E6%97%A0&client_type=PC&operationalpositionID=%E6%97%A0&aid=%E6%97%A0&cid=%E6%97%A0&atp=%E6%97%A0&tagID=%E6%97%A0&p=%E6%97%A0&is_detail=0&sourcePage=https%3A%2F%2Fzhiyou.smzdm.com%2Fguanzhu%2Fbiaoqian%2F&sourceMode=%E6%97%A0'
    html3 = requests.post(url=followurl2, headers=headers2, data=data2)
    result2 = json.loads(html3.text)
    print(result2)
    time.sleep(3)
print('本轮取消关注关键词完毕')



