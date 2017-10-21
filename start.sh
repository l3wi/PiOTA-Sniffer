#!/usr/bin/bash
sudo python nohup sudo python /home/pi/probemon/probemon.py -i wlan1mon -t unix -o /home/pi/PiOTA-Sniffer/dump -f -s -r -l &
sudo node /home/pi/PiOTA-Sniffer/index.js