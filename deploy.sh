#!/usr/bin/env sh

set -e

npm --version

npm run build

cd submodule

git submodule add -f git@github.com:suria-raul/raulsuriajr.git

cd ../dist

cp * ../submodule/raulsuriajr -r

cd ../submodule/raulsuriajr/assets

mv index-*.css index.css

mv index-*.js index.js

mv profile-*.jpg profile.jpg

cd -

cd ../

git restore --staged .gitmodules

rm .gitmodules

git restore --staged submodule

echo "Build done!"

echo "Point index.html in submodule/raulsuriajr/index.html to the right resource (css,js,jpg)."

echo "Check the files and push it manually."