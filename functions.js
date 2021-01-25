//pick random number from 1-100
function randomWin(){
  var randomNumber = Math.floor(Math.random() * (100 - 1) ) + 1;
  return randomNumber;
}
//pick crashedNumber
function pickCrash(){
  if (randomWin() <= 20) {
    var crashNumber = Math.round((Math.random() * 1 + 1) * 100) / 100;
  } else if (randomWin() > 20|| randomWin() <= 80) {
    var crashNumber = Math.round((Math.random() * 10 + 2) * 100) / 100;
  } else if (randomWin() > 80|| randomWin() <= 90) {
    var crashNumber = Math.round((Math.random() * 20 + 11) * 100) / 100;
  } else{
    var crashNumber = Math.round((Math.random() * 40 + 21) * 100) / 100;
  }
  return crashNumber;
}

//variables
var timeleft = 7;
let i = 1;
var historyArray = [1.22,7.54,4.64,3.68,8.97,5.43,1.21,3.45,2.54,8.75];
let crashed = pickCrash();
var j = 0;
var skaitlis=1;
var width = 0;
var krasa= 0;
var nauda = 10.00;
var irUzbetots = 0;
var be = 0;
var speleOn = 0;
var piedalas = 0;
//function which makes bet
function bets(){
  if (irUzbetots == 0 && speleOn == 0 && document.getElementById("uzbetots").value != 0 ) {
    var uzbetots = document.getElementById("uzbetots").value;
    console.log(nauda);
    console.log(uzbetots);
    if (uzbetots<= nauda) {
      be = parseFloat(uzbetots);
      nauda = nauda - uzbetots;
      var naudaparse = parseFloat(nauda.toFixed(2));
      document.getElementById("nauda").innerHTML = naudaparse;
      document.getElementById("error").style.visibility = "visible";
      document.getElementById("error").style.color = "#00A170";
      document.getElementById("error").innerHTML = "Bet Placed";
      piedalas = 1;
      irUzbetots = 1;
    }else if (uzbetots> nauda) {
      document.getElementById("error").style.visibility = "visible";
      document.getElementById("error").style.color = "#FF6F61";
      document.getElementById("error").innerHTML = "Not enough money";
    }
  } else if (speleOn == 1) {
    document.getElementById("error").style.visibility = "visible";
    document.getElementById("error").style.color = "#FF6F61";
    document.getElementById("error").innerHTML = "Game is ongoing";
  } else if (irUzbetots == 1) {
    document.getElementById("error").style.visibility = "visible";
    document.getElementById("error").style.color = "#FF6F61";
    document.getElementById("error").innerHTML = "Bet already placed";
  } else if (document.getElementById("uzbetots").value == 0) {
    document.getElementById("error").style.visibility = "visible";
    document.getElementById("error").style.color = "#FF6F61";
    document.getElementById("error").innerHTML = "Make a bet";
  }

}
//function which makes cashout
function cashout(){
  if (piedalas == 1 && speleOn == 1) {
    nauda = nauda + (be*parseFloat(i.toFixed(2)));
    var naudaparse = parseFloat(nauda.toFixed(2));
    nauda = parseFloat(naudaparse);
    document.getElementById("error").style.visibility = "visible";
    document.getElementById("nauda").innerHTML = naudaparse;
    document.getElementById("error").style.color = "#00A170";
    document.getElementById("error").innerHTML = "You Won : " + (be*parseFloat(i.toFixed(2))).toFixed(2) + "$";
    piedalas = 0;
    document.getElementById("bett").style.display = 'inline';
    document.getElementById("cashout").style.display = 'none';
  }
}
function validate(evt) {
  var theEvent = evt || window.event;
  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}
