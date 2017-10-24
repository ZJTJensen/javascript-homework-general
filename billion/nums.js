function arr(){
    var newarr = [];
    for(var i = 0; i < array.length; i++ ){
        if(typeof array[i] === "number"){
            newarr.push([i]);
        }
    }
    return newarr;
}

var array =[1, "john", 2, 3];
arr(array);

function newarr(){
    for(var i = 0; i < newwarray.length; i++ ){
        if(typeof newwarray[i] === "string"){
            newwarray.splice([i],1);
        }
    }
    return newwarray;
}
var newwarray =[1, "john", 2, 3];
newarr(newwarray);