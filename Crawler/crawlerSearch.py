from requests import get
from bs4 import BeautifulSoup as bs
import html5lib

def findGoogle(s):
    global sayText, sayLink

    h = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 OPR/92.0.0.0'}

    se = s.split()
    ind = se.index('pesquisa')
    for i in range(ind+1):
        se.pop(0)
    assunto = " ".join(se)
    search = "+".join(se)

    link = (f'https://www.google.com.br/search?q={search}')

    url = get(link, headers=h)    
    page = bs(url.content, 'html5lib')
    li = (page.find('div', attrs={'class':'yuRUbf'}).a)

    sayLink = li['href']
    sayText = (f'Abrindo pesquisa sobre {assunto}')