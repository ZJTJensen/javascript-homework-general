var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";


if(PERIOD === "AM")
{
    var time= "in the morning";
}
else{
    var time= "in the evening";
}

if (MINUTE > 30){
    var clock = ("almost " + (HOUR+1));
}
else{
    var clock =("just after " + HOUR);
}

console.log("It's "+ clock + " in the " + time);