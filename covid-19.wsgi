#!/usr/bin/python3
import sys
sys.path.insert(0,"/var/www/covid-19/")
sys.path.insert(0,"/var/www/covid-19/covid-19/")

import logging
logging.basicConfig(stream=sys.stderr)

from covid-19 import app as application
