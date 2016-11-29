import "angular";
import {TestController} from './TestController';
import {NumberService} from './NumberService';
import "bootstrap";

import 'bootstrap/dist/css/bootstrap.css';

angular.module('test',[])
    .factory('NumberService',[()=>new NumberService()])
    .controller('TestController',['NumberService',TestController]);