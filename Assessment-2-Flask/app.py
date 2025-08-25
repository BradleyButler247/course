from flask import Flask, request, render_template, redirect, flash, url_for
from forex_python.converter import CurrencyRates, CurrencyCodes, RatesNotAvailableError
from decimal import *
from datetime import datetime as dt
from flask_debugtoolbar import DebugToolbarExtension
from functions import convert_currency

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.debug = True
debug = DebugToolbarExtension(app)

current_time = dt.now()
rates = CurrencyRates()
code = CurrencyCodes()

@app.route('/')
def home_page():

    return render_template('home.html')

@app.route('/convert', methods=['GET', 'POST'])
def convert_page():
    amount = request.args.get('amount')
    conv_from = str(request.args.get('from')).upper()
    conv_to = str(request.args.get('to')).upper()
        
    try:
        val = convert_currency(amount, conv_from, conv_to)
    except ValueError:
        flash(f"'{amount}' is not a valid amount", 'error')
        return redirect(url_for('.home_page'))
    except RatesNotAvailableError:
        flash(f"'{conv_from}' is not a valid currency", 'error')
        return redirect(url_for('.home_page'))
    except KeyError:
        flash(f"'{conv_to}' is not a valid currency", 'error')
        return redirect(url_for('.home_page'))

    return render_template('convert.html', val=val)
