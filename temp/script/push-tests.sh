#!/bin/bash

# Pushes the contents of the /public directory to the gh-pages branch
# This is so the build artifacts can be viewed online easily as github pages

# Checks out the domina repo to a temp file, so it won't disturb any current work

# Assumes the user running this script has privileges to the domina repository.

PUBLIC_DIR=`dirname $0`/../public

TEMP_DIR=`mktemp -d -t domina`
git clone git@github.com:levand/domina.git $TEMP_DIR -b gh-pages
cp -r $PUBLIC_DIR/* $TEMP_DIR/.
cd $TEMP_DIR
git add .
git add -u
git commit -m "push build artifacts at `date -u`"
git push
cd $TEMP_DIR/..
rm -rf $TEMP_DIR