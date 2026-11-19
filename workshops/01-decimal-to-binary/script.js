const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const callStack = document.getElementById("call-stack");
const log = document.getElementById("log");
const errorEl = document.getElementById("error");

let timers = [];

const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const later = (fn, ms) => timers.push(setTimeout(fn, ms));

const clearTimers = () => {
  timers.forEach(clearTimeout);
  timers = [];
};

const buildFrames = (n) => {
  const frames = [n];
  while (n !== 0 && n !== 1) {
    n = Math.floor(n / 2);
    frames.push(n);
  }
  return frames;
};

const addLog = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  log.appendChild(li);
  log.scrollTop = log.scrollHeight;
};

const runAnimation = (n) => {
  clearTimers();
  callStack.innerHTML = "";
  log.innerHTML = "";
  result.textContent = "…";

  const frames = buildFrames(n);
  const els = [];
  const pushStep = 700;
  const popStep = 900;

  frames.forEach((value, i) => {
    later(() => {
      const p = document.createElement("p");
      p.className = "frame";
      p.textContent = `decimalToBinary(${value})`;
      callStack.prepend(p);
      els.push(p);
      if (value === 0 || value === 1) {
        addLog(`Base case: ${value} is 0 or 1, so it returns "${value}".`);
      } else {
        addLog(`decimalToBinary(${value}) calls decimalToBinary(${Math.floor(value / 2)}) and waits.`);
      }
    }, i * pushStep);
  });

  const unwindStart = frames.length * pushStep + 300;
  for (let k = frames.length - 1; k >= 0; k--) {
    const step = frames.length - 1 - k;
    later(() => {
      const value = frames[k];
      const returned = decimalToBinary(value);
      els[k].classList.add("returning");
      els[k].textContent = `decimalToBinary(${value}) returns "${returned}"`;
      if (value !== 0 && value !== 1) {
        addLog(`Back in decimalToBinary(${value}): "${decimalToBinary(Math.floor(value / 2))}" + ${value % 2} = "${returned}".`);
      }
      later(() => els[k].remove(), popStep - 200);
      if (k === 0) result.textContent = returned;
    }, unwindStart + step * popStep);
  }
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  errorEl.textContent = "";

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    errorEl.textContent = "Please provide a decimal number greater than or equal to 0";
    return;
  }

  if (inputInt > 1000000) {
    errorEl.textContent = "Please use a number up to 1,000,000 so the stack stays readable.";
    return;
  }

  runAnimation(inputInt);
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

checkUserInput();
