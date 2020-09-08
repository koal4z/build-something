const resEl = document.querySelector('#res');
const btn0El = document.querySelector('#btn0');
const btn1El = document.querySelector('#btn1');
const btnClrEl = document.querySelector('#btnClr');
const btnEqlEl = document.querySelector('#btnEql');
const btnSumEl = document.querySelector('#btnSum');
const btnSubEl = document.querySelector('#btnSub');
const btnMulEl = document.querySelector('#btnMul');
const btnDivEl = document.querySelector('#btnDiv');

btn0El.addEventListener('click', () => {
  resEl.innerHTML += 0;
});

btn1El.addEventListener('click', () => {
  resEl.innerHTML += 1;
});

btnClrEl.addEventListener('click', () => {
  resEl.innerHTML = '';
});

btnSumEl.addEventListener('click', () => {
  resEl.innerHTML += '+';
});

btnSubEl.addEventListener('click', () => {
  resEl.innerHTML += '-';
});

btnDivEl.addEventListener('click', () => {
  resEl.innerHTML += '/';
});
btnMulEl.addEventListener('click', () => {
  resEl.innerHTML += '*';
});

btnEqlEl.addEventListener('click', () => {
  let str = resEl.innerHTML;
  let val1 = '';
  let val2 = '';
  let operant = '';
  let count = '';

  str.split('').forEach((x) => {
    if (!/0|1/.test(x)) {
      operant = x;
      if (!val1) {
        val1 = count;
        count = '';
      }
    }
    count += x;
  });

  val2 = str.slice(str.indexOf(operant) + 1);

  function operation(a, b, operant) {
    if (operant === '+') {
      return parseInt(a, 2) + parseInt(b, 2);
    } else if (operant === '-') {
      return parseInt(a, 2) - parseInt(b, 2);
    } else if (operant === '*') {
      return parseInt(a, 2) * parseInt(b, 2);
    } else if (operant === '/') {
      return parseInt(a, 2) / parseInt(b, 2);
    }
  }

  resEl.innerHTML = operation(val1, val2, operant).toString(2);
});
