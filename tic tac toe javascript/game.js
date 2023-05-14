var o='url("o.jpg")';
var x='url("x.jpg")';
var flag=true;
var bflag1=true;
var bflag2=true;
var bflag3=true;
var bflag4=true;
var bflag5=true;
var bflag6=true;
var bflag7=true;
var bflag8=true;
var bflag9=true;

function b1(){
    let btn1=document.getElementById('one');

    if(bflag1){
        if(flag){
            btn1.style.backgroundImage=o;
            flag=false;
            bflag1=false;
        }
        else{
            btn1.style.backgroundImage=x;
            flag=true;
            bflag1=false;
        }
    }
}

function b2(){
    let btn2=document.getElementById('two');

    if(bflag2){
        if(flag){
            btn2.style.backgroundImage=o;
            flag=false;
            bflag2=false;
        }
        else{
            btn2.style.backgroundImage=x;
            flag=true;
            bflag2=false;
        }
    }
}

function b3(){
    let btn3=document.getElementById('three');

    if(bflag3){
        if(flag){
            btn3.style.backgroundImage=o;
            flag=false;
            bflag3=false;
        }
        else{
            btn3.style.backgroundImage=x;
            flag=true;
            bflag3=false;
        }
    }
}

function b4(){
    let btn4=document.getElementById('four');

    if(bflag4){
        if(flag){
            btn4.style.backgroundImage=o;
            flag=false;
            bflag4=false;
        }
        else{
            btn4.style.backgroundImage=x;
            flag=true;
            bflag4=false;
        }
    }
}

function b5(){
    let btn5=document.getElementById('five');

    if(bflag5){
        if(flag){
            btn5.style.backgroundImage=o;
            flag=false;
            bflag5=false;
        }
        else{
            btn5.style.backgroundImage=x;
            flag=true;
            bflag5=false;
        }
    }
}

function b6(){
    let btn6=document.getElementById('six');

    if(bflag6){
        if(flag){
            btn6.style.backgroundImage=o;
            flag=false;
            bflag6=false;
        }
        else{
            btn6.style.backgroundImage=x;
            flag=true;
            bflag6=false;
        }
    }
}

function b7(){
    let btn7=document.getElementById('seven');

    if(bflag7){
        if(flag){
            btn7.style.backgroundImage=o;
            flag=false;
            bflag7=false;
        }
        else{
            btn7.style.backgroundImage=x;
            flag=true;
            bflag7=false;
        }
    }
}

function b8(){
    let btn8=document.getElementById('eight');

    if(bflag8){
        if(flag){
            btn8.style.backgroundImage=o;
            flag=false;
            bflag8=false;
        }
        else{
            btn8.style.backgroundImage=x;
            flag=true;
            bflag8=false;
        }
    }
}

function b9(){
    let btn9=document.getElementById('nine');

    if(bflag9){
        if(flag){
            btn9.style.backgroundImage=o;
            flag=false;
            bflag9=false;
        }
        else{
            btn9.style.backgroundImage=x;
            flag=true;
            bflag9=false;
        }
    }
}

function reset(){
    let btn1=document.getElementById('one');
    let btn2=document.getElementById('two');
    let btn3=document.getElementById('three');
    let btn4=document.getElementById('four');
    let btn5=document.getElementById('five');
    let btn6=document.getElementById('six');
    let btn7=document.getElementById('seven');
    let btn8=document.getElementById('eight');
    let btn9=document.getElementById('nine');

    btn1.style.backgroundImage='url("blank.jpg")';
    btn2.style.backgroundImage='url("blank.jpg")';
    btn3.style.backgroundImage='url("blank.jpg")';
    btn4.style.backgroundImage='url("blank.jpg")';
    btn5.style.backgroundImage='url("blank.jpg")';
    btn6.style.backgroundImage='url("blank.jpg")';
    btn7.style.backgroundImage='url("blank.jpg")';
    btn8.style.backgroundImage='url("blank.jpg")';
    btn9.style.backgroundImage='url("blank.jpg")';

    flag=true;
    bflag1=true;
    bflag2=true;
    bflag3=true;
    bflag4=true;
    bflag5=true;
    bflag6=true;
    bflag7=true;
    bflag8=true;
    bflag9=true;
}

function f1(){
    let box=document.getElementById('winbox');
    box.style.visibility='hidden';
    reset();
}

