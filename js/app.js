
function identifyById() {
    console.log(document.getElementById('para1'));
}

function identifyByClass() {
    console.log(document.getElementsByClassName('class1'));
}

function identifyByTag() {
    console.log(document.getElementsByTagName('p'));

}

function changeBackground() {
    document.getElementById('block1').style.backgroundColor="yellow";
}

function increaseFont() {  
  var x= document.getElementById('block2');
   x.style.fontSize="50px";
}

function changeFontColor() {
    document.getElementById('block3').style.color="green";
    

}

function revertColor() {
    document.getElementById('block3').style.color="black";
}

function hide() {
    document.getElementById('block4').style.display="none";
}


function changeBackColor() {
    document.getElementsByClassName('box1').style.backgroundColor="green";
   
}


function addAdjacent() {
}

function removePara() {

}

function animatePara() {

}

