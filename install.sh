#!/bin/bash

if [ ! -f /etc/sangoma-release ]; then
  echo "Sorry, this script is only for the Sangoma OS (Free PBX distro)."
  echo "To develop or run this script on other distros, please see"
  echo "https://github.com/scolstico/freepbx-aws-polly#development"
  exit 1
fi

cd /opt
if [ ! -d aws-nodejs ]; then
  git clone https://github.com/scolstico/freepbx-aws-polly.git aws-nodejs
fi
cd aws-nodejs

git pull

npm install -g pnpm
pnpm i

if [ ! -f config.json ]; then
  cp config.example.json config.json
fi

echo ""
echo "Installation complete. Please edit config.json."
echo "Don't forget to add tts engine to FreePBX."
echo "See: https://github.com/scolstico/freepbx-aws-polly#freepbx-configuration"
echo ""
