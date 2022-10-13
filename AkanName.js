function akanNames() {
    var daysOfTheWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ]; // shows days of the week
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var dateInput = prompt("Enter date of birth: YYYY-MM-DD:"); // requests user to put date of birth in indicated format.

    var birthDate = new Date(dateInput); // fetches date from the user input

    var dateBorn = birthDate.getDay(); // displays date of birth as  a number
    var birthMonth = birthDate.getMonth();
    var birthYear = birthDate.getFullYear();
    var femaleGender = femaleNames[dateBorn]; //converts number into name of day
    var maleGender = maleNames[dateBorn]; // converts number into name of day born


    /*if (genderInput === "Male") {
      alert("Your Akan name is" + maleGender);
    } else {
      alert("Your Akan name is" + femaleGender);
    }*/

    /*if ( genderInput ==="MALE" || genderInput==="FEMALE" || genderInput==="M" || genderInput==="F") {
        alert("continue with in put");
    } 
    else {
        alert("invalid");
    }*/

    if (
        dateBorn >= 0 &&
        dateBorn <= 6 &&
        birthMonth >= 0 &&
        birthMonth <= 11 &&
        birthYear >= 1000
    ) {
        var genderInput = prompt("Enter your gender: Male or Female").toUpperCase;// validates genderInput
        if (
            genderInput !== "MALE" ||
            genderInput !== "FEMALE" ||
            genderInput !== "M" ||
            genderInput !== "F"
        ) {
            if (genderInput !== "M" || genderInput !== "F" || genderInput !== "MALE" || genderInput !== "FEMALE") {
                alert("Your Akan name is " + maleGender);
            } else {
                alert("Your Akan name is " + femaleGender);
            }
        } else {
            alert("invalid gender use M/MALE or F/FEMALE");
        }
    } else {
        alert("wrong date put date in this format YYYY-MM-DD");
    }
}


