// Declare variables below to save the different divs of your story.

let button1= document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let restart = document.querySelector(".restart");
let yourselfOption = document.querySelector(".yourself");
let mulletOption = document.querySelector(".mullet");
let seat = document.querySelector(".seat");
let seatOptions = document.querySelector(".seat-options");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let bobbyOption = document.querySelector(".bobby");
let foosballOption = document.querySelector(".foosball");
let restart2 = document.querySelector (".restart2");
let restart3 = document.querySelector (".restart3");
let restart4 = document.querySelector (".restart4");
let restart5 = document.querySelector (".restart5");

let yesEnd = document.querySelector(".yes-end");
let noEnd = document.querySelector(".no-end");
let foosballEnd = document.querySelector(".foosball-end");
let bobbyEnd = document.querySelector(".bobby-end");
let christopher = document.querySelector(".christopher");
let chrisScreen = document.querySelector(".chris")
let pingpong = document.querySelector(".pingpong");
let pingPongScreen = document.querySelector(".pingpong-screen");
let scenario2 = document.querySelector(".option-one-screen");
let storyOpening = document.querySelector(".story-opening");
let uhoh = document.querySelector(".option-two-screen"); 

button1.addEventListener("click", function() {

    
    storyOpening.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'none';
    scenario2.style.display = 'block';
    yourselfOption.style.display = 'inline-block';
    mulletOption.style.display = 'inline-block';
    seatOptions.style.display = 'block';
    


})

button2.addEventListener("click", function() {

    storyOpening.style.display = 'none';
    button1.style.display = 'none';
    button2.style.display = 'none';
    uhoh.style.display = 'block';

})

yourselfOption.addEventListener("click", function() {

   chrisScreen.style.display= 'block';
    scenario2.style.display = 'none';
    yourselfOption.style.display= 'none';
    mulletOption.style.display = 'none';
    bobbyOption.style.display= 'inline-block';
    foosballOption.style.display = 'inline-block'
    
   
})


foosballOption.addEventListener("click", function() {

    chrisScreen.style.display= 'none';
     foosballEnd.style.display = 'block'
     bobbyOption.style.display= 'none';
     foosballOption.style.display = 'none'
     
    
 })

 bobbyOption.addEventListener("click", function() {

    chrisScreen.style.display= 'none';
     bobbyEnd.style.display = 'block'
     bobbyOption.style.display= 'none';
     foosballOption.style.display = 'none'
     
    
 })

mulletOption.addEventListener("click", function() {

    pingpong.style.display= 'block';
    scenario2.style.display = 'none';
    yourselfOption.style.display= 'none';
    mulletOption.style.display = 'none';
   
})

yes.addEventListener("click", function() {

    pingPongScreen.style.display= 'none';
    pingpong.style.display= 'none';
    yourselfOption.style.display= 'none';
    mulletOption.style.display = 'none';
    yesEnd.style.display = 'block';
   
})

no.addEventListener("click", function() {

    pingPongScreen.style.display= 'none';
    pingpong.style.display= 'none';
    yourselfOption.style.display= 'none';
    mulletOption.style.display = 'none';
    noEnd.style.display = 'block';
   
})

restart.addEventListener("click", function() {

    location.reload()

})

restart2.addEventListener("click", function() {

    location.reload()

})

restart3.addEventListener("click", function() {

    location.reload()

})

restart4.addEventListener("click", function() {

    location.reload()

})

restart5.addEventListener("click", function() {

    location.reload()

})





