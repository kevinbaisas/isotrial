# Isomorphic Boilerplate

Boilerplate for isomorphic rendering using redux.
* Koa - used as server side renderer
* Restify - used as API server
* Mongoose - API DB
* React & Redux for anything else

## As of 04/22/17
This boilerplate implments the latest versions of:
* react-helmet `^5.0.3`
* react-redux `^5.0.4`
* react-router `4.1.1`
* react-router-config `^1.0.0-beta.3`
* react-router-dom `^4.1.1`
* react-router-redux `^5.0.0-alpha.6`
* redux `^3.6.0`,

## Prerequisites
* NodeJSv7+ (Koa is used as the server side renderer)

## Get started
* `sudo chmod 777 update.sh`
* Execute `./update.sh` (the script requires yarn, but you can use npm install if you want to)
* Copy `config.json.dist` to `config.json`
* Copy `api/config.json.dist` to `api/config.json`
* `npm start`

## NOTES
* For example implementations of websockets/saga/observable etc. check: https://github.com/kvnbai/redux-isomorphic-spa-boilerplate-example

## For front-end only development:
change history/createBrowserHistory tohistory/createHashHistory on line 4

index file `app.html` is under the `static` folder
