
var showCurrentTime = function(){
    var time = document.getElementById("clock");

    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridan = "AM"

    if(hours >= 12){
        hours = hours - 12;
        meridan = "PM"
    }
    if(hours < 10){
        hours = ('0' + hours);
    }
    if(minutes < 10){
        minutes = ('0' + minutes);
    }
    if(seconds < 10){
        seconds = ('0' + seconds);
    }

    time.innerHTML = (hours + ":" + minutes + ":" + seconds + " " + meridan);
}

var timeChange = document.querySelectorAll("input");
    for(var i = 0; i < timeChange.length; i++){
        timeChange[i].addEventListener("mouseout", updateTime);
    }
function updateTime(){
    this.value = this.value;
}

var timer = -1;
var setTimer = function(){
    timer = 5;
    updateClock();
}

var updateClock = function(){
    var greetings = document.getElementById("greetings");
    var image = document.getElementById("cat-img");
    var currHour = new Date().getHours();

    if(currHour >= 18){
        greetings.innerHTML = "Good Evening! The Time is"
    }
    else if(currHour > 12){
        greetings.innerHTML = "Good Afternoon! The Time is"
    }
    else if(currHour > 0){
        greetings.innerHTML = "Good Morning! The Time is"
    }
    
    var picChangeTime = document.querySelectorAll("input");
    for(var i = 0; i < picChangeTime.length; i++){
        var time = parseFloat(picChangeTime[i].value);
        var partyButton = document.getElementById('partyTime');
        partyButton.innerText = "Party Time!";
        if(timer >= 0){
            image.src ="PartyCats.jpeg";
            greetings.innerHTML = "It's Party Time!"
            partyButton.innerText = "Oooooh Yeah!!"
            timer--;
            console.log(timer);
            break;
        }
        else if(currHour === time){
            if(picChangeTime[i].id == "wakeupTime"){
                image.src = "wakeup.jpg";
            break;
            }
            else if(picChangeTime[i].id == "lunchTime"){
                image.src = "lunch.jpg";
            break;  
            }
            else{
                image.src = "nap.webp";
                break;   
            }
        }
        else{
            image.src = "whatTimeIsIt.jpg";
        }
    }
    showCurrentTime();
}
setInterval(updateClock, 1000);

