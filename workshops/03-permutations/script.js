const wordInput = document.getElementById("word-input");
const generateBtn = document.getElementById("generate-btn");
const summary = document.getElementById("summary");
const resultsList = document.getElementById("results");

function permuteString(str, prefix = "") {
  if (str.length === 0) {
    return [prefix];
  }
  const result = [];
  const usedChars = new Set();
  for (let i = 0; i < str.length; i++) {
    if (usedChars.has(str[i])) continue;
    usedChars.add(str[i]);
    const newPrefix = prefix + str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    result.push(...permuteString(remaining, newPrefix));
  }
  return result;
}

const render = () => {
  const word = wordInput.value.trim();
  resultsList.innerHTML = "";

  if (word === "") {
    summary.textContent = "Type a word with up to 7 letters.";
    return;
  }

  const permutations = permuteString(word);
  summary.innerHTML = `<strong>${permutations.length}</strong> unique permutation${permutations.length === 1 ? "" : "s"} of "${word}"`;

  permutations.forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    resultsList.appendChild(li);
  });
};

generateBtn.addEventListener("click", render);

wordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    render();
  }
});

render();
