# Isomorphic Boilerplate

Boilerplate for isomorphic rendering using redux.
* Koa - used as server side renderer
* Restify - used as API server
* Mongoose - API DB
* React & Redux for anything else

## Prerequisites
* NodeJSv7+ (Koa is used as the server side renderer)

## Get started
* `sudo chmod 777 update.sh`
* Execute `./update.sh` (the script requires yarn, but you can use npm install if you want to)
* Copy `config.json.dist` to `config.json`
* Copy `api/config.json.dist` to `api/config.json`
* `npm start`

## NOTES
* I included some example implementations of redux state, socket.io, thunk, saga and observable. Feel free to remove those.
* For example implementations of saga/observable etc. check: https://github.com/kvnbai/redux-isomorphic-spa-boilerplate-example

## For front-end only development:
change history/createBrowserHistory tohistory/createHashHistory on line 4

index file `app.html` is under the `static` folder
