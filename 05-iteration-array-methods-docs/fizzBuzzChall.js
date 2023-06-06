for(let i = 1; i < 101; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        console.log("FIZZBUZZ");
        continue;
    }
    else if((i % 5 == 0)){
        console.log("BUZZ");
        continue;
    }
    else if((i % 3 == 0)){
        console.log("FIZZ");
        continue;
    }
    else{
        console.log(i);
    }
}