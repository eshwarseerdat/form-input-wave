const labels = document.querySelectorAll("label");

// wrap each label character in a span
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (char, i) => `<span style="transition-delay: ${i * 50}ms">${char}</span>`
    )
    .join("");
});
