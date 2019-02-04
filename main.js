var date=new Date("Feb 25,2019 00:00:00").getTime();

var countDown=setInterval(function(){
    var now=new Date().getTime();
    var distance=date-now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("date").innerHTML=days+"d "+hours+"h "+minutes+"m "+seconds+"s";
})
