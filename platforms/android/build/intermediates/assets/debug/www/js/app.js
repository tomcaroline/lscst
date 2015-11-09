// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
//设置android标签栏在底部
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');
//设置android标签栏在底部
//    路由设置
        $stateProvider
            .state('tabs', {
                url: "/index",
                templateUrl: "tpl/tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home': {
                        templateUrl: "tpl/home.html",
                        //controller: "IndexController"
                    }
                }
            })
            .state('tabs.O2O', {
                url: "/O2O",
                views: {
                    'O2O': {
                        templateUrl: "tpl/o2o.html",
                        //controller: "IndexController"
                    }
                }
            })
            .state('tabs.user', {
                url: "/user",
                views: {
                    'user': {
                        templateUrl: "tpl/user.html",
                        //controller: "IndexController"
                    }
                }
            })
            .state('tabs.toutiao', {
                url: "/toutiao",
                views: {
                    'home': {
                        templateUrl: "tpl/toutiao.html",
                        //controller: "IndexController"
                    }
                }
            })
            .state('tabs.paike', {
                url: "/paike",
                views: {
                    'home': {
                        templateUrl: "tpl/paike.html",
                        //controller: "IndexController"
                    }
                }
            })
            .state('tabs.fangcan', {
                url: "/fangcan",
                views: {
                    'home': {
                        templateUrl: "tpl/fangcan.html",
                        //controller: "IndexController"
                    }
                }
            })
        $urlRouterProvider.otherwise("/index/home");//默认路由
    })


