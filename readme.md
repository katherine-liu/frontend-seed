### Start app
* Before start, make sure you already installed node, npm, gulp.
* Run ```npm install```
* Run ```gulp build```
* Open terminal, go the the app root, run gulp
* Visit localhost.com:8081

## Pre-tools
brew install node
# Global install
npm istall -g gulp
# Locall install: under your project folder:
npm install gulp --save-dev

## Gulp: install gulp & create gulpfile.js & gulp plugins

# Global install
sudo npm install -g gulp
# Local install
npm install gulp --save-dev

# Using npm install gulp plugins
npm install gulp-less --save-dev
npm install gulp-connect --save-dev
npm install gulp-concat --save-dev
npm install gulp-uglify --save-dev
npm install gulp-rename --save-dev
npm install gulp-minify-css --save-dev
npm install gulp-imagemin --save-dev

## Babel
npm install babel-cli --save-dev
npm install babel-preset-es2015 --save-dev

Then create .babelrc under root folder:
{
    "presets": ["es2015"]
}

In order to auto compile script files via Babel, you need to add:
    "build": "babel src --watch --out-dir lib"
under "scripts" in package.json. Then you can run
    babel run build
in the terminal.


## React
npm install babel-preset-react --save-dev

add "react" plugin into .babelrc:
{
    "presets": ["es2015", "react"]
}

## Build System: using gulp to do babel compile
npm install gulp-babel --save-dev

## Webpack
# Global install
npm install webpack -g
# local install
npm install webpack --save-dev

On your terminal:
    webpack app/src/common/navbar.js app/dist/js/bundle.js

## Install jspm
jspm init
