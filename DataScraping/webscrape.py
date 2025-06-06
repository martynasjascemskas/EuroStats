import requests
from bs4 import BeautifulSoup
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

baseUrl = "https://www.euroleaguebasketball.net/"
allTeamsStats = []

def getTeams(baseUrl):
    r = requests.get('https://www.euroleaguebasketball.net/en/euroleague/teams/')
    soup = BeautifulSoup(r.content, 'lxml')
    teamlist = soup.find_all('ul', class_='teams-list_list__VcpE5')
    teamlinks = []
    for item in teamlist:
        for link in item.find_all('a', href=True):
            teamlinks.append(baseUrl + link['href'])
    return teamlinks

def getTeamStatsLink(teamlink):
    r = requests.get(f'{teamlink}')
    soup = BeautifulSoup(r.content, 'lxml')
    teamstatslink = soup.find_all('a', class_='cursor-pointer')
    team_link = teamstatslink[2]['href']
    print(team_link)
    team_name = soup.find('h1', class_='club-info_name___2KwN').text.replace(" Roster", "")
    return team_link, team_name

def getTeamStats(team_link, team_name, allTeamsStats):
    url = f'{team_link}'
    options = webdriver.ChromeOptions()
    # Using a pre-configured browsing profile to get around Chrome Cookies on EuroLeague website.
    options.page_load_strategy = 'none'
    options.add_argument("user-data-dir=C:/Users/Martynas/AppData/Local/Google/Chrome/User Data")
    options.add_argument("profile-directory=Default")
    driver = webdriver.Chrome(options=options)

    driver.get(url)
    WebDriverWait(driver, 5).until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, 'complex-stat-table_row__XPRhI'))
    )
    is_active_div = driver.find_element(By.CLASS_NAME, 'active--1')
    teamstats = is_active_div.find_elements(By.CLASS_NAME, 'complex-stat-table_row__XPRhI')

    for index, stats in enumerate(teamstats, start=2):
        #print(teamstats[index].text)
        if index < len(teamstats)-2:
            num_in_team = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[1]').text
            player_name = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/div/a/p[2]').text
            games_played = stats.find_element(By.XPATH , f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[2]').text
            games_started = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[3]').text
            minutes_played = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[4]').text
            points = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[5]').text
            two_point_percentage = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[6]').text
            three_point_percentage = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[7]').text
            free_throw_percentage = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[8]').text
            offensive_rebounds = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[9]').text
            defensive_rebounds = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[10]').text
            total_rebounds = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[11]').text
            assists = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[12]').text
            steals = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[13]').text
            turnover = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[14]').text
            blocks = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[15]').text
            blocks_against = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[16]').text
            fouls_commited = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[17]').text
            fouls_received = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[18]').text
            performance_index_rating = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[19]').text
            
            team_stats = {
                'num_in_team': num_in_team,
                'player_name': player_name,
                'games_played': games_played,
                'games_started': games_started,
                'minutes_played': minutes_played,
                'points': points,
                'two_point_percentage': two_point_percentage,
                'three_point_percentage': three_point_percentage,
                'free_throw_percentage': free_throw_percentage,
                'offensive_rebounds': offensive_rebounds,
                'defensive_rebounds': defensive_rebounds,
                'total_rebounds': total_rebounds,
                'assists': assists,
                'steals': steals,
                'turnover': turnover,
                'blocks': blocks,
                'blocks_against': blocks_against,
                'fouls_commited': fouls_commited,
                'fouls_received': fouls_received,
                'performance_index_rating': performance_index_rating,
                'Team': team_name,
            }
            print(team_stats)
            allTeamsStats.append(team_stats)
        else:
            player_name = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/div/p').text
            points = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[5]').text
            two_point_percentage = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[6]').text
            three_point_percentage = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[7]').text
            free_throw_percentage = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[8]').text
            offensive_rebounds = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[9]').text
            defensive_rebounds = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[10]').text
            total_rebounds = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[11]').text
            assists = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[12]').text
            steals = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[13]').text
            turnover = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[14]').text
            blocks = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[15]').text
            blocks_against = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[16]').text
            fouls_commited = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[17]').text
            fouls_received = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[18]').text
            performance_index_rating = stats.find_element(By.XPATH, f'//*[@id="main"]/div/div[2]/div/div/div[2]/div[1]/div[3]/div[2]/div/div/div/div/div/div[{index}]/p[19]').text
            team_stats = {
                'num_in_team': None,
                'player_name': team_name + " " + player_name,
                'games_played': None,
                'games_started': None,
                'minutes_played': None,
                'points': points,
                'two_point_percentage': two_point_percentage,
                'three_point_percentage': three_point_percentage,
                'free_throw_percentage': free_throw_percentage,
                'offensive_rebounds': offensive_rebounds,
                'defensive_rebounds': defensive_rebounds,
                'total_rebounds': total_rebounds,
                'assists': assists,
                'steals': steals,
                'turnover': turnover,
                'blocks': blocks,
                'blocks_against': blocks_against,
                'fouls_commited': fouls_commited,
                'fouls_received': fouls_received,
                'performance_index_rating': performance_index_rating,
                'Team': team_name,
            }
            allTeamsStats.append(team_stats)
        if index == len(teamstats):
            break
    return allTeamsStats

for index, item in enumerate(getTeams(baseUrl), start=1):
    print(f'Starting Scraping Team Stats: {index}/{len(getTeams(baseUrl))}')
    team_link, team_name = getTeamStatsLink(f'{item}')
    team_link = baseUrl + team_link
    print(f'Team name: {team_name}')
    print(f'Team link: {team_link}')
    getTeamStats(team_link, team_name, allTeamsStats)
    print(f'Finished Scraping Team Stats: {index}/{len(getTeams(baseUrl))}')
    print("----------------------------")

df = pd.DataFrame(allTeamsStats)
print(df)
df.to_csv('stats.csv', index=False)

# API FOR TEAM PLAYERS: https://feeds.incrowdsports.com/provider/euroleague-feeds/v2/competitions/E/seasons/E2024/clubs/zal/people/stats
# API FOR INDIVIDUAL WHOLE TEAM STATS: https://feeds.incrowdsports.com/provider/euroleague-feeds/v2/competitions/E/seasons/E2024/clubs/zal/stats
# API FOR PLAYER: https://www.euroleaguebasketball.net/_next/data/p2JiwrcWFdKcXIXG1EnUh/en/euroleague/players/lonnie-walker-iv/<007975>.json?name=lonnie-walker-iv&id=<007975>

# \COPY player_statistic FROM 'C:\Users\Martynas\Desktop\VSC\euroleague-scraper\stats.csv' DELIMITER ',' CSV HEADER