
const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");


let currentValue = "0";
let previousValue = null;
let operator = null;
let shouldResetDisplay = false;


function updateDisplay(text) {
  const str = String(text);
  display.textContent = str.length > 12 ? Number(text).toExponential(6) : str;
}


function inputDigit(digit) {
  if (shouldResetDisplay) {
    currentValue = digit;
    shouldResetDisplay = false;
  } else {
    if (currentValue === "0" && digit !== ".") currentValue = digit;
    else currentValue += digit;
  }
  updateDisplay(currentValue);
}

function inputDecimal() {
  if (shouldResetDisplay) {
    currentValue = "0.";
    shouldResetDisplay = false;
  } else if (!currentValue.includes(".")) {
    currentValue += ".";
  }
  updateDisplay(currentValue);
}

function inputDoubleZero() {
  if (shouldResetDisplay) {
    currentValue = "0";
  } else if (currentValue !== "0") {
    currentValue += "00";
  }
  updateDisplay(currentValue);
}

function clearAll() {
  currentValue = "0";
  previousValue = null;
  operator = null;
  shouldResetDisplay = false;
  updateDisplay(currentValue);
  setOperatorActive(null);
}

function setOperatorActive(op) {
  buttons.querySelectorAll(".btn-op").forEach((btn) => btn.classList.remove("active"));
  const active = op && buttons.querySelector(`[data-action="${op}"]`);
  if (active) active.classList.add("active");
}

function applyPercent() {
  const n = parseFloat(currentValue);
  if (Number.isNaN(n)) return;
  currentValue = String(n / 100);
  updateDisplay(currentValue);
}

function setOp(nextOp) {
  const n = parseFloat(currentValue);
  if (Number.isNaN(n)) return;
  if (previousValue !== null && operator && !shouldResetDisplay) {
    const result = compute(previousValue, operator, n);
    currentValue = String(result);
    updateDisplay(currentValue);
  }
  previousValue = parseFloat(currentValue);
  operator = nextOp;
  shouldResetDisplay = true;
  setOperatorActive(nextOp);
}

function compute(a, op, b) {
  const x = Number(a);
  const y = Number(b);
  switch (op) {
    case "add": return x + y;
    case "subtract": return x - y;
    case "multiply": return x * y;
    case "divide": return y === 0 ? "Error" : x / y;
    default: return b;
  }
}

function equals() {
  if (previousValue === null || !operator) return;
  const n = parseFloat(currentValue);
  if (Number.isNaN(n)) return;
  const result = compute(previousValue, operator, n);
  currentValue = result === "Error" ? "0" : String(result);
  previousValue = null;
  operator = null;
  shouldResetDisplay = true;
  setOperatorActive(null);
  updateDisplay(currentValue);
}

const actionMap = {
  ac: clearAll,
  "00": inputDoubleZero,
  percent: applyPercent,
  divide: () => setOp("divide"),
  multiply: () => setOp("multiply"),
  subtract: () => setOp("subtract"),
  add: () => setOp("add"),
  equals,
  decimal: inputDecimal,
};

buttons.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn");
  if (!btn) return;
  const action = btn.getAttribute("data-action");
  if (!action) return;
  if (actionMap[action]) actionMap[action]();
  else if (/^\d$/.test(action)) inputDigit(action);
});
