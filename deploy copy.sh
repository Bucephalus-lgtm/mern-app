#!/bin/sh
sudo git pull origin backend-dev
sudo npm install
cd client
yarn
sudo npm run build
cd .. && cd server
npm install
sudo systemctl restart nginx
sudo pm2 restart 0