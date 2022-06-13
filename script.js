'use strict';




let diceelement = document.querySelector(".dice")
let btnhold = document.querySelector(".btn--hold")
let btnroll  = document.querySelector(".btn--roll")
let btnnew = document.querySelector('.btn--new')
let currentscore1 = document.getElementById("current--0")
let currnetscore2 = document.getElementById("current--1")
let player0 = document.querySelector(".player--0")
let player1 = document.querySelector(".player--1")
let playscore = document.getElementById("score--0")
let playscore1 = document.getElementById("score--1")

let switchplayer = function(){
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0.classList.toggle("player--active")
    player1.classList.toggle("player--active")
    
    currentscore = 0
    document.getElementById(`current--${activeplayer}`).textContent = 0   
}

let score,activeplayer,currentscore,playing;

const init = function(){
    document.getElementById("score--0").textContent = 0
    document.getElementById("score--1").textContent = 0
    currentscore1.textContent = 0 
    currnetscore2.textContent = 0 
    player1.classList.remove("player--winner")
    player0.classList.remove("player--winner")
    player1.classList.add("player---active")
    player0.classList.remove("player---active")
    diceelement.classList.add("hidden")
     score = [0,0]
 currentscore = 0;
 activeplayer = 0;
 playing = true
};
init();


// step - 2



// add event btn step -3

btnroll.addEventListener

("click",function(){
    if(playing){
    diceelement.classList.remove("hidden")
let dice = Math.trunc(Math.random()*6+1)
diceelement.src = `dice-${dice}.png`

if(dice!==1){
    currentscore+=dice
    document.getElementById(`current--${activeplayer}`).textContent = currentscore  
}else{
    switchplayer() 
}
}
})

btnhold.addEventListener
("click",function(){
    if(playing){
    score[activeplayer]+= currentscore
    document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer]

  
    if(score[activeplayer]>=20){
        playing = false
      document.querySelector(`.player--${activeplayer}`).classList.add  ("player--winner")
      document.querySelector(`.player--${activeplayer}`).classList.remove  ("player--active")    
      

    }else{
        switchplayer();
    }
}

})


btnnew.addEventListener
("click",function(){
init();

})







