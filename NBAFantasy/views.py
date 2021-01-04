"""
Routes and views for the flask application.
"""
from flask_cors import CORS

import math
import numpy as np
import pandas as pd
from datetime import datetime
from flask import Flask, render_template, request, session, redirect, flash
from NBAFantasy import app
from nba_api.stats.static.players import find_players_by_full_name, _get_player_dict, _find_players
from basketball_reference_scraper.players import get_stats, get_game_logs, get_player_headshot
from basketball_reference_scraper.teams import get_roster, get_team_stats, get_opp_stats, get_roster_stats, get_team_misc
from basketball_reference_scraper.injury_report import get_injury_report
from NBAFantasy.NBASalary import NBASalary
app.secret_key = "don't tell anyone"

SEASON = 2020

CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

@app.route('/player', methods=['POST'])
def player():
        name = request.get_json()
        player = find_players_by_full_name(name['data'])

        # empty list (aka not found)
        if len(player) > 1 or len(player) == 0:
            # 204 no content
            return('', 204)
        
        # returns list of dicts in the form of:
        # 'id': player_row[player_index_id],
        # 'full_name': player_row[player_index_full_name],
        # 'first_name': player_row[player_index_first_name],
        # 'last_name': player_row[player_index_last_name],
        # 'is_active': player_row[player_index_is_active]

        player_ID = player[0]['id']
        player_name = player[0]['full_name']

        # headshot pic
        player_headshot = get_player_headshot(player_name)

        # Panda file of all salaries
        salaries = NBASalary()
        player_salaries = salaries.loc[salaries['Player'] == player_name]

        # player stats
        player_stats = get_stats(player_name, 'PER_GAME', False, False)
        player_stats = player_stats.round(2)
        player_stats = player_stats.sort_values('AGE', ascending=False) 

        # integer location
        player_team = player_stats.iloc[0]['TEAM']

        if not player_stats['POS'].empty:
            for index, row in player_stats['POS'].iteritems():
                if not isinstance(row, str) and math.isnan(row):
                    del player_stats['POS'][index]
        
        # team stats
        roster_stats = get_roster_stats(player_team, SEASON, 'PER_GAME', playoffs=False)
        roster_stats = roster_stats.sort_values(['POS', 'MP'], ascending=False)
        # player_info = roster_stats.to_dict()

        player_info = {'name': player_name, 'HS': player_headshot, 'salary': player_salaries.to_dict(), 'stats': player_stats.to_dict()}

        return(player_info)

@app.route('/injuries', methods=['GET'])
def injuries():
    # pandas to a dict (axios in react jsonifys it)
    injuries = get_injury_report().to_dict()
    # print(injuries)
    return(injuries)

@app.route('/contact')
def contact():
    """Renders the contact page."""
    return render_template(
        'contact.html',
        title='Contact',
        year=datetime.now().year,
        message='Your contact page.'
    )

@app.route('/about')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.'
    )
