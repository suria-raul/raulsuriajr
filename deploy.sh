#!/usr/bin/env sh

set -e

echo "Npm Version"
npm --version

echo "Running npm install..."
npm install

echo "Building..."
npm run build

echo "Creating submodule folder..."
mkdir submodule

echo "Entering submodule folder"
cd submodule

echo "Adding submodule repository"
git submodule add -f git@github.com:suria-raul/raulsuriajr.git

echo "Entering dist folder inside submodule folder"
cd ../dist

echo "Copying all files to raulsuriajr folder"
cp * ../submodule/raulsuriajr -r

echo "Change directory to assets folder"
cd ../submodule/raulsuriajr/assets

echo "Renaming Css Index"
mv index-*.css index.css

echo "Renaming Js Index"
mv index-*.js index.js

echo "Copying profile.jpg"
mv profile-*.jpg profile.jpg

echo "Going back to the root directory"
cd - && cd ../ && pwd

echo "Removing changes to .gitmodules file"
git restore --staged .gitmodules

echo "Deleting .gitmodules file"
rm .gitmodules

echo ""
git restore --staged submodule

echo "Build done!"

echo "Point index.html in submodule/raulsuriajr/index.html to the right resource (css,js,jpg)."

echo "Check the files and push it manually."