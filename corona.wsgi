#!/usr/bin/python3
import sys
sys.path.insert(0,"/var/www/corona/")
sys.path.insert(0,"/var/www/corona/corona/")

import logging
logging.basicConfig(stream=sys.stderr)

from corona import app as application
