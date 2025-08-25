from flask import Flask
from forex_python.converter import CurrencyRates, CurrencyCodes
from decimal import *
from datetime import datetime as dt
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.debug = True
debug = DebugToolbarExtension(app)

current_time = dt.now()
rates = CurrencyRates()
code = CurrencyCodes()

def convert_currency(amount, conv_from, conv_to):
    """Convert amount to float"""
    amount = float(amount)
    """Get dictionary of available conversion rates"""
    rate_dict = rates.get_rates(conv_from, current_time)
    """Get rate for desired currency"""
    curr_rate = rate_dict[conv_to]
    """Create string to display converted value"""
    val = f'{code.get_symbol(conv_to)}{round(curr_rate * amount, 2)}'
    return val