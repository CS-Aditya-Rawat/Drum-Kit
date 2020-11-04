var all_buttons = document.querySelectorAll(".set button");
for(let i =0 ; i<all_buttons.length; i++){
    all_buttons[i].addEventListener("click", function() {                //click event
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        addAnimation(buttonInnerHtml);
        }
    );

}

//Keypress event

document.addEventListener("keypress" , function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

var makeSound = (key) => {
    switch(key) {
        case"w":
        var tom1 = new Audio("./sounds/tom-1.mp3")
        tom1.play();
        break;

        case"a":
        var tom2 = new Audio("./sounds/tom-2.mp3")
        tom2.play();
        break;

        case"s":
        var tom3 = new Audio("./sounds/tom-3.mp3")
        tom3.play();
        break;

        case"d":
        var tom4 = new Audio("./sounds/tom-4.mp3")
        tom4.play();
        break;

        case"j":
        var snare = new Audio("./sounds/snare.mp3")
        snare.play();
        break;

        case"k":
        var crash = new Audio("./sounds/crash.mp3")
        crash.play();
        break;

        case"l":
        var kickBass = new Audio("./sounds/kick-bass.mp3")
        kickBass.play();
        break;

        defaut: console.log(key);
    }
}

function addAnimation(curerntKey){
    var activeButton = document.querySelector("."+curerntKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}