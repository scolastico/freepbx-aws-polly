#!/bin/bash

set -e

if [[ "${1,,}" == "--force-install-on-any-os" ]]; then
  FORCE_INSTALL=true
elif [[ "${1}" == "--IkNoWhAtIdO" ]]; then
  FORCE_INSTALL=true
  echo ""
  echo "I warned you..."
  echo ""
else
  FORCE_INSTALL=false
fi

if [[ ! $FORCE_INSTALL && ! -f /etc/sangoma-release ]]; then
  echo ""
  echo "Sorry, this script is only for the Sangoma OS (Free PBX distro)."
  echo ""
  echo "If you are a professional and know what you are doing"
  echo "you can run this script with --fource-install-on-any-os"
  echo ""
  echo "If you just like the console and dont know what you are doing"
  echo "and have the feeling to say 'Thats my server, I can do what I want'"
  echo "you can run this script with --IkNoWhAtIdO"
  echo ""
  echo "To develop this script, please see"
  echo "https://github.com/scolstico/freepbx-aws-polly#development"
  echo ""
  exit 1
fi

if [[ $(uname -m) == "x86_64" ]]; then
  ARCH="x64"
elif [[ $(uname -m) == "aarch64" ]]; then
  ARCH="arm64"
else
  echo "Error: Unsupported architecture $(uname -m)"
  exit 2
fi

mkdir -p /opt/scolastico
mkdir -p /opt/scolastico/freepbx-aws-polly
cd /opt/scolastico/freepbx-aws-polly

FILE_NAME="freepbx-aws-polly-$ARCH"
LATEST_RELEASE=$(curl --silent "https://api.github.com/repos/scolastico/freepbx-aws-polly/releases/latest" | grep -Po '"tag_name": "\K.*?(?=")')
DOWNLOAD_URL="https://github.com/scolastico/freepbx-aws-polly/releases/download/$LATEST_RELEASE/$FILE_NAME"
curl -L -o $FILE_NAME $DOWNLOAD_URL

rm -f ./version
echo $LATEST_RELEASE > ./version

if [ $? -ne 0 ]; then
  echo "Error downloading file"
  exit 1
fi

echo "Downloaded file: $FILE_NAME"

if [ -f ./bin ]; then
  echo "Removing old version..."
  rm ./bin
fi

echo "Installing new version..."
mv freepbx-aws-polly-$ARCH ./bin
chmod +x ./bin
mkdir -p ./logs
chmod -R 666 ./logs

if [ ! -f ./config.json ]; then
  echo "Starting installer..."
  ./bin --install
else
  echo "Config already exists. Skipping installer."
fi

echo ""
echo "Installation complete."
echo""
echo "Don't forget to add tts engine to FreePBX."
echo ""
echo "FreePBX -> Login -> Settings -> Text To Speech Engines ->"
echo "Add TTS Engine -> Name: polly, Path: /opt/scolastico/freepbx-aws-polly/bin"
echo ""
echo "See: https://github.com/scolstico/freepbx-aws-polly#freepbx-configuration"
echo ""
