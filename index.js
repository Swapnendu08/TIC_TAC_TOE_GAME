console.log("Welcome to Tic-Tac-toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("click.wav");
let gameover = new Audio("gameover.wav");
let turn = "X"
let isgameover=false;
const changeTurn = () => {
    return turn === "X"?"0" : "X";
}

//logic for wining
const checkWin = () => {
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,0,5,0,0,10,0],
        [3,4,5,0,15,0,0,30,0],
        [6,7,8,0,25,0,0,50,0],
        [0,3,6,-10,15,90,-20,30,90],
        [1,4,7,0,15,90,0,30,90],
        [2,5,8,10,15,90,20,30,90],
        [0,4,8,0,15,45,0,30,45],
        [2,4,6,0,15,135,0,30,135]
    ]
    console.log(wins[0]);
    wins.forEach(e =>{
        if ((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!== "" )) {
            document.querySelector(".info").innerText=boxtext[e[0]].innerText+ " WON"
            isgameover=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            gameover.play();
            //conrolling the css media queries of animation of width
            function myFunc(y) {
                if (y.matches) { 
                    document.querySelector(".line").style.transform =`translate(${e[6]}vw,${e[7]}vw) rotate(${e[8]}deg)`// If media query matches
                } else {
                     document.querySelector(".line").style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                }

            }
              var y = window.matchMedia("(max-width: 800px)");
              myFunc(y) // Call listener function at run time
              y.addListener(myFunc) // Attach listener function on state changes
           


            // Controlling the css media queries of width
            function myFunction(x) {
                if (x.matches) { 
                    document.querySelector(".line").style.width ="60vw";// If media query matches
                } else {
                    document.querySelector(".line").style.width ="30vw";
                }

            }
              var x = window.matchMedia("(max-width: 800px)")
              myFunction(x) // Call listener function at run time
              x.addListener(myFunction) // Attach listener function on state changes
            
        }
    })
}

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            music.play();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
           
        }
    })
})

//Logic for reset button
reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width ="0vw";
    music.pause()
})