var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');

var infoTxt = document.getElementById('infoP');

var card0 = [1, 'a'];
var card1 = [1, 'a'];
var card2 = [1, 'a'];
var card3 = [1, 'a'];
var card4 = [1, 'a'];

function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}

var cardKindList = ['a', 'b', 'c', 'd']

function shuffle() {
 card0[0] = GetRandomNum(1, 13);
 card0[1] = cardKindList[GetRandomNum(0, 3)];
 card1[0] = GetRandomNum(1, 13);
 card1[1] = cardKindList[GetRandomNum(0, 3)];
 card2[0] = GetRandomNum(1, 13);
 card2[1] = cardKindList[GetRandomNum(0, 3)];
 card3[0] = GetRandomNum(1, 13);
 card3[1] = cardKindList[GetRandomNum(0, 3)];
 card4[0] = GetRandomNum(1, 13);
 card4[1] = cardKindList[GetRandomNum(0, 3)];
 check();
 display();
}

function check() {
  var handsType;
  var cardNum = [];
  cardNum[0] = card0[0];
  cardNum[1] = card1[0];
  cardNum[2] = card2[0];
  cardNum[3] = card3[0];
  cardNum[4] = card4[0];
  var allNum = unique(cardNum);
  console.log(allNum);
  var numCounts = allNum.length;
  console.log(numCounts);
  console.log(infoTxt);
  console.log(infoTxt.innerHTML);
  console.log(infoTxt.innerText);
  console.log(document.getElementsByClassName('info').innerHTML);
  if (numCounts == 2) {
    infoTxt.innerText = 'full house';
  }
  else if (numCounts == 4) {
    infoTxt.innerText = 'one pair';
  }
  else if (numCounts == 3) {
    infoTxt.innerText = 'two pair';
  }
  else {
    infoTxt.innerText = 'normal hands';
  }
}

function display() {
  c0.src = 'cards_IMG/' + card0[0] + card0[1] + '.jpg';
  c1.src = 'cards_IMG/' + card1[0] + card1[1] + '.jpg';
  c2.src = 'cards_IMG/' + card2[0] + card2[1] + '.jpg';
  c3.src = 'cards_IMG/' + card3[0] + card3[1] + '.jpg';
  c4.src = 'cards_IMG/' + card4[0] + card4[1] + '.jpg';
}

function unique(arr){
  var newArr = [];
  for(var i = 0, item; item = arr[i++];){
    if(newArr.indexOf(item) === -1){
      newArr.push(item);
    }
  }
  return newArr;
};
