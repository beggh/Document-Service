"use strict";
exports.__esModule = true;
var accessLevels_1 = require("./accessLevels");
var Document = /** @class */ (function () {
    function Document(name, userId) {
        Document.totalDocs++;
        this.name = name;
        this.id = Document.totalDocs;
        this.content = '';
        this.userIdtoAccess = new Map();
        this.userIdtoAccess[userId] = accessLevels_1.AccessLevels.OWNER;
    }
    Document.prototype.getId = function () {
        return this.id;
    };
    Document.prototype.getName = function () {
        return this.name;
    };
    Document.prototype.getContent = function (userId) {
        var userAccess = this.userIdtoAccess[userId];
        var readableAccess = [accessLevels_1.AccessLevels.OWNER, accessLevels_1.AccessLevels.READER, accessLevels_1.AccessLevels.EDITOR];
        if (readableAccess.indexOf(userAccess) > -1) {
            return this.content;
        }
        return 'You are not authorised to access this document';
    };
    Document.prototype.setContent = function (content, userId) {
        var userAccess = this.userIdtoAccess[userId];
        if (userAccess != accessLevels_1.AccessLevels.OWNER && userAccess != accessLevels_1.AccessLevels.EDITOR) {
            console.log('Sorry! you are not allowed to access this.');
            return;
        }
        this.content = content;
    };
    Document.prototype.getAllUsers = function () {
        return this.userIdtoAccess;
    };
    Document.prototype.getUserIdAccess = function (userId) {
        return this.userIdtoAccess[userId];
    };
    Document.prototype.setUserIdAccess = function (userId, access) {
        this.userIdtoAccess[userId] = access;
    };
    return Document;
}());
exports["default"] = Document;
Document.totalDocs = 0;
