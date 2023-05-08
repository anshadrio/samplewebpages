const button = document.getElementById("calculate");
button.addEventListener("click", function() {
  const text = document.getElementById("text").value;
  const words = text.split(" ").length;
  const result = document.getElementById("result");
  result.textContent = `There are ${words} words in the text.`;
  result.style.display = "block";
}
)
