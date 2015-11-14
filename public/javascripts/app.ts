import * as angular from 'angular';
import 'services/UserRepository'
import {UserResource} from "./services/resource/UserResource";
import User from "./model/User";

class TestController {
    user: UserResource;

    buttonClicked() {
        this.user.id = 'def';
        this.user.$save();
    }

    constructor(userRepository: ng.resource.IResourceClass<UserResource>) {
        this.user = userRepository.get();
    }
}

var umdTest = angular.module('umdTest', ['DataRepository']);

umdTest.controller('TestController', ['UserRepository', TestController]);
