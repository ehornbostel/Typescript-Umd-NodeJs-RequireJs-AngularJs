/**
 * Created by EG Hornbostel on 11/13/2015.
 */
import * as angular from 'angular';
import 'angular.resource';
import User from "../model/User";
import {UserResource} from "./resource/UserResource";

var userRepository = angular.module('DataRepository', ['ngResource']);

userRepository.factory('UserRepository', ['$resource',
    function($resource:any) : UserResource{
        return $resource('users/:userId', {});
    }]);
