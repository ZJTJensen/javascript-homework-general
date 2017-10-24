var amount = .01;
var num = 0;
var numi=0;
var numb=0;
for(var i=1; i<=30; i++){
    amount= amount+amount;
    if(amount >= 10000.00){
        if (num < 1){
            console.log(i + " the day he got " + amount);
            num++;
        }
    }
    if(amount >= 1000000000.00){
        if (numb < 1){
            console.log(i + " the day he got " + amount);
            numb++;
        }
    }
    if(amount >= Infinity){
        if (numi < 1){
            console.log(i + " the day he got " + amount);
            numi++;
        }
    }
}
console.log(amount);