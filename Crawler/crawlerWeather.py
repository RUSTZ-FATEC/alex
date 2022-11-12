from requests import get
from bs4 import BeautifulSoup as bs
import html5lib

def findDolar():
    global sayText

    h = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 OPR/92.0.0.0'}

    url = get('https://weather.com/weather/today/l/-22.11,-50.17?par=google', headers=h)    
    page = bs(url.content, 'html5lib')
    t = page.find_all('span', attrs={'CurrentConditions--tempValue--MHmYY'})[0]
    te = t.replace("°", "")
    print(te)

    sayText = (f'Doutor, a temperatura está {temp} graus')

findDolar()