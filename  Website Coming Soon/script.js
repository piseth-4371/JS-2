var countDownDaate = new Date("Oct 16, 2026 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDaate - now;

    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minuts = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/1000);

    // var d = document.getElementById('days');
    // d.innerHTML = days;
    document.getElementById('d').innerHTML = days;
    document.getElementById('h').innerHTML = hours;
    document.getElementById('m').innerHTML = minuts;
    document.getElementById('s').innerHTML = seconds;

    if(distance < 0){
        clearInterval(x);
        document.getElementById('days').innerHTML ="00";
        document.getElementById('hours').innerHTML ="00";
        document.getElementById('minuts').innerHTML = "00";
        document.getElementById('seconds').innerHTML = "00";
    }

}, 1000);