from requests import get
from bs4 import BeautifulSoup as bs
import html5lib

def findDolar():
    global dolar, sayText

    h = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36 OPR/92.0.0.0'}

    url = get('https://www.google.com/finance/quote/USD-BRL?sa=X&ved=2ahUKEwi8_a6Rvqn7AhU8uZUCHYWjA0cQmY0JegQIChAc', headers=h)    
    page = bs(url.content, 'html5lib')
    dolar = ((page.find_all('div', attrs={'YMlKec fxKbKc'})[0]).text)[:4]

    sayText = (f'Doutor, hoje o dólar está custando {dolar} reais')