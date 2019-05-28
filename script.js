var scores, roundScore, roundScoreCube2, roundScoreCube3, activePlayer, cube, currentClass, currentClassCube2, currentClassCube3;
var khmerWord = ['ខា្ល', 'ក្ដាម', 'ត្រី', 'ឃ្លោក', 'បង្កង', 'មាន់']
var result = []
var betType = []
var amountMoney = 10000
var amountMoneyBet = 0

var tigerButtonClick = 0
var crabButtonClick = 0
var fishButtonClick = 0
var gourdButtonClick = 0
var lobsterButtonClick = 0
var roasterButtonClick = 0

const eachPay = 1000


init();

// change side 
function changeSide() {
  var dice = (Math.floor(Math.random() * 6) + 1);
  var showClass = 'show-' + dice;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
  function updateScore() {
    document.querySelector('.player-controls').classList.remove('disable-controls');
    document.querySelector('.fa-dice').classList.remove('grey');
    roundScore = khmerWord[dice - 1];
    result.push(roundScore)
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }
  setTimeout(updateScore, 2000);
}

function changeSide2() {
  var dice = (Math.floor(Math.random() * 6) + 1);
  var showClass = 'show-' + dice;
  if (currentClassCube2) {
    cube2.classList.remove(currentClassCube2);
  }
  cube2.classList.add(showClass);
  currentClassCube2 = showClass;
  function updateScore() {
    document.querySelector('.player-controls').classList.remove('disable-controls');
    document.querySelector('.fa-dice').classList.remove('grey');
    roundScoreCube2 = khmerWord[dice - 1];
    result.push(roundScoreCube2)
    document.querySelector('#current-' + activePlayer).textContent += " " + roundScoreCube2;
  }
  setTimeout(updateScore, 2000);
}

function changeSide3() {
  var dice = (Math.floor(Math.random() * 6) + 1)
  var showClass = 'show-' + dice;
  if (currentClassCube3) {
    cube3.classList.remove(currentClassCube3);
  }
  cube3.classList.add(showClass);
  currentClassCube3 = showClass;
  function updateScore() {
    document.querySelector('.player-controls').classList.remove('disable-controls');
    document.querySelector('.fa-dice').classList.remove('grey');
    roundScoreCube3 = khmerWord[dice - 1];
    result.push(roundScoreCube3)

    document.querySelector('#current-' + activePlayer).textContent += " " + roundScoreCube3;
    calculateResult()
  }
  setTimeout(updateScore, 2000);
}
// change side 

document.querySelector('.btn-roll').addEventListener('click', function () {
  cube.classList.remove('animation-1');
  cube2.classList.remove('animation-1');
  cube3.classList.remove('animation-1');
  var counter = 0;
  var loopCount = 30;
  function spinCube() {
    if (++counter >= loopCount) {
      clearInterval(interval);
      cube.classList.remove('animation-2');
      cube2.classList.remove('animation-2');
      cube3.classList.remove('animation-2');
    } else {
      cube.classList.add('animation-2');
      cube2.classList.add('animation-2');
      cube3.classList.add('animation-2');
      document.querySelector('.player-controls').classList.add('disable-controls');
      document.querySelector('.fa-dice').classList.add('grey');
      document.querySelector('.fa-hand-holding').classList.add('grey');
    }
  }
  var interval = setInterval(spinCube, 60);
  changeSide();
  changeSide2();
  changeSide3();
});


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  cube = document.querySelector('#cube1');
  cube2 = document.querySelector('#cube2');
  cube3 = document.querySelector('#cube3');

  currentClass = '';
  currentClassCube2 = '';
  currentClassCube3 = '';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('name-0').textContent = 'Player1';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-controls').classList.remove('player-controls-right');
  document.querySelector('.fa-dice').classList.remove('fa-flip-horizontal');
  document.querySelector('.fa-hand-holding').classList.remove('fa-flip-horizontal');
  document.querySelector('.dice').classList.remove('displaynone');
  document.querySelector('.player-controls').classList.remove('displaynone');
  document.querySelector('#amount-money').innerHTML = amountMoney + ' រៀល'
  cube.classList.add('animation-1');
  cube2.classList.add('animation-1');
  cube3.classList.add('animation-1');
}

document.querySelector('.btn-rules').addEventListener('click', function () {
  document.querySelector('.popuptext').classList.remove('hiderules');
  document.querySelector('.popuptext').classList.add('showrules');
});

