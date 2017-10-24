function quarters(num, done){

    while(num> done){
    var ran= ((Math.random()* 100) + 1);
    if((Math.floor(ran))>= 80){
            for (var tries=0; tries < 1;){
            var coins= ((Math.random() * 100) + 1);
            var coinswon=((coins * 100) + 1);
            Math.floor(coinswon);
            if (coinswon>= 50){
                tries++;
                num=1+coins;
            }
        }
    
    }
    num--;
    }
    if(num <= done){
        var empty="all fineshed the coin slots misses jackson?";
        return empty;
    }
    
}

quarters(10, 8);