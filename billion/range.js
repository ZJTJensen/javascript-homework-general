function printRange(start, end, skip){
    if(skip===undefined){
        skip=1;
    }
    if(end===undefined){
        temp=start;
        start=0;
        end=temp;
        
    }
    for(var i=start; i<end;i+=skip){
            console.log(i);
    }
}
printRange(1, 20, 2)