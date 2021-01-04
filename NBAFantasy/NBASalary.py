from urllib.request import urlopen
from bs4 import BeautifulSoup
import pandas as pd

def NBASalary():
    url = "https://www.basketball-reference.com/contracts/players.html"
    html = urlopen(url)
    # convert to html object
    soup = BeautifulSoup(html, "lxml")

    # use findALL() to get the column headers
    soup.findAll('tr', attrs={'class': None}, limit=2)

    # use getText()to extract the text we need into a list
    headers = [th.getText() for th in soup.findAll('tr', attrs={'class': None}, limit=2)[0].findAll('th')]

    # exclude the first column as we will not need the ranking order from Basketball Reference for the analysis
    headers = headers[1:]
    
    # avoid the first header row
    rows = soup.findAll('tr', attrs={'class': None})[1:]
    player_stats = [[td.getText() for td in rows[i].findAll('td')]
                for i in range(len(rows))]

    stats = pd.DataFrame(player_stats, columns = headers)
    return stats
