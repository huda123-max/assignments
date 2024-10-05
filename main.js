// Assignment 16
var friendsList = ["Huda,Tayaba,Irshad,Arham,Ayesha"];
console.log("We have found a bigger dinner table,so now more space is available.");
friendsList.unshift("Neha");
friendsList.splice(2, 0, "Asma");
friendsList.push("Hira");
for (var i = 0; i < friendsList.length; i++) {
    console.log("Dear Miss ".concat(friendsList[i], ",we are grateful to invite in our dinner party"));
}
