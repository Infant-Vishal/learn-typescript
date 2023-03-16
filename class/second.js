"use strict";
exports.__esModule = true;
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, filter, burst, TimeLine) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.TimeLine = TimeLine;
    }
    Youtube.prototype.createStory = function () {
        console.log("Story is created");
    };
    return Youtube;
}());
