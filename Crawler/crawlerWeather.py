from requests import get
from bs4 import BeautifulSoup as bs
import html5lib

def findTemp():
    global sayText

    h = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 OPR/92.0.0.0'}

    url = get('https://www.google.com/search?client=opera&q=temperatura+pompeia&sourceid=opera&ie=UTF-8&oe=UTF-8', headers=h)    
    page = bs(url.content, 'html5lib')
    t = (page.find_all('span', attrs={'class':'wob_t q8U8x'})[0]).text

    sayText = (f'Doutor, a temperatura em Pompeia está em {t} graus celsius')