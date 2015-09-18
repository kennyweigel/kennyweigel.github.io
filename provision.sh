#!/bin/bash

echo "Start Provision"

apt-get update

apt-get install build-essential -y

gem install jekyll

echo "End Provision"
