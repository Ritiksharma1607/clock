console.log("welcome to clock js .. . . . ");

function clockify() {

    let currTime = new Date();
    let currhour = currTime.getHours();
    let currMin = currTime.getMinutes();
    let currSec = currTime.getSeconds();

    let timeOfDay = (currhour < 12) ? " AM" : " PM";
    currhour = (currhour > 12) ? currhour - 12 : currhour;
    currhour = (currhour == 0) ? 12 : currhour;

    currhour = ((currhour < 10) ? "0" : "") + currhour;
    currMin = ((currMin < 10) ? "0" : "") + currMin;
    currSec = ((currSec < 10) ? "0" : "") + currSec;


    let currTimeString = currhour + " : " + currMin + " : " + currSec + "   " + timeOfDay;

    document.getElementById("clock").innerHTML = currTimeString;




}