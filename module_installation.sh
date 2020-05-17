#!/usr/bin/env bash


sudo apt-get install python3-mysqldb
sudo pip3 install SQLAlchemy
sudo pip3 install flask
sudo pip3 install requests
sudo pip3 install flask_cors
sudo pip3 install flasgger
echo 'deb http://repo.mysql.com/apt/ubuntu/ trusty mysql-5.7-dmr' | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install mysql-server-5.7
# sudo pip3 install MySQL-python
# sudo pip3 install MySQL-python-connector
