// Assignment 16

let friendsList:string[]= ["Huda,Tayaba,Irshad,Arham,Ayesha"];

console.log("We have found a bigger dinner table,so now more space is available.");

friendsList.unshift("Neha");
friendsList.splice(2,0,"Asma");
friendsList.push("Hira");

for(let i=0; i<friendsList.length; i++){
    console.log(`Dear Miss ${friendsList[i]},we are grateful to invite in our dinner party`);
}



