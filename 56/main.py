import requests
import execjs
import time


if __name__ == '__main__':
    headers = {
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"',
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json;charset=utf-8',
        'sec-ch-ua-mobile': '?0',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.82 Safari/537.36',
        'sec-ch-ua-platform': '"Windows"',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Dest': 'empty',
        'Referer': 'https://www.cls.cn/telegraph',
        'Accept-Language': 'zh-CN,zh;q=0.9',
    }
    t = str(int(time.time()))

    str = f"app=CailianpressWeb&category=&lastTime={t}&last_time={t}&os=web&refresh_type=1&rn=20&sv=7.7.5"
    with open('tt.js', 'r') as f:
        js_code = f.read()
    js_domo = execjs.compile(js_code)
    sign = js_domo.call('g', str)

    params = (
        ('app', 'CailianpressWeb'),
        ('category', ''),
        ('lastTime', t),
        ('last_time', t),
        ('os', 'web'),
        ('refresh_type', '1'),
        ('rn', '20'),
        ('sv', '7.7.5'),
        ('sign', sign)
    )
    response = requests.get('https://www.cls.cn/nodeapi/telegraphList', headers=headers, params=params)
    print(response.text)