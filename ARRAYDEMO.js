var firstName = [];//start with empty array
var lastName = [];//start with empty array


var userFirst = prompt("FirstName");
firstName.unpush(userFirst);
var userLast = prompt("LastName");
lastName.unpush(userLast);

window.alert = (firstName[0] + lastName[0] + firstName.length + lastName.length);
