// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {   

    let userInput = window.prompt("Enter the length of your password.");
    let passwordLength = parseInt(userInput);

if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
  window.alert("Please Enter between 8 and 128")
  return 
}

let IncNum = window.confirm("Do you want your password has numbers?")
let IncSymb = window.confirm("Do you want your password has symbols?")
let Inclowercase = window.confirm("Do you want your password has lowercase letters?")
let IncUpperCase = window.confirm("Do you want your password has uppercase letters?")

let numlist = ["0","1","2","3","4","5","6","7","8","9"];
let symlist = ["!","@","#","$","%","&","*",];
let lowercaselist = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let uppercaselist = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let selectlist = []; //making an array to store the selected list.

if(IncNum === true){
selectlist.push(numlist);      //if number list has been selected, "push" it into "selectlist"
}
if(IncSymb === true){
  selectlist.push(symlist);
}
if(Inclowercase === true){
  selectlist.push(lowercaselist);
}
if(IncUpperCase === true){
  selectlist.push(uppercaselist);
}

if(selectlist.length === 0){// none of 4 list been selected, select lowercase letter as default
  selectlist.push(lowercaselist);
}
  function randomInt(max) {     //create a function to gengerate a integer
      return Math.floor(Math.random() * max);
      }

  function selectrandomitem(items){  //create a function to select a ramdom items from the "seleclist"
        return items[randomInt(items.length)]
      }

let newpassword = "";  //new variable with empty value

for (var i = 0; i< passwordLength; i++){
  var randomlist = selectrandomitem(selectlist) //selct a random list from "selectlis"
  var randomdata = selectrandomitem(randomlist)//selct a random item from that selected random list
  newpassword += randomdata                    // adds the results together 
}
return newpassword
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
