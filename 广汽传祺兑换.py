import requests
import time
from urllib.parse import quote


token = ''
headers = {
    'token': token,
}


# 获取shopSkuId
def get_shopSkuId(commodityId):
    # 每个产品都不同
    # 小米除螨
    # data = {"commodityId": commodityId, "commodityType": 4,
    #         "list": [{"attributeId": 5, "attributeValueId": 21, "attributeValueName": "白色"}]}
    # 美的落地风扇 2154
    data = {"commodityId": commodityId, "commodityType": 4,
            "list": [{"attributeId": 12, "attributeValueId": 59, "attributeValueName": "其他"}]}

    # 小米 小黑板 2135
    # data = {"commodityId": commodityId, "commodityType": 4,
    #         "list": [{"attributeId": 5, "attributeValueId": 21, "attributeValueName": "白色"}]}

    response = session.post(
        'https://gsp.gacmotor.com/gateway/app-api/shop/shopcommodity/attributev',
        headers=headers,
        json=data,
    )
    # print(response.json())
    shopSkuId = response.json().get('data').get('shopSkuId')
    return shopSkuId


# 获取payRatioId
def get_payRatioId(commodityId):
    shopSkuId = get_shopSkuId(commodityId)
    response = session.get(
        f'https://gsp.gacmotor.com/gateway/app-api/shop/shopcommodity/appMixturePay?commodityId={commodityId}&shopSkuId={shopSkuId}&commodityType=4',
        headers=headers,
    )
    print(response.json())
    payRatioId = response.json().get('data')[0].get('payRatioId')
    shopSkuId = response.json().get('data')[0].get('commoditySkuId')
    return payRatioId, shopSkuId


# 创建订单
def create_order():
    commodityId = 2154  # 美的电风扇
    # commodityId = 2132 # 小米除螨
    # commodityId = 2135  # 小米 小黑板
    # 获取地址信息
    response = session.get(
        'https://gsp.gacmotor.com/gateway/app-api/shop/shoporderaddress/addresslist',
        headers=headers,
    )
    print(response.json().get('data')[0])
    receiverName = quote(response.json().get('data')[0].get('trueName'))  # 转为URL编码
    address = quote(response.json().get('data')[0].get('address'))
    receiverMmobile = response.json().get('data')[0].get('mobPhone')
    addressId = response.json().get('data')[0].get('addressId')

    payRatioId, shopSkuId = get_payRatioId(commodityId)

    # 点击快递到家后
    response = session.get(
        f'https://gsp.gacmotor.com/gateway/app-api/shop/shoporder/checkbuy?commodityId={commodityId}&commodityAscription=1&vin=&shopSkuId={shopSkuId}&commodityType=4',
        headers=headers,
    )
    print(response.json())

    sellWay = 5  # 5为纯豆子兑换

    data = f'commodityType=4&commodityId={commodityId}&commodityAscription=1&shopSkuId={shopSkuId}&buyNum=1&receiverName={receiverName}&receiverMmobile={receiverMmobile}&address={address}&addressId={addressId}&vin=&dealerId=&shopNum=&sellWay={sellWay}&invoiceId=&invoiceType=&invoiceHead=&receiveMobile=&registerMobile=&taxpayerNum=&depositBank=&invoiceContent=&invoiceStatus=&payTime={int(time.time() * 1000)}&payRatioId=&registerAddress=&receiveInvoiceAddress=&bankNum=&postscript=&chargeAccount=&skuDiscountId='
    print(data)

    headers_1 = {
        'Host': 'gsp.gacmotor.com',
        'Connection': 'keep-alive',
        'Accept': 'application/json, text/plain, */*',
        'Cache-Control': 'no-cache',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 13; 22041211AC Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36;GACClient',
        'token': token,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Origin': 'https://gsp.gacmotor.com',
        'X-Requested-With': 'com.cloudy.component',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    }
    response = session.post(
        'https://gsp.gacmotor.com/gateway/app-api/shop/shoporderV2/createOrder',
        headers=headers_1,
        data=data,
    )
    print(response.json())

# 查看订单
def check_order():
    response = session.get(
        f'https://gsp.gacmotor.com/gateway/self/shopOrder/exchangelist?current=1&size=20&type=2&queryTimeType=0&vin=',
        headers=headers,
    )
    print(response.json())

if __name__ == '__main__':
    session = requests.Session()
    create_order()  # 兑换
    check_order() # 查看订单


