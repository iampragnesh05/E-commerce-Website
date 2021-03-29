// Count Down 
var outputDays = document.querySelector('.days');
var outputHours = document.querySelector('.hours');
var outputMinutes = document.querySelector('.minutes');
var outputSeconds = document.querySelector('.seconds'); 

// Set the date we're counting down to
var countDownDate = new Date("May 25, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function(){
     // Get today's date and time
     var now = new Date().getTime();
     // Find the distance between now and the count down date
     var distance = countDownDate - now;
     // Time calculations for days, hours, minutes and seconds
      days = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element 
        outputDays.innerHTML = days;
        outputHours.innerHTML = hours;
        outputMinutes.innerHTML = minutes;
        outputSeconds.innerHTML = seconds;
});