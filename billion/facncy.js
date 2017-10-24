function array(input, reversed){
    var names =[ "James", "Jill", "Jane", "Jack" ];
    if(reversed===true){
        for(var i = 0; i < names.length; i++){
            console.log(names[i] + " " +input +" "+ i);
        }
    }
    else{ 
        for(var i = 0; i < names.length; i++){
            console.log(i +" "+ input+" " + names[i]);
        }
    }
}

array("-->", true);

/* I am very confused by the wording of this question, it may be just 
my misundersanding but i do not think this question is feasable to complete without
a input from the user as well as without a .length function which we do not learn
until Arrays[1] {which i have already taken a look at} but i did get it to output the correct code
*/