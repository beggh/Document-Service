"use strict";
exports.__esModule = true;
var user_1 = require("./user");
main();
function main() {
    var user1 = new user_1["default"]('Shyam');
    var user2 = new user_1["default"]('Ram');
    user1.createDocument('myfirstDoc');
    user1.createDocument('mysecondDoc');
    var documents = user1.getAllDocuments();
    var doc1 = documents[0];
    var doc2 = documents[1];
    doc1.setContent('My first line in the document', user1.getId());
    doc2.setContent('My first line in the second document', user2.getId());
    console.log(doc1.getContent(user1.getId()));
    console.log(doc2.getContent(user2.getId()));
    console.log('Adding access for the user2');
    user1.grantReadAccess(user2.getId(), doc1.getId());
    console.log(doc1.getContent(user2.getId()));
}