function win(){
    let btn1=document.getElementById('one');
    let btn2=document.getElementById('two');
    let btn3=document.getElementById('three');
    let btn4=document.getElementById('four');
    let btn5=document.getElementById('five');
    let btn6=document.getElementById('six');
    let btn7=document.getElementById('seven');
    let btn8=document.getElementById('eight');
    let btn9=document.getElementById('nine');

    let winbox=document.getElementById('winbox');
    let winner=document.getElementById('winname');

    let img1=btn1.style.backgroundImage;
    let img2=btn2.style.backgroundImage;
    let img3=btn3.style.backgroundImage;
    let img4=btn4.style.backgroundImage;
    let img5=btn5.style.backgroundImage;
    let img6=btn6.style.backgroundImage;
    let img7=btn7.style.backgroundImage;
    let img8=btn8.style.backgroundImage;
    let img9=btn9.style.backgroundImage;

    //below section is for O winner
    if(img1==='url("o.jpg")' && img2==='url("o.jpg")' && img3==='url("o.jpg")'){
        winner.innerText='Player O is Winner';
        winbox.style.visibility='visible';
    }
    if(img4==='url("o.jpg")' && img5==='url("o.jpg")' && img6==='url("o.jpg")'){
        winner.innerText='Player O is Winner';
        winbox.style.visibility='visible';
    }
    if(img7==='url("o.jpg")' && img8==='url("o.jpg")' && img9==='url("o.jpg")'){
        winner.innerText='Player O is Winner';
        winbox.style.visibility='visible';
    }

    if(img1==='url("o.jpg")' && img4==='url("o.jpg")' && img7==='url("o.jpg")'){
        winner.innerText='Player O is Winner';
        winbox.style.visibility='visible';
    }
    if(img2==='url("o.jpg")' && img5==='url("o.jpg")' && img8==='url("o.jpg")'){
        winner.innerText='Player O is Winner';
        winbox.style.visibility='visible';
    }
    if(img3==='url("o.jpg")' && img6==='url("o.jpg")' && img9==='url("o.jpg")'){
        winner.innerText='Player O is Winner';
        winbox.style.visibility='visible';
    }

    if(img1==='url("o.jpg")' && img5==='url("o.jpg")' && img9==='url("o.jpg")'){
        winner.innerText='Player O is Winner';
        winbox.style.visibility='visible';
    }
    if(img3==='url("o.jpg")' && img5==='url("o.jpg")' && img7==='url("o.jpg")'){
        winner.innerText='Player O is Winner';
        winbox.style.visibility='visible';
    }

    //below section is for X winner
    if(img1==='url("x.jpg")' && img2==='url("x.jpg")' && img3==='url("x.jpg")'){
        winner.innerText='Player X is Winner';
        winbox.style.visibility='visible';
    }
    if(img4==='url("x.jpg")' && img5==='url("x.jpg")' && img6==='url("x.jpg")'){
        winner.innerText='Player X is Winner';
        winbox.style.visibility='visible';
    }
    if(img7==='url("x.jpg")' && img8==='url("x.jpg")' && img9==='url("x.jpg")'){
        winner.innerText='Player X is Winner';
        winbox.style.visibility='visible';
    }

    if(img1==='url("x.jpg")' && img4==='url("x.jpg")' && img7==='url("x.jpg")'){
        winner.innerText='Player X is Winner';
        winbox.style.visibility='visible';
    }
    if(img2==='url("x.jpg")' && img5==='url("x.jpg")' && img8==='url("x.jpg")'){
        winner.innerText='Player X is Winner';
        winbox.style.visibility='visible';
    }
    if(img3==='url("x.jpg")' && img6==='url("x.jpg")' && img9==='url("x.jpg")'){
        winner.innerText='Player X is Winner';
        winbox.style.visibility='visible';
    }

    if(img1==='url("x.jpg")' && img5==='url("x.jpg")' && img9==='url("x.jpg")'){
        winner.innerText='Player X is Winner';
        winbox.style.visibility='visible';
    }
    if(img3==='url("x.jpg")' && img5==='url("x.jpg")' && img7==='url("x.jpg")'){
        winner.innerText='Player X is Winner';
        winbox.style.visibility='visible';
    }
}
setInterval(win,50);