//function which displays previous crashes
function bijis(){
historyArray.pop();
historyArray.unshift(crashed);

for (var i = 0; i < historyArray.length; i++) {
  if (historyArray[i] <= 2) {
    document.getElementById("wrapper-"+i).innerHTML = historyArray[i] + "x";
  document.getElementById("wrapper-"+i).style.border= '3px solid #FF6F61';
  document.getElementById("wrapper-"+i).style.color= '#FF6F61';
}else if (historyArray[i]> 2&& historyArray[i]<=5) {
  document.getElementById("wrapper-"+i).innerHTML = historyArray[i]+ "x";
document.getElementById("wrapper-"+i).style.border = ' 3px solid #00A170';
document.getElementById("wrapper-"+i).style.color= '#00A170';
  } else if (historyArray[i]>5 && historyArray[i]<=20) {
    document.getElementById("wrapper-"+i).innerHTML = historyArray[i]+ "x";
  document.getElementById("wrapper-"+i).style.border = ' 3px solid #4db8ff';
document.getElementById("wrapper-"+i).style.color= '#4db8ff';
  } else if (historyArray[i]>20 && historyArray[i]<=100 ) {
    document.getElementById("wrapper-"+i).innerHTML = historyArray[i]+ "x";
  document.getElementById("wrapper-"+i).style.border = ' 3px solid #b39800';
document.getElementById("wrapper-"+i).style.color= '#FFD700';
  }

}

}
//function which updates crash
function update(){
  if (piedalas == 1) {
    document.getElementById("bett").style.display = 'none';
    document.getElementById("cashout").style.display = 'inline';
    document.getElementById("error").innerHTML = "game";
    document.getElementById("error").style.visibility = "hidden";

    var autocashout = 0;
  }
speleOn = 1;

document.getElementById("crash-number").innerHTML = "1.00 X";

const myVar = setTimeout(function myIdentifier() {
var crashed2decimals = (Math.random() * 0.02) + 0.01;
var x = parseFloat(crashed2decimals.toFixed(2));
var crashed2decimalsI = i.toFixed(2);

if (i+x <= crashed) {
  i=i+x;
} else{
  i = crashed
}

if (document.getElementById("autocashout").value != 0) {
    if (i >= document.getElementById("autocashout").value && piedalas == 1 ) {
      nauda = nauda + (be*(document.getElementById("autocashout").value));
      var naudaparse1 = parseFloat(nauda.toFixed(2));
      nauda = parseFloat(naudaparse1);
      document.getElementById("error").style.visibility = "visible";
      document.getElementById("error").style.color = "#00A170";
      document.getElementById("nauda").innerHTML = naudaparse1;
      document.getElementById("error").innerHTML = "You won : " + (be*(document.getElementById("autocashout").value))+ "$";
      piedalas = 0;
      document.getElementById("bett").style.display = 'inline';
      document.getElementById("cashout").style.display = 'none';
    }
}

if (width<=98) {
if (crashed2decimalsI <= 2) {
width= width+(x*100);
document.getElementById("myBar").style.background = '#FF6F61';
document.getElementById("dot").style.border = '15px solid #FF6F61';
document.getElementById("dot").style.color= '#fff';
}else if (krasa==1&& crashed2decimalsI<=5) {
  width= width+((x*100)/2.99);
  document.getElementById("myBar").style.background = '#00A170';
  document.getElementById("dot").style.border = '15px solid #00A170';
  document.getElementById("dot").style.color= '#fff';
} else if (krasa==2 && crashed2decimalsI<=20) {
  width= width+((x*100)/14.99);
  document.getElementById("myBar").style.background = '#4db8ff';
  document.getElementById("dot").style.border = '15px solid #4db8ff';
  document.getElementById("dot").style.color= '#fff';
} else if (krasa==3 && crashed2decimalsI<=100 ) {
  width= width+((x*100)/79.99);
  document.getElementById("myBar").style.background = '#b39800';
document.getElementById("dot").style.border = '15px solid #b39800';
document.getElementById("dot").style.color= '#fff';
}
} else {
    width = 0;
    krasa= krasa +1;
}
document.getElementById("myBar").style.width = width + "%";
document.getElementById("crash-number").innerHTML = crashed2decimalsI + " X";

if (i==crashed) {
    console.log(crashed);
    document.getElementById("crash-number").innerHTML = crashed+ " X";
    document.getElementById("bett").style.display = 'inline';
    document.getElementById("cashout").style.display = 'none';
    document.getElementById("error").innerHTML = "time";
    document.getElementById("error").style.visibility = "hidden";
    clearTimeout(myVar);
    bijis();
    crashed = pickCrash();
    i = 1;
    width = 1;
    krasa = 0;
    document.getElementById("myBar").style.width = "100%";
    setTimeout(function(){
      speleOn = 0;
      piedalas = 0;
      irUzbetots = 0;
      document.getElementById("error").innerHTML = "time";
      document.getElementById("error").style.visibility = "hidden";
      document.getElementById("bett").style.display = 'inline';
      document.getElementById("cashout").style.display = 'none';
    var downloadTimer = setInterval(function(){
      document.getElementById("bett").style.display = 'inline';
      document.getElementById("cashout").style.display = 'none';
      document.getElementById("myBar").style.width = "0%";
      document.getElementById("dot").style.border = '15px solid #6B5876';
  if(timeleft <= 0.1){
    clearInterval(downloadTimer);
    timeleft = 8;
    update();
  } else {
    timeleft -= 0.1;
    var roundedtime = timeleft.toFixed(1)
    console.log(roundedtime);
    document.getElementById("crash-number").innerHTML = roundedtime+"s";
  }
}, 100); }, 2000);
} else {
    setTimeout(myIdentifier, 1000/(i*3)); //delay is a value in ms.
}
}, 1000);
}

//function which loads on page load
window.onload = function() {
update();
document.getElementById("nauda").innerHTML = nauda;
for (var i = 0; i < historyArray.length; i++) {
  if (historyArray[i] <= 2) {
    document.getElementById("wrapper-"+i).innerHTML = historyArray[i] + "x";
  document.getElementById("wrapper-"+i).style.border= '3px solid #FF6F61';
  document.getElementById("wrapper-"+i).style.color= '#FF6F61';
}else if (historyArray[i]> 2&& historyArray[i]<=5) {
  document.getElementById("wrapper-"+i).innerHTML = historyArray[i]+ "x";
document.getElementById("wrapper-"+i).style.border = ' 3px solid #00A170';
document.getElementById("wrapper-"+i).style.color= '#00A170';
  } else if (historyArray[i]>5 && historyArray[i]<=20) {
    document.getElementById("wrapper-"+i).innerHTML = historyArray[i]+ "x";
  document.getElementById("wrapper-"+i).style.border = ' 3px solid #4db8ff';
document.getElementById("wrapper-"+i).style.color= '#4db8ff';
  } else if (historyArray[i]>20 && historyArray[i]<=100 ) {
    document.getElementById("wrapper-"+i).innerHTML = historyArray[i]+ "x";
  document.getElementById("wrapper-"+i).style.border = ' 3px solid #b39800';
document.getElementById("wrapper-"+i).style.color= '#FFD700';
  }

}
};
