from unittest import TestCase
from app import app
from flask import Flask, session, request
from forex_python.converter import CurrencyRates, CurrencyCodes, RatesNotAvailableError
from functions import convert_currency

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['TESTING'] = True

class FlaskTests(TestCase):
    def test_home_page(self):
        with app.test_client() as client:
            resp = client.get('/')
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<label for="from">Convert from </label>', html)


    def test_convert_page(self):
        with app.test_client() as client:
            resp = client.get('/convert', query_string={'amount': 1, 'from': 'USD', 'to': 'GBP'})
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<span>The result is</span>', html)
            """Could not convert usd to usd as suggested because get rate function didn't work at certain times of day"""
            self.assertEqual(convert_currency(1, 'USD', 'GBP'), '£0.85')

                    
