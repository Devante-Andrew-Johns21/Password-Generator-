function generate(){

    ///set length of password
    let complexity = document.getElementById("slider").value;
/// possible password values 
    let values = "ABCEDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%67*()_+";

    let password = "";

    ///create forloop for password characters
    for(var i = 0; i <= complexity; i++){

        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
///add password to display 
document.getElementById("display").value = password;

///add password to previously generated passwords section 
document.getElementById("lastNums").innerHTML =+ password + "<br />";
}