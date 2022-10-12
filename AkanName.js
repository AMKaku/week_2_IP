const DAYS_OF_THE_WEEK = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"]
const MALE_NAMES = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const FEMALE_NAMES = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function calculateNameAndDay(century,year,month,day,gender){
    var IndexOfTheDay = Math.round((((century/4) -2*century-1) + ((5*year/4)) + ((26*(month+1)/10)) + day)) % 7;
    var dayTheUserWasBorn = DAYS_OF_THE_WEEK[IndexOfTheDay];
var name = null;

if (gender === 'm'){
    name = MALE_NAMES[IndexOfTheDay];
} else if (gender === 'f'){
    name = FEMALE_NAMES[IndexOfTheDay];
} else{
     alert("Invalid gender");
}

var list = [dayTheUserWasBorn,name];
return list;
}
function querry(){
    var userInputYear = parseInt(prompt("enter the year"));;
    var userInputMonth = parseInt(prompt("enter the month"));;
    var userInputDay = parseInt(prompt("enter the day"));;
    var userInputGender = prompt("enter the gender");;
    var userInputCentury = parseInt(userInputYear.toString().substring(0,2));
    var output = calculateNameAndDay(userInputCentury,userInputYear,userInputMonth,userInputDay,userInputGender);
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = "You were born on: " + output[0] + ". Your Akan name is:" + output[1];
}

