function countdown (num) {
    let intervalId = setInterval(function(){
        num--;
        console.log(num);
    if (num === 1){
        setTimeout(function() {
            console.log('DONE!')}
            , 1000)
        clearInterval(intervalId);
    }    
    },
    1000
    )
}