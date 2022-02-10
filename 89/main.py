import time

import requests


def run():
    session = requests.Session()

    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'Upgrade-Insecure-Requests': '1',
        'Origin': 'https://www.cassmall.com',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                      'Chrome/97.0.4692.99 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,'
                  'application/signed-exchange;v=b3;q=0.9',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-User': '?1',
        'Sec-Fetch-Dest': 'document',
        'Referer': 'https://www.cassmall.com/passport/login',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }

    data = {
        'logintype': 'PASSWORD',
        'msg': '',
        'username': '17102542043',
        'password': 'xiaoQ123',
        'cellphone': '',
        'verifycode': ''
    }

    session.post('https://www.cassmall.com/passport/login', headers=headers,  data=data, verify=False)
    session.get('https://www.cassmall.com/', headers=headers, verify=False)
    r = session.get('https://www.cassmall.com/personnel/user/index/info', headers=headers, verify=False)

    print(session.cookies)
    print(r.text)


if __name__ == '__main__':
    run()