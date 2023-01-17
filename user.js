"use strict";
exports.__esModule = true;
var accessLevels_1 = require("./accessLevels");
var document_1 = require("./document");
var User = /** @class */ (function () {
    function User(name) {
        this.documents = [];
        this.name = name;
        this.id = ++User.totalUser;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.createDocument = function (docName) {
        var doc = new document_1["default"](docName, this.id);
        this.documents.push(doc);
    };
    User.prototype.grantEditAccess = function (userId, docId) {
        for (var _i = 0, _a = this.documents; _i < _a.length; _i++) {
            var doc = _a[_i];
            if (doc.getId() == docId) {
                doc.setUserIdAccess(userId, accessLevels_1.AccessLevels.EDITOR);
                console.log('Editor Access granted to user: ', userId);
                return;
            }
        }
        console.log('The doc you are searching is not available');
    };
    User.prototype.grantReadAccess = function (userId, docId) {
        for (var _i = 0, _a = this.documents; _i < _a.length; _i++) {
            var doc = _a[_i];
            if (doc.getId() == docId) {
                doc.setUserIdAccess(userId, accessLevels_1.AccessLevels.READER);
                console.log('Reader Access granted to user: ', userId);
                return;
            }
        }
        console.log('The doc you are searching is not available');
    };
    User.prototype.getAllDocuments = function () {
        return this.documents;
    };
    return User;
}());
exports["default"] = User;
User.totalUser = 0;
