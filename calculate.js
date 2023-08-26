var Head = document.getElementById("head");

const Ops = {
	o_null: 0,
	o_plus: 1,
	o_minus: 2,
	o_multiply: 3,
	o_divide: 4,
}

var hasOp = false;
var hasDecimal = false;
var input_1 = 0.0;
var input_2 = 0.0;
var operand = Ops.o_null;

document.getElementById("b_0").addEventListener("click", b_0);
document.getElementById("b_1").addEventListener("click", b_1);
document.getElementById("b_2").addEventListener("click", b_2);
document.getElementById("b_3").addEventListener("click", b_3);
document.getElementById("b_4").addEventListener("click", b_4);
document.getElementById("b_5").addEventListener("click", b_5);
document.getElementById("b_6").addEventListener("click", b_6);
document.getElementById("b_7").addEventListener("click", b_7);
document.getElementById("b_8").addEventListener("click", b_8);
document.getElementById("b_9").addEventListener("click", b_9);
document.getElementById("b_.").addEventListener("click", b_decimal);
document.getElementById("b_+").addEventListener("click", b_plus);
document.getElementById("b_-").addEventListener("click", b_minus);
document.getElementById("b_=").addEventListener("click", b_equals);
document.getElementById("b_*").addEventListener("click", b_mult);
document.getElementById("b_/").addEventListener("click", b_divide);
document.getElementById("b_clr").addEventListener("click", b_clr);

function b_0() {
  if(!hasOp){
    input_1 += 0;
    head.innerHTML = input_1;
  } else {
    input_2 += 0;
    head.innerHTML = input_2;
  }
}
function b_1() {
  if(!hasOp){
    input_1 += 1;
    head.innerHTML = input_1;
  } else {
    input_2 += 1;
    head.innerHTML = input_2;
  }
}
function b_2() {
  if(!hasOp){
    input_1 += 2;
    head.innerHTML = input_1;
  } else {
    input_2 += 2;
    head.innerHTML = input_2;
  }
}
function b_3() {
  if(!hasOp){
    input_1 += 3;
    head.innerHTML = input_1;
  } else {
    input_2 += 3;
    head.innerHTML = input_2;
  }
}
function b_4() {
  if(!hasOp){
    input_1 += 4;
    head.innerHTML = input_1;
  } else {
    input_2 += 4;
    head.innerHTML = input_2;
  }
}
function b_5() {
  if(!hasOp){
    input_1 += 5;
    head.innerHTML = input_1;
  } else {
    input_2 += 5;
    head.innerHTML = input_2;
  }
}
function b_6() {
  if(!hasOp){
    input_1 += 6;
    head.innerHTML = input_1;
  } else {
    input_2 += 6;
    head.innerHTML = input_2;
  }
}
function b_7() {
  if(!hasOp){
    input_1 += 7;
    head.innerHTML = input_1;
  } else {
    input_2 += 7;
    head.innerHTML = input_2;
  }
}
function b_8() {
  if(!hasOp){
    input_1 += 8;
    head.innerHTML = input_1;
  } else {
    input_2 += 8;
    head.innerHTML = input_2;
  }
}
function b_9() {
  if(!hasOp){
    input_1 += 9;
    head.innerHTML = input_1;
  } else {
    input_2 += 9;
    head.innerHTML = input_2;
  }
}
function b_decimal() {
  if(!hasOp){
    if(!hasDecimal){
      input_1 += '.';
      head.innerHTML = input_1;
    }
  } else {
    if(!hasDecimal){
      input_2 += '.';
      head.innerHTML = input_2;
    }
  }
}

function b_plus() {
  if(!hasOp){
    hasOp = true;
    hasDecimal = false;
    operand = Ops.o_plus;
    head.innerHTML += '+';
  } else {
    err(); return;
  }
}
function b_minus() {
  if(!hasOp){
    hasOp = true;
    hasDecimal = false;
    operand = Ops.o_minus;
    head.innerHTML += '-';
    
  } else {
    err(); return;
  }
}
function b_mult() {
  if(!hasOp){
    hasOp = true;
    hasDecimal = false;
    operand = Ops.o_multiply;
    head.innerHTML += '*';
  } else {
    err(); return;
  }
}
function b_divide() {
  if(!hasOp){
    hasOp = true;
    hasDecimal = false;
    operand = Ops.o_minus;
    head.innerHTML += '/';
  } else {
    err(); return;
  }
}

function b_equals() {
  if(!hasOp){
    err(); return;
  } else {
    var output = parseFloat(0.0);
    switch (operand) {
      case Ops.o_plus:
        output = parseFloat(input_1) + parseFloat(input_2);
        break;
      case Ops.o_minus:
        output = parseFloat(input_1) - parseFloat(input_2);
        break;
      case Ops.o_multiply:
        output = parseFloat(input_1) * parseFloat(input_2);
        break;
      case Ops.o_divide:
        if(parseFloat(input_2) == 0) {err(); return;}
        output = parseFloat(input_1) / parseFloat(input_2);
        break;
      default:
        err(); return;
    }
    head.innerHTML = output;    
    hasOp = false;
    hasDecimal = false;
    input_1 = output;
    input_2 = '';
    operand = Ops.o_null;
  }
}

function b_clr() {
  hasOp = false;
  input_1 = '';
  input_2 = '';
  operand = Ops.o_null;
  head.innerHTML = ''; 
}

function err() {
    b_clr();
    head.innerHTML = 'err'; 
}
