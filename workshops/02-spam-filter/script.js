const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");
const rulesList = document.getElementById("rules");
const examples = document.getElementById("examples");

const helpRegex = /please help|assist me/i;
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
const stockRegex = /[s5][t7][o0]ck al[e3]r[t7]/i;

const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex];

const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

const ruleInfo = [
  { name: "Help request", regex: helpRegex, hint: "please help, assist me" },
  { name: "Dollar amounts", regex: dollarRegex, hint: "100 dollars, 5 million dollars" },
  { name: "Free money", regex: freeRegex, hint: "free money, fr33 m0ney (not inside other words)" },
  { name: "Stock alert", regex: stockRegex, hint: "stock alert, 570ck a13r7" }
];

const exampleMessages = [
  "Please help me move my account",
  "You won 5 million dollars!",
  "Get fr33 m0ney today",
  "570ck a13r7: buy now",
  "hands-free money tips",
  "Meeting at 3pm tomorrow"
];

const renderRules = (message = "") => {
  rulesList.innerHTML = "";
  ruleInfo.forEach(({ name, regex, hint }) => {
    const li = document.createElement("li");
    li.className = "rule";
    const hit = message !== "" && regex.test(message);
    if (hit) li.classList.add("hit");
    li.innerHTML = `<div class="rule-name"><span>${name}</span><span class="rule-flag">${hit ? "matched" : ""}</span></div>
      <code>${regex.toString()}</code><small>${hint}</small>`;
    rulesList.appendChild(li);
  });
};

exampleMessages.forEach((text) => {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "chip";
  chip.textContent = text;
  chip.addEventListener("click", () => {
    messageInput.value = text;
  });
  examples.appendChild(chip);
});

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  const message = messageInput.value;
  const spam = isSpam(message);
  result.className = "verdict show " + (spam ? "spam" : "safe");
  result.textContent = spam
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  renderRules(message);
  messageInput.value = "";
});

renderRules();
