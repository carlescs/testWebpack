import * as angular from "angular";
import {IStateProvider,IUrlRouterProvider} from "angular-ui-router";
import {IndexController} from './IndexController';
import {TestController} from './TestController';
import {NumberService} from './NumberService';
import "bootstrap";

import 'bootstrap/dist/css/bootstrap.css';

angular.module('test',['ui.router'])
    .config(($stateProvider:ng.ui.IStateProvider,$urlRouterProvider:ng.ui.IUrlRouterProvider)=>{
        $stateProvider.state('test',{
            url:'/',
            controller: ['NumberService',TestController],
            controllerAs: 'vm',
            template: '/index/test.html'
        });
        $urlRouterProvider.when('','/');
    })
    .factory('NumberService',[()=>new NumberService()])
    .controller('IndexController',[IndexController]);