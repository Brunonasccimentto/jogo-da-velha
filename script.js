
let winner = document.getElementById("winner")

let gameOver = false
let x = true

let p1 = 1
let p2 = 2

let a1 = ""
let a2 = ""
let a3 = ""
let a4 = ""
let a5 = ""
let a6 = ""
let a7 = ""
let a8 = ""
let a9 = ""

function set1(){

    if(gameOver == true){
        return;
    }
    
    if( a1 == "")

    if(x == true){
    document.getElementById("a1").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a1 = p1
    }
    else{
        document.getElementById("a1").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a1 = p2
    } 
    winCondition()
   
} 


function set2(){
    
    if(gameOver == true){
        return;
    }
    
    if( a2 == "")

    if(x == true){
    document.getElementById("a2").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a2 = p1
    }
    else{
        document.getElementById("a2").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a2 = p2
    }  
    winCondition()
   
}

function set3(){

    if(gameOver == true){
        return;
    }
    
    if( a3 == "")
    
    if(x == true){
    document.getElementById("a3").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a3 = p1
    }
    else{
        document.getElementById("a3").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a3 = p2
    }
    winCondition()
  
}

function set4(){

    if(gameOver == true){
        return;
    }
    
    if( a4 == "")
    
    if(x == true){
    document.getElementById("a4").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a4 = p1
    }
    else{
        document.getElementById("a4").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a4 = p2
    } 
    winCondition()
   
}

function set5(){

    if(gameOver == true){
        return;
    }
    
    if( a5 == "")
    
    if(x == true){
    document.getElementById("a5").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a5 = p1
    }
    else{
        document.getElementById("a5").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a5 = p2
    }
    winCondition()
  
}

function set6(){

    if(gameOver == true){
        return;
    }
    
    if( a6 == "")
    
    if(x == true){
    document.getElementById("a6").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a6 = p1
    }
    else{
        document.getElementById("a6").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a6 = p2
    } 
    winCondition()
    
}

function set7(){

    if(gameOver == true){
        return;
    }
    
    if( a7 == "")
    
    if(x == true){
    document.getElementById("a7").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a7 = p1
    }
    else{
        document.getElementById("a7").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a7 = p2
    } 
    winCondition()
    
}

function set8(){

    if(gameOver == true){
        return;
    }
    
    if( a8 == "")
    
    if(x == true){
    document.getElementById("a8").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a8 = p1
    }
    else{
        document.getElementById("a8").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a8 = p2
    }
    winCondition()
    
}

function set9(){

    if(gameOver == true){
        return;
    }
    
    if( a9 == "")
    
    if(x == true){
    document.getElementById("a9").innerHTML = "<img src= './assets/botao-x.png' width= '200px'>"
    x = false
    a9 = p1
    }
    else{
        document.getElementById("a9").innerHTML = "<img src= './assets/circulo.png' width= '200px'>"
        x = true
        a9 = p2
    }
    winCondition()
    
}

function winCondition(){

    if(a1 == p1 && a2 == p1 && a3 == p1 || a1 == p2 && a2 == p2 && a3 == p2){
        win()
    }
    else if(a4 == p1 && a5 == p1 && a6 == p1 || a4 == p2 && a5 == p2 && a6 == p2){
        win()
    }
    else if(a7 == p1 && a8 == p1 && a9 == p1 || a7 == p2 && a8 == p2 && a9 == p2){
        win()
    }
    else if(a1 == p1 && a4 == p1 && a7 == p1 || a1 == p2 && a4 == p2 && a7 == p2){
        win()
    }
    else if(a2 == p1 && a5 == p1 && a8 == p1 || a2 == p2 && a5 == p2 && a8 == p2){
        win()
    }
    else if(a3 == p1 && a6 == p1 && a9 == p1 || a3 == p2 && a6 == p2 && a9 == p2){
        win()
    }
    else if(a1 == p1 && a5 == p1 && a9 == p1 || a1 == p2 && a5 == p2 && a9 == p2){
        win()
    }
    else if(a3 == p1 && a5 == p1 && a7 == p1 || a3 == p2 && a5 == p2 && a7 == p2){
        win()
    }  
}

function win(){

    gameOver = true

    if(x == false){
        winner.innerText = "player 1 win"
    } else{
        winner.innerText = "player 2 win"
    }
}

function reset(){

    document.getElementById("a1").innerHTML = ""
    document.getElementById("a2").innerHTML = ""
    document.getElementById("a3").innerHTML = ""
    document.getElementById("a4").innerHTML = ""
    document.getElementById("a5").innerHTML = ""
    document.getElementById("a6").innerHTML = ""
    document.getElementById("a7").innerHTML = ""
    document.getElementById("a8").innerHTML = ""
    document.getElementById("a9").innerHTML = ""

    winner.innerText = ""
    gameOver = false

    a1 = ""
    a2 = ""
    a3 = ""
    a4 = ""
    a5 = ""
    a6 = ""
    a7 = ""
    a8 = ""
    a9 = ""
}