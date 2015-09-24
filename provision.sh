#!/bin/bash

echo "Start Provision"

apt-get update

apt-get install ruby ruby-dev make gcc nodejs

gem install jekyll

echo "End Provision"
