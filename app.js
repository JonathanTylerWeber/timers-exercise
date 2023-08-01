// function countdown (num) {
//     let intervalId = setInterval(function(){
//         num--;
//         console.log(num);
//     if (num === 1){
//         setTimeout(function() {
//             console.log('DONE!')}
//             , 1000)
//         clearInterval(intervalId);
//     }    
//     },
//     1000
//     )
// }

function randomGame(){
    let counter = 0;
    let intervalId = setInterval(function(){
        let x = Math.random();
        console.log(`Number = ${x}`);
        counter++;
        console.log(`Try #${counter}`);
    if (x >= .75){
        clearInterval(intervalId);
    }
    }
    ,1000
    )
}