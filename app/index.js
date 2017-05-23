require('@uirouter/angularjs');
require('angular-material');
require('../node_modules/angular-material/angular-material.min.css');
require('./app.css');
const angular = require('angular');
const ngModule = angular.module('app', ['ui.router', 'ngMaterial']);

require('./config/config').default(ngModule);
require('./providers/login').default(ngModule);
require('./services/login').default(ngModule);
require('./services/clubes').default(ngModule);
require('./services/users').default(ngModule);
require('./controllers/home').default(ngModule);
require('./components/login').default(ngModule);
require('./components/clubes').default(ngModule);
require('./components/clubesDetail').default(ngModule);
require('./components/suscriptors').default(ngModule);
require('./components/suscriptorDetail').default(ngModule);
