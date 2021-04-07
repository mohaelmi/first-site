

window.onload = function () {
    var button = document.querySelector('button')
  
    button.addEventListener( 'click', () => {
        var random = Math.floor( Math.random() * 11 )
        var guessed = 0; 
        while( random != guessed ){
            guessed = prompt('guess the number that has been generated')
            if(guessed > random){
                alert("please try less than "+ guessed)
            }else if(guessed < random){
                alert("please try bigger than "+ guessed)
            }
        }
        alert("woow... you guessed "+random)
        
    } )
}