document.querySelector('#tiger-button').addEventListener('click', function (e) {

  // reduce amount of money
  if (amountMoney == 0) {
    alert("you run out of balance");
    return
  }
  amountMoney -= eachPay
  betType.push(e.target.value)
  tigerButtonClick++
  amountMoneyBet += 1000
  document.querySelector('#amount-money').innerHTML = amountMoney + ' រៀល'
  document.querySelector('#tigerBetSpan').innerHTML = "X" + tigerButtonClick
})

document.querySelector('#crab-button').addEventListener('click', function (e) {

  // reduce amount of money
  if (amountMoney == 0) {
    alert("you run out of balance");
    return
  }

  amountMoney -= eachPay
  betType.push(e.target.value)
  crabButtonClick++
  amountMoneyBet += 1000
  document.querySelector('#amount-money').innerHTML = amountMoney + ' រៀល'
  document.querySelector('#crabBetSpan').innerHTML = "X" + crabButtonClick
})

document.querySelector('#fish-button').addEventListener('click', function (e) {

  // reduce amount of money
  if (amountMoney == 0) {
    alert("you run out of balance");
    return
  }

  amountMoney -= eachPay
  betType.push(e.target.value)
  console.log(betType)
  fishButtonClick++
  amountMoneyBet += 1000
  document.querySelector('#amount-money').innerHTML = amountMoney + ' រៀល'
  document.querySelector('#fishBetSpan').innerHTML = "X" + fishButtonClick
})

document.querySelector('#gourd-button').addEventListener('click', function (e) {

  // reduce amount of money
  if (amountMoney == 0) {
    alert("you run out of balance");
    return
  }

  amountMoney -= eachPay
  betType.push(e.target.value)
  gourdButtonClick++
  amountMoneyBet += 1000
  document.querySelector('#amount-money').innerHTML = amountMoney + ' រៀល'
  document.querySelector('#gourdBetSpan').innerHTML = "X" + gourdButtonClick
})

document.querySelector('#lobster-button').addEventListener('click', function (e) {
  console.log(e.target.value)
  // reduce amount of money
  if (amountMoney == 0) {
    alert("you run out of balance");
    return
  }

  amountMoney -= eachPay
  betType.push(e.target.value)
  lobsterButtonClick++
  amountMoneyBet += 1000
  document.querySelector('#amount-money').innerHTML = amountMoney + ' រៀល'
  document.querySelector('#lobsterBetSpan').innerHTML = "X" + lobsterButtonClick
})

document.querySelector('#roaster-button').addEventListener('click', function (e) {

  // reduce amount of money
  if (amountMoney == 0) {
    alert("you run out of balance");
    return
  }

  amountMoney -= eachPay
  betType.push(e.target.value)
  roasterButtonClick++
  amountMoneyBet += 1000
  document.querySelector('#amount-money').innerHTML = amountMoney + ' រៀល'
  document.querySelector('#roasterBetSpan').innerHTML = "X" + roasterButtonClick
})

function calculateResult() {

  console.log("betResult ", result)
  console.log("betType ", betType)
  let amountMatch = []
  let capital = 0
  let price = 0

  for (let betResult of result) {
    let amountBet = betType.filter(v => v == betResult).length
    if (amountBet > 0) {
      amountMatch.push(betResult)
      price += (amountBet * 1000)
    }

  }
  amountMatch = amountMatch.reduce((a, x) => a.includes(x) ? a : [...a, x], [])
  for (const a of amountMatch) {
    console.log('pdal ', betType.filter(v => v == a).length * 1000)
    price += betType.filter(v => v == a).length * 1000
  }
  console.log(price)
  console.log(amountMatch)
  // បូកលុយដើម
  amountMoney += price

  // reset everything
  betType = []
  result = []
  amountMoneyBet = 0

  tigerButtonClick = 0
  crabButtonClick = 0
  fishButtonClick = 0
  gourdButtonClick = 0
  lobsterButtonClick = 0
  roasterButtonClick = 0

  document.querySelector('#amount-money').innerHTML = amountMoney + ' រៀល'
  document.querySelector('#tigerBetSpan').innerHTML = ''
  document.querySelector('#crabBetSpan').innerHTML = ''
  document.querySelector('#fishBetSpan').innerHTML = ''
  document.querySelector('#gourdBetSpan').innerHTML = ''
  document.querySelector('#lobsterBetSpan').innerHTML = ''
  document.querySelector('#roasterBetSpan').innerHTML = ''
}

