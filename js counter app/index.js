// finding the elements
const reduceButton = document.getElementById("reduceCount");
const increaseButton = document.getElementById("increaseCount");
const countValue = document.querySelector("h1");

let count = 0;
countValue.textContent = count;

// Add event listeners
reduceButton.addEventListener("click", () => {
  count--;
  countValue.textContent = count;
});

increaseButton.addEventListener("click", () => {
  count++;
  countValue.textContent = count;
});